function initParallaxZoom(container, {
  layerSelector = '.zoom-layer',
  maxScale = 3,
  minScale = 1,
  wheelStep = 0.1
} = {}) {
  const layer = typeof layerSelector === 'string'
    ? container.querySelector(layerSelector)
    : layerSelector;

  if (!layer) {
    throw new Error('Zoom layer not found');
  }

  let scale = 1;
  let posX = 0;
  let posY = 0;
  let startX = 0;
  let startY = 0;
  let dragging = false;

  // Allow interactions inside the zoomed content
  container.style.pointerEvents = 'auto';
  layer.style.pointerEvents = 'auto';

  const update = () => {
    layer.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
  };

  // Zoom with mouse wheel or trackpad
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = -e.deltaY * wheelStep / 100;
    scale = Math.min(maxScale, Math.max(minScale, scale + delta));
    update();
  }, { passive: false });

  // Handle drag based panning for both mouse and touch
  container.addEventListener('pointerdown', (e) => {
    // Only initiate drag when starting on the container or layer itself
    if (e.button !== 0 || (e.target !== container && e.target !== layer)) return;
    dragging = true;
    startX = e.clientX - posX;
    startY = e.clientY - posY;
    if (container.setPointerCapture) {
      container.setPointerCapture(e.pointerId);
    }
  });

  container.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    posX = e.clientX - startX;
    posY = e.clientY - startY;
    update();
  });

  const endDrag = (e) => {
    if (!dragging) return;
    dragging = false;
    if (container.releasePointerCapture) {
      container.releasePointerCapture(e.pointerId);
    }
  };

  container.addEventListener('pointerup', endDrag);
  container.addEventListener('pointercancel', endDrag);
}

module.exports = initParallaxZoom;
