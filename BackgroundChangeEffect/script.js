var ImgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var leftSpace = ImgBox.offsetLeft;
var originalImg = document.getElementById("originalImg");
var line = document.getElementById("line");

originalImg.style.width = ImgBox.offsetWidth + "px";

ImgBox.onmousemove = function(e){
   var boxWidth = (e.pageX - leftSpace) + "px";
   imgWrap.style.width = boxWidth;
   line.style.left = boxWidth;
}