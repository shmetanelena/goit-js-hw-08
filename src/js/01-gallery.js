// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line//
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
galleryEl.innerHTML = galleryItems
  .map(
    item =>
      `<div class="gallery__item">
        <a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
    </div>`,
  )
  .join('');

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
