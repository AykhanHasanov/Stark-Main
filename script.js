const closebtn = document.getElementById("close");
const watchlist = document.getElementById("watchlist");
const watchlistbtn = document.getElementById("watchlistbtn");

const deleteitem1 = document.getElementById("deleteitem1");
const deleteitem2 = document.getElementById("deleteitem2");
const deleteitem3 = document.getElementById("deleteitem3");
const deleteitem4 = document.getElementById("deleteitem4");

const deletebtn1 = document.getElementById("deletebtn1");
const deletebtn2 = document.getElementById("deletebtn2");
const deletebtn3 = document.getElementById("deletebtn3");
const deletebtn4 = document.getElementById("deletebtn4");

const close2btn = document.getElementById("close2btn");
const sign = document.getElementById("sign");
const signinbtn = document.getElementById("signinbtn");
const firstLeft = document.getElementById("first-left");
const firstRight = document.getElementById("first-right");
const firstCard = document.getElementById("first-card");

const secondLeft = document.getElementById("second-left");
const secondRight = document.getElementById("second-right");
const secondCard = document.getElementById("second-card");
firstLeft.addEventListener("click", () => {
  firstCard.scroll({ left: 0, behavior: "smooth" });
});

firstRight.addEventListener("click", () => {
  firstCard.scroll({ left: 1000, behavior: "smooth" });
});

secondLeft.addEventListener("click", () => {
  secondCard.scroll({ left: 0, behavior: "smooth" });
});

secondRight.addEventListener("click", () => {
  secondCard.scroll({ left: 1000, behavior: "smooth" });
});

signinbtn.addEventListener("click", () => {
  sign.style.display = "inline-block";
});

close2btn.addEventListener("click", () => {
  sign.style.display = "none";
});

watchlistbtn.addEventListener("click", () => {
  watchlist.style.display = "inline-block";
});

closebtn.addEventListener("click", () => {
  watchlist.style.display = "none";
});

deletebtn1.addEventListener("click", () => {
  deleteitem1.style.display = "none";
});

deletebtn2.addEventListener("click", () => {
  deleteitem2.style.display = "none";
});

deletebtn3.addEventListener("click", () => {
  deleteitem3.style.display = "none";
});

deletebtn4.addEventListener("click", () => {
  deleteitem4.style.display = "none";
});

document.querySelector("#checkbox").addEventListener("change", () => {
  document.querySelector("#checkbox").checked
    ? (document.querySelector(".menu").style.background = "#FFF")
    : (document.querySelector(".menu").style.background = "transparent");
});
