
var link = document.querySelector(".brown");
var popup = document.querySelector("modal-search");
var close = document.querySelector(".brown");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-hide");
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-hide");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-hide")) {
      popup.classList.remove("modal-hide");
    }
  }
});

/* 
let div = document.getElementsByClassName('btn brown')[0];
let modal = document.getElementsByClassName('modal modal-search' [0]);

div.addEventListener('click', function (event) {
  if (modal.classList[2] == 'hide');
} else {
  modal.classList.add('hide');
})
*/