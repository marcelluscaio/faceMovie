const header = document.querySelector(".header");
const burger = document.querySelector(".burger");

function resizeBurger() {
   const headerHeight = header.offsetHeight;
   burger.style.height = `${headerHeight*0.4}px`;
   burger.style.width = `${headerHeight*0.4}px`;
}
window.addEventListener("load", resizeBurger);
window.addEventListener("resize", resizeBurger);