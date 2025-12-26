function easeInOutCubic(t){
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function smoothScroll(target, duration = 900, offset = 0){
  if (!target) return;
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) return;
  const start = window.scrollY || window.pageYOffset;
  const rect = element.getBoundingClientRect();
  const targetY = rect.top + start - offset;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const finalY = Math.min(targetY, maxScroll);
  const startTime = performance.now();

  function step(now){
    const elapsed = now - startTime;
    const t = Math.min(1, elapsed / duration);
    const eased = easeInOutCubic(t);
    window.scrollTo(0, Math.round(start + (finalY - start) * eased));
    if (elapsed < duration) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
