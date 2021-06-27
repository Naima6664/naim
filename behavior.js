document.addEventListener("DOMContentLoaded", function(event) {
 var bigImg =docoment.getElementById('big');
 var smart_thumbnail = getElementById('smart_thumb').getElementByTagName('img');
 for (var i=0; i<smart_thumb.length; i++){
    smart_thumb[i].addEventListener('click',full_image);

}
function full_image(){
    var imgsrc=this.getAttribute('src');
    bigImg.innerHTML = "<img src = "+imgsrc+">";
}
});