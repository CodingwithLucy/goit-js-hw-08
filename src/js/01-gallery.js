// Opisany w dokumentacji
import SimpleLightbox from "simplelightbox";
// Dodatkowy import stylów
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");

const fullGallery = galleryItems.map((galleryItem) => 
    `<a class="gallery__item" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${galleryItem.preview}"
        alt="${galleryItem.description}"/>
    </a>`
  ).join("");

gallery.insertAdjacentHTML("afterbegin", fullGallery);

let lightbox = new SimpleLightbox(".gallery a", {captionsData: "alt", captionDelay: 250});
