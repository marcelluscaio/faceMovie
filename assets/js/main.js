//Set burger width and height
const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
function resizeBurger() {
   const headerHeight = header.offsetHeight;
   burger.style.height = `${headerHeight*0.4}px`;
   burger.style.width = `${headerHeight*0.4}px`;
};
window.addEventListener("load", resizeBurger);
window.addEventListener("resize", resizeBurger);

//Set card section height based on header, user section and footer height
const cardSection2 = document.querySelector(".card-section"); //figure out how not to duplicate cardSection with modal
const userField = document.querySelector(".user-field");
const footer = document.querySelector("footer");
const totalHeight = window.innerHeight;
function setCardSectionHeight(){
   const headerHeight = header.offsetHeight;
   const userFieldHeight = userField.offsetHeight;
   const footerHeight = footer.offsetHeight;
   const totalHeight = window.innerHeight;
   cardSection2.style.minHeight = `${totalHeight - headerHeight - userFieldHeight - footerHeight +1}px`; //I put +1 to avoid a white line below
   console.log(`${totalHeight - headerHeight - userFieldHeight - footerHeight}px`)
}

window.addEventListener("load", setCardSectionHeight);
window.addEventListener("resize", setCardSectionHeight);

//Mode change trigger
const modeCheckbox = document.querySelector("#checkbox");
modeCheckbox.addEventListener("change", () => {
   const root = document.querySelector(":root");
   root.classList.toggle("dark")
})