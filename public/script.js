document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");

  // Minimum czas wyświetlania loadera (np. 800ms)
  setTimeout(() => {
    loader.style.display = "none";
  }, 1200);
});
