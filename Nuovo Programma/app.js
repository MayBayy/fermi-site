function chbg(color) {
    document.getElementById('body1').style.backgroundColor = color;
    document.getElementById('body1').style.transition = "1.5s";
}   
 function chbgfast(color) {
    document.getElementById('body1').style.backgroundColor = color;
    document.getElementById('body1').style.transition = "0.3s";
 }

 function chbgstill(color) {
     document.getElementById('body1').style.backgroundColor = color;
 }

 function myFunction(x) {
    x.classList.toggle("change");
  }