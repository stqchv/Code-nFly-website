document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 3000);

  loader.addEventListener("transitionend", () => {
    loader.remove();
  });
});
