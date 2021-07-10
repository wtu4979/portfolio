window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  var name = document.getElementById("navbar-name");
  var role = document.getElementById("navbar-role");

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    name.style.visibility = "hidden";
    role.style.visibility = "hidden";
    } else {
    name.style.visibility = "visible";
    role.style.visibility = "visible";
  }
}