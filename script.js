import * as THREE from '/three.module.js';
import { OrbitControls } from '/OrbitControls.js';


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

function threeObject() {
    const container = document.getElementById('threejs-background');


    // Scene
    const scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 10);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Objects
    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const controls = new OrbitControls(camera, renderer.domElement);

    // Responsive design
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
    });

    function animate() {
        controls.update()
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
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

document.querySelector(".btn-images").addEventListener("click", () => {
  pageLoader.load("diaporama.html", caroussel);
});

document.querySelector(".btn-3d").addEventListener("click", () => {
  pageLoader.load("threed.html", threeObject);
});

// Load carousel on page start
pageLoader.load("diaporama.html", caroussel);