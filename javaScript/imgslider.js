
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
    dots[i].style.backgroundColor = "var(--black)";
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-red";
  dots[slideIndex-1].style.backgroundColor = "var(--white)";
}

//  <div class="content">
//    <div class="img_slider">
//       <img class="mySlides" src="..\img\groepsfoto_5.jpeg">
//	     <img class="mySlides" src="..\img\groepsfoto_7.jpg">
//        <div class="button-controls-slider">
//          <div class="left-button next-button" onclick="plusDivs(-1)">&#10094;</div>
//          <div class="right-button next-button" onclick="plusDivs(1)">&#10095;</div>
//          <div class="button-select demo button-1" onclick="currentDiv(1)"></div>
//          <div class="button-select demo button-2" onclick="currentDiv(2)"></div>
//        </div>
//      </div>
