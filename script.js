const img = document.querySelectorAll(".image")
const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");
let currentIndex = 0;

rightBtn.addEventListener("click", function(){
    img[currentIndex].classList.add("hidden");
    currentIndex = (currentIndex + 1) % img.length;
    img[currentIndex].classList.remove("hidden");
    console.log("click")
});

leftBtn.addEventListener("click", function(){
    img[currentIndex].classList.add("hidden");
    currentIndex = (currentIndex - 1 + img.length) % img.length;
    img[currentIndex].classList.remove("hidden");
    console.log("click")
});