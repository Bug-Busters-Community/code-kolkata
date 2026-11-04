/**
 * Small bridge between React components and the Lenis instance that App
 * creates. Lenis is imported lazily, so it may not exist yet when the first
 * effect runs; every helper falls back to native scrolling until it does.
 */
let lenis = null;
let lockCount = 0;
let bodyOverflow = "";

export function setLenis(instance) {
  lenis = instance;
  // A dialog or the mobile menu may already be open before the async import
  // resolves. Keep the page locked in that case.
  if (lenis && lockCount > 0) lenis.stop();
}

export function scrollToTop({ immediate = false } = {}) {
  if (lenis) {
    lenis.scrollTo(0, { immediate, force: true });
    return;
  }

  window.scrollTo({ top: 0, left: 0, behavior: immediate ? "auto" : "smooth" });
}

export function lockScroll() {
  lockCount += 1;
  if (lockCount === 1) {
    bodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
  lenis?.stop();
}

export function unlockScroll() {
  if (lockCount === 0) return;
  lockCount -= 1;
  if (lockCount > 0) return;

  document.body.style.overflow = bodyOverflow;
  lenis?.start();
}
