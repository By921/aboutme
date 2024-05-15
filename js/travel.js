// script.js
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById('gallery');
    const images = [
      { src: "travels/maambongspring.jpg", alt: "Travel Image 1" },
      { src: "travels/northzen.jpg", alt: "Travel Image 2" },
      { src: "travels/magellancross.jpg", alt: "Travel Image 3" },
      { src: "travels/amsterdam.jpg", alt: "Travel Image 4" },
      { src: "travels/samgyopsalpanglao.jpg", alt: "Travel Image 5" },
      { src: "travels/simala.jpg", alt: "Travel Image 6" },
      { src: "travels/taoist.jpg", alt: "Travel Image 7" },
      { src: "travels/templeofleah.jpg", alt: "Travel Image 8" },
    ];
  
    images.forEach(image => {
      const imgCard = document.createElement('div');
      imgCard.classList.add('img-card');
      imgCard.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
      gallery.appendChild(imgCard);
    });
  });