const burger = document.querySelector(".burger");
const nav = document.querySelector(".list");
const navListItem = document.querySelectorAll(".list li");

burger.addEventListener("click", () => {
  nav.classList.toggle("transition");
  nav.classList.toggle("burger-active");
});

navListItem.forEach((link, index) => {
  link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
});

//For Animation

console.log("running..");
