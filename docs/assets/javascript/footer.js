const sections = document.querySelectorAll(".footer-content");

sections.forEach(section => {
  const title = section.querySelector("h3");

  // ignora o primeiro bloco (logo + texto)
  if(!title) return;

  title.addEventListener("click", () => {
    section.classList.toggle("active");
  });
});