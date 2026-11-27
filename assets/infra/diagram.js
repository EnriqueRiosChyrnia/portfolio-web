(() => {
  const open = document.querySelector(".infra-diagram__open");
  const dialog = document.querySelector(".infra-dialog");
  if (!open || !dialog || typeof dialog.showModal !== "function") return;

  const preview = open.querySelector("img");
  const enlarged = dialog.querySelector("img");
  const scroll = dialog.querySelector(".infra-dialog__scroll");

  open.addEventListener("click", (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    enlarged.src = open.href;
    enlarged.alt = preview.alt;
    dialog.showModal();
    scroll.scrollTo(0, 0);
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
})();
