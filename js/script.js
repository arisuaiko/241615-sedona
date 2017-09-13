var link = document.querySelector(".brown");
var popup = document.querySelector(".modal-search");
var html = document.documentElement;

html.className = html.className.replace("no-js", "js");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("modal-show")) {
    popup.classList.add("modal-hide");
    popup.classList.remove("modal-show");
  } else {
    popup.classList.add("modal-show");
    popup.classList.remove("modal-hide");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.add("modal-hide");
    }
  }
});

