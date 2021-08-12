const images = [
    "0.jpg", "1.jpg", "2.jpg"
];
function setBGImages () {
const url = "url(img/"+images[Math.floor(Math.random() * images.length)]+")";

document.getElementById("bg").style.backgroundImage = url;
};
setBGImages();