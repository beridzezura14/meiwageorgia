const toggleBtn = document.getElementById("toggleBtn");
const hiddenImages = document.querySelectorAll(".gallery-row img.hidden");
const popup = document.getElementById("image-popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const images = document.querySelectorAll(".gallery-row img");

let currentIndex = 0;

// Check if button and hidden images are selected correctly
console.log(toggleBtn);
console.log(hiddenImages);

// Toggle See All / Show Less functionality
toggleBtn.addEventListener("click", function() {
    console.log("See All button clicked");

    if (toggleBtn.textContent === "See All") {
        hiddenImages.forEach(img => {
            img.classList.remove("hidden");
        });
        toggleBtn.textContent = "Show Less";
    } else {
        hiddenImages.forEach(img => {
            img.classList.add("hidden");
        });
        toggleBtn.textContent = "See All";
    }
});

// Open the image in popup
images.forEach((image, index) => {
    image.addEventListener("click", () => {
        console.log(`Image clicked: ${image.src}`);
        currentIndex = index;
        popupImg.src = image.src;
        popup.style.display = "flex";
    });
});

// Close the popup
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Navigate to the previous image
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    popupImg.src = images[currentIndex].src;
});

// Navigate to the next image
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    popupImg.src = images[currentIndex].src;
});

// Close popup with Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        popup.style.display = "none";
    } else if (e.key === "ArrowRight") {
        nextBtn.click();
    } else if (e.key === "ArrowLeft") {
        prevBtn.click();
    }
});
