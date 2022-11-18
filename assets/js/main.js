const header = document.querySelector(".header");
const burger = document.querySelector(".burger");

const headerHeight = header.offsetHeight;
burger.style.height = `${headerHeight*0.4}px`;
burger.style.width = `${headerHeight*0.4}px`;