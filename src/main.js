import { getImagesByQuery } from './js/pixabay-api.js'
import { createGallery } from './js/render-functions.js';
import { clearGallery } from './js/render-functions.js';
import { showLoader } from './js/render-functions.js';
import { hideLoader } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = e.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({ title: 'Error', message: 'Please enter a search term!' });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(images => {
      hideLoader();

      if (images.length === 0) {
        iziToast.error({
          title: 'No results',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 4000
        });
        return;
      }

        createGallery(images);
        e.target.reset();
    })
    .catch(error => {
      hideLoader();
      console.error(error);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again!',
        position: 'topRight',
        timeout: 4000
      });
    });
});