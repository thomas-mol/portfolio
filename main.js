document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const iconContainer = document.querySelector(".icon-container");
  const mobileLinks = document.querySelector(".mobile-links");

  iconContainer.addEventListener("click", () => {
    if (menuIcon.classList.contains("fa-bars")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-x");
      menuIcon.style.color = "#f7f7f7";
    } else {
      menuIcon.classList.add("fa-bars");
      menuIcon.classList.remove("fa-x");
      menuIcon.style.color = "#140896";
    }

    mobileLinks.classList.toggle("active");
  });
});
