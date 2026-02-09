let images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg"
];

let index = 0;
let sliderImage = document.getElementById("sliderImage");

function nextImage() {
    index = (index + 1) % images.length;
    sliderImage.src = images[index];
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    sliderImage.src = images[index];
}

/* Auto slide */
setInterval(nextImage, 3000);
