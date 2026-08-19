let photos = [
    "./assets/img/img_1_big.jpg",
    "./assets/img/img_2_big.jpg",
    "./assets/img/img_3_big.png",
    "./assets/img/img_4_big.jpg",
    "./assets/img/img_5_big.jpg",
    "./assets/img/img_6_big.jpg",
    "./assets/img/img_7_big.jpg",
    "./assets/img/img_8_big.jpg",
    "./assets/img/img_9_big.jpg",
    "./assets/img/img_10_big.jpg",
    "./assets/img/img_11_big.jpg",
    "./assets/img/img_12_big.jpg",
    
]

let photoBoxEL = document.getElementById("photo-box");
let widgetBoxEL = document.getElementById("widget-box");

photoBoxEL.innerHTML = [];


for (let i = 0; i < photos.length; i++) {
    photoBoxEL.innerHTML += `<img src="${photos[i]}" onclick="openLarge(${i})">`;
}

function openLarge(index) {
    widgetBoxEL.innerHTML = `<img src="${photos[index]}">`;
}