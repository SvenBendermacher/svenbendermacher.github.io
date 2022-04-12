var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var expand_info = this.nextElementSibling;
    if (expand_info.style.maxHeight){
      expand_info.style.maxHeight = null;
    } else {
      expand_info.style.maxHeight = expand_info.scrollHeight + "px";
    }
  });
}
