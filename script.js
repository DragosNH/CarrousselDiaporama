function caroussel() {
    const img = document.querySelectorAll(".image")
    const rightBtn = document.querySelector(".right-btn");
    const leftBtn = document.querySelector(".left-btn");
    let currentIndex = 0;

    rightBtn.addEventListener("click", function () {
        img[currentIndex].classList.add("hidden");
        currentIndex = (currentIndex + 1) % img.length;
        img[currentIndex].classList.remove("hidden");
        console.log("click")
    });

    leftBtn.addEventListener("click", function () {
        img[currentIndex].classList.add("hidden");
        currentIndex = (currentIndex - 1 + img.length) % img.length;
        img[currentIndex].classList.remove("hidden");
        console.log("click")
    });
}


class PageLoader {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    async load(url, callback = null) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Error loading ${url}`);
            const html = await response.text();
            this.container.innerHTML = html;

            if (callback) callback(); 
        } catch (error) {
            this.container.innerHTML = `<p style="color:red;">${error.message}</p>`;
        }
    }
}

const pageLoader = new PageLoader('content');
window.pageLoader = pageLoader;
window.caroussel = caroussel;