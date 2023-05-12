var sliders = document.querySelector("img")
var myimg = ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg']

var i = 0

//previous
function forprevious() {
    if (i <= 0) {

        i = myimg.length;
    }


    i--;
    return setImage();
}

//next
function fornext() {
    if (i >= myimg.length - 1) {
        i = -1;
    }
    i++
    return setImage()

}

function setImage() {
    return sliders.setAttribute('src', 'images2/' + myimg[i])
}