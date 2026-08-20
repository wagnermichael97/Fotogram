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

let alts = [
    "Alaska",
    "Tokyo",
    "Clouds",
    "Bird",
    "Hurricane",
    "Winter Landscape",
    "Duck",
    "Night",
    "Little Bird",
    "Little Leopard",
    "Mountain Skyline",
    "Tree in Winter",
]

let photoBoxEL = document.getElementById("photo-box");
let dialog = document.getElementById("dialog");
let currentIndex = 0;

photoBoxEL.innerHTML = "";


for (let i = 0; i < photos.length; i++) {
    photoBoxEL.innerHTML += `<img src="${photos[i]}" onclick="openDialog(${i})">`;
}

function openDialog(i) {
    currentIndex = i;
    document.getElementById("dialog-text").innerHTML = alts[i];
    document.getElementById("dialog-image").src = photos[i];
    document.getElementById("dialog-image").alt = alts[i];
    document.getElementById("image-counter").innerHTML = i + 1 + "/" + photos.length;
    
    dialog.showModal();
}

function previousPhoto() {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = currentIndex + 12
    }
    openDialog(currentIndex);
}

function nextPhoto() {
    currentIndex = currentIndex + 1;
    if (currentIndex > 11) {
        currentIndex = currentIndex - 12;
    }
    openDialog(currentIndex);
}