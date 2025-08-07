// Parallax zoom module with drag-based panning using pointer events.
// This module attaches listeners for wheel-based zooming and pointer-based
// dragging so users can pan the zoomed content with either mouse or touch
// inputs. Child elements remain interactive because we maintain
// `pointer-events: auto` on the zoomed container and avoid stopping event
// propagation.

export default function parallaxZoom(container) {
  if (!container) return;

  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let pointerActive = false;
  let startX = 0;
  let startY = 0;

  // Ensure the container allows pointer events so children remain selectable.
  container.style.pointerEvents = 'auto';

  function updateTransform() {
    container.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  }

  // Basic wheel-based zooming.
  container.addEventListener(
    'wheel',
    (event) => {
      event.preventDefault();
      const delta = Math.sign(event.deltaY) * -0.1;
      scale = Math.min(Math.max(1, scale + delta), 4);
      updateTransform();
    },
    { passive: false }
  );

  // Pointer events handle both mouse and touch based dragging for panning.
  container.addEventListener('pointerdown', (event) => {
    // Only begin panning with primary button / touch contact.
    if (event.button !== 0) return;
    pointerActive = true;
    startX = event.clientX - translateX;
    startY = event.clientY - translateY;
    container.setPointerCapture(event.pointerId);
  });

  container.addEventListener('pointermove', (event) => {
    if (!pointerActive) return;
    translateX = event.clientX - startX;
    translateY = event.clientY - startY;
    updateTransform();
  });

  function endPan(event) {
    if (!pointerActive) return;
    pointerActive = false;
    container.releasePointerCapture(event.pointerId);
  }

  container.addEventListener('pointerup', endPan);
  container.addEventListener('pointercancel', endPan);
}
