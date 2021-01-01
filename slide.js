var slider_content = document.getElementById('boxslide');
var image = ['2','3', '4', '1'];
var i = image.length;

function proxImage(){
  if (i<image.length) {
    i= i+1;
  }else{
    i = 1;
  }
    slider_content.innerHTML = "<img src=slideimg/"+image[i-1]+".jpg>";
}

function antImage(){

  if (i<image.length+1 && i>1) {
    i= i-1;
  }else{
    i = image.length;
  }
    slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";

}

