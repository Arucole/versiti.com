"Use strict";
// import { db } from "./firebase";
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const myBtn = document.getElementById("myBtn"); // btn that opens the modal
const myModal = document.getElementById("myModal"); // get the modaal
const closeBtn = document.querySelector(".close"); // element that closes the modal
const modalBtn = document.getElementById("modal-btn"); // button in fist modal page

// hamburger menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// hamburger remove
document.querySelectorAll(".nav-list").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.style.display("none");
  })
);

// button modal display
myBtn.addEventListener("click", () => {
  myModal.style.display = "block";
});

// close modal event button
closeBtn.addEventListener("click", () => {
  myModal.style.display = "none";
});

// close modal function
// const closeModal = function () {
//   myModal.remove();
// };

// close window event button
// window.onclick = function (event) {
//   if (event.target == myModal) {
//     myModal.style.display = "none";
//   }
// };
