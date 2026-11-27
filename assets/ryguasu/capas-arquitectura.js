(() => {
  const intro = document.getElementById("ryguasu-intro");
  const video = document.getElementById("architecture-animation");
  const skip = document.getElementById("ryguasu-intro-skip");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (reducedMotion.matches || typeof intro.showModal !== "function") return;

  const timeout = window.setTimeout(dismiss, 2600);

  function dismiss() {
    if (intro.open) intro.close();
  }

  intro.addEventListener("close", () => {
    window.clearTimeout(timeout);
    video.pause();
    reducedMotion.removeEventListener("change", dismiss);
  }, { once: true });
  reducedMotion.addEventListener("change", dismiss);
  window.addEventListener("pagehide", dismiss, { once: true });
  skip.addEventListener("click", dismiss);
  video.addEventListener("ended", dismiss, { once: true });
  video.addEventListener("error", dismiss, { once: true });
  video.addEventListener("playing", () => intro.classList.add("is-playing"), { once: true });

  intro.showModal();
  video.play().catch(dismiss);
})();
