document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const iconContainer = document.querySelector(".icon-container");
  const mobileLinks = document.querySelector(".mobile-links");

  // Open and close mobile menu

  iconContainer.addEventListener("click", () => {
    if (menuIcon.classList.contains("fa-bars")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-x");
    } else {
      menuIcon.classList.add("fa-bars");
      menuIcon.classList.remove("fa-x");
    }

    mobileLinks.classList.toggle("active");
  });

  // Clicking a link in the mobile menu closes it

  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (menuIcon.classList.contains("fa-bars")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-x");
      } else {
        menuIcon.classList.add("fa-bars");
        menuIcon.classList.remove("fa-x");
      }

      mobileLinks.classList.remove("active");
    });
  });

  // Show scroll to top button

  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }
  });

  // Fade-in animation

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
});
