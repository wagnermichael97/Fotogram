let photos = [
    "./assets/img/img_1.png",
    "./assets/img/img_2.png",
    "./assets/img/img_3.png",
    "./assets/img/img_4.png",
    "./assets/img/img_5.png",
    "./assets/img/img_6.png",
    "./assets/img/img_7.png",
    "./assets/img/img_8.png",
    "./assets/img/img_9.png",
    "./assets/img/img_10.png",
    "./assets/img/img_11.png",
    "./assets/img/img_12.png"
]

let photoBoxEL = document.getElementById("photo-box");

photoBoxEL.innerHTML = [];

for (let i=0; i < photos.length; i++) {
    photoBoxEL.innerHTML += `<img src="${photos[i]}">`;
}