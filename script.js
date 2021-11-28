 
 function clickFunction(x){
   var copytext = document.getElementById("x").innerHTML
   alert("copiedtext :"+copytext)
 }
 
 function newMouseOver(x){
    x.style.background="blue";
    x.style.color="white" }

function newMouseOut(x){     x.style.background="white";
    x.style.color="blue" }

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})