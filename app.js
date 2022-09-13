var index = 1;
changeImage = function () {
    var imgs = ["4.png", "5.png", "6.png", "7.png"];
    document.getElementById('img').src = imgs[index];
    index++;
    if (index == 4) {
        index = 0;
    }
}
setInterval(changeImage, 1500);