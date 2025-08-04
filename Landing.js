// Highlight active menu item on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Fade-in animation when sections appear
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;

  faders.forEach(fader => {
    const boxTop = fader.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      fader.classList.add("visible");
    }
  });
});
