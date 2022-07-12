
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
     
    document.getElementById("navbar").style.background = "var(--white)";
    document.getElementById("navbar").style.boxShadow = "inset 0 -1px 0 var(--secondary)";
    document.getElementById("navbar").style.height = "50px";
    document.getElementById("nav_bar").style.marginTop = "0";
    document.getElementById("home_name").style.opacity = "1";

  } else {
    
    document.getElementById("navbar").style.background = "none";
    document.getElementById("navbar").style.boxShadow = "none"
    document.getElementById("navbar").style.height = "90px";
    document.getElementById("nav_bar").style.marginTop = "20px";
    document.getElementById("home_name").style.opacity = "0";

  }
}

function openNav() {
  if (window.innerWidth < 500) {
    document.getElementsByClassName("sidenav")[0].style.width = "100vw";
  } else {
    document.getElementsByClassName("sidenav")[0].style.width = "300px";
  }
}

function closeNav() {
  document.getElementsByClassName("sidenav")[0].style.width = "0";
}
