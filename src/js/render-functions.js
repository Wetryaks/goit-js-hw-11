import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.getElementById('loader');

// Создаем экземпляр SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      image => `
    <li class="gallery-item">
      <a href="${image.largeImageURL}">
        <img
          src="${image.webformatURL}"
          alt="${image.tags}"
          loading="lazy"
        />
      </a>
      <div class="info">
        <p><b>Likes</b><br>${image.likes}</p>
        <p><b>Views</b><br>${image.views}</p>
        <p><b>Comments</b><br>${image.comments}</p>
        <p><b>Downloads</b><br>${image.downloads}</p>
      </div>
    </li>
  `
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}
