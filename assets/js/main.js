var header = document.getElementById("navbar-list");
var link = header.getElementsByClassName("navbar__link");

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("navbar__item--active");
  current[0].className = current[0].className.replace(" navbar__item--active", "");
  this.className += " navbar__item--active";
  });
}