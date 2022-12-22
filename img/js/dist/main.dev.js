"use strict";

var form = document.querySelector(".form");
var input = document.querySelector(".form_input");
input.addEventListener("focus", function (event) {
  form.classList.add("form--active");
});
input.addEventListener("blur", function (event) {
  form.classList.remove("form--active");
});
var imgon = document.querySelector(".objects_img");
var cardInfo = document.querySelector(".card-info");
imgon.addEventListener("mouseover", function (event) {
  cardInfo.classList.add("card-info--active");
});
imgon.addEventListener("mouseout", function (event) {
  cardInfo.classList.remove("card-info--active");
});