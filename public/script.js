document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 1200);

  loader.addEventListener("transitionend", () => {
    loader.remove();
  });
});
