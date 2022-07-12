//normal addEventListener doenst work because these elements are created in js

//var coll = document.getElementsByClassName("collapsible");
//var i;
//
//for (i = 0; i < coll.length; i++) {
//  coll[i].addEventListener("click", function() {
//    this.classList.toggle("active");
//    var expandInfo = this.nextElementSibling;
//    if (expandInfo.style.maxHeight){
//      expandInfo.style.maxHeight = null;
//    } else {
//      expandInfo.style.maxHeight = expandInfo.scrollHeight + "px";
//    }
//  });
//}

document.addEventListener('click',function(e){
  if(e.target && e.target.id== 'collapsible'){
    (function() {
      e.target.classList.toggle("active");
      var expandInfo = e.target.nextElementSibling;
      if (expandInfo.style.maxHeight){
        expandInfo.style.maxHeight = null;
        expandInfo.style.paddingTop = "0";
      } else {
        expandInfo.style.maxHeight = expandInfo.scrollHeight + "px";
        expandInfo.style.paddingTop = "20px";
      }
    })();
  }
});
