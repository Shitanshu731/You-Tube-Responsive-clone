
var menicon = document.querySelector(".menu-icon");
var sidebar1 = document.querySelector(".sidebar");
var container1 = document.querySelector(".container");

menicon.onclick = function() {
  sidebar1.classList.toggle("small-sidebar");
  container1.classList.toggle("large-container");
};