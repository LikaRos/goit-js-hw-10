// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

imageRenderList();

function imageRenderList() {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a href="${original}">
		  <img
          class="gallery__image"
          src="${preview}"
          
          alt="${description}"
			 title="${description}"
			 >
			 			 </a>`
    )
    .join(' ');
  gallery.insertAdjacentHTML('beforeend', markup);
}

const ligthbox = new SimpleLightbox('.gallery a', {
  captionData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
