const imagesList = [
    "assets/img/slides/slide-1.jpg",
    "assets/img/slides/slide-2.jpg",
    "assets/img/slides/slide-3.jpg",
    "assets/img/slides/slide-4.jpg"
];

let slideCurrentIndex = 0;
const heroSection = document.querySelector(".hero");
const slideNextBtn = document.getElementById("next");
const slidePrevBtn = document.getElementById("prev");

function changeBackground(index) {
    heroSection.style.backgroundImage = `url(${imagesList[index]})`;
    heroSection.style.backgroundSize = "cover"; // ეს დაამატე, რომ სურათები სწორად გამოჩნდეს
    heroSection.style.backgroundPosition = "center";
}

// Change on button click
slideNextBtn.addEventListener("click", () => {
    slideCurrentIndex = (slideCurrentIndex + 1) % imagesList.length;
    changeBackground(slideCurrentIndex);
});

slidePrevBtn.addEventListener("click", () => {
    slideCurrentIndex = (slideCurrentIndex - 1 + imagesList.length) % imagesList.length;
    changeBackground(slideCurrentIndex);
});

// Auto change every 5 seconds
setInterval(() => {
    slideCurrentIndex = (slideCurrentIndex + 1) % imagesList.length;
    changeBackground(slideCurrentIndex);
}, 8000);

// Set initial background
changeBackground(slideCurrentIndex);
