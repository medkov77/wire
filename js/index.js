const menu = document.querySelector(".mobile-menu");
document.body.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("burger")) {
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
  }
});
