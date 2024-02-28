document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const iconContainer = document.querySelector(".icon-container");
  const mobileLinks = document.querySelector(".mobile-links");

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

  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }
  });
});
