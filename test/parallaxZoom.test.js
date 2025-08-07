const { JSDOM } = require('jsdom');
const initParallaxZoom = require('../src/scripts/parallaxZoom.js');

const dom = new JSDOM(
  `<!doctype html><body><div id="container"><div class="zoom-layer"><p id="text">Hello</p></div></div></body>`,
  { pretendToBeVisual: true }
);
const { document } = dom.window;
const container = document.getElementById('container');
const layer = container.querySelector('.zoom-layer');

if (typeof dom.window.PointerEvent === 'undefined') {
  dom.window.PointerEvent = dom.window.MouseEvent;
}

initParallaxZoom(container);

// Wheel zoom
container.dispatchEvent(new dom.window.WheelEvent('wheel', { deltaY: -100 }));
if (!layer.style.transform.includes('scale')) {
  throw new Error('Zoom not applied');
}

// Mouse pan
container.dispatchEvent(new dom.window.PointerEvent('pointerdown', { pointerId: 1, clientX: 0, clientY: 0, button: 0 }));
container.dispatchEvent(new dom.window.PointerEvent('pointermove', { pointerId: 1, clientX: 10, clientY: 15 }));
container.dispatchEvent(new dom.window.PointerEvent('pointerup', { pointerId: 1 }));
if (!layer.style.transform.includes('translate(10px, 15px)')) {
  throw new Error('Mouse pan failed');
}

// Touch pan
container.dispatchEvent(new dom.window.PointerEvent('pointerdown', { pointerId: 2, pointerType: 'touch', clientX: 10, clientY: 10 }));
container.dispatchEvent(new dom.window.PointerEvent('pointermove', { pointerId: 2, pointerType: 'touch', clientX: 20, clientY: 30 }));
container.dispatchEvent(new dom.window.PointerEvent('pointerup', { pointerId: 2, pointerType: 'touch' }));
if (!layer.style.transform.includes('translate(20px, 35px)')) {
  throw new Error('Touch pan failed');
}

// Interaction inside zoom layer should not trigger panning
const text = document.getElementById('text');
const previous = layer.style.transform;
text.dispatchEvent(new dom.window.PointerEvent('pointerdown', { pointerId: 3, clientX: 30, clientY: 40, button: 0 }));
text.dispatchEvent(new dom.window.PointerEvent('pointermove', { pointerId: 3, clientX: 50, clientY: 60 }));
text.dispatchEvent(new dom.window.PointerEvent('pointerup', { pointerId: 3 }));
if (layer.style.transform !== previous) {
  throw new Error('Interaction on child element should not pan');
}

console.log('parallaxZoom tests passed');
