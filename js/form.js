import {resetScale} from './scale.js';
import {resetEffects} from './effect.js';


const imgUploadInput = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

const closeButton = imgUploadOverlay.querySelector('#upload-cancel');

const hashtag = document.querySelector('.text__hashtags');
const description = document.querySelector('.text__description');


const onPopupEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeOverlay(false);
  }
};

function openOverlay () {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeOverlay (saveData) {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  imgUploadInput.value = '';
  if (!saveData) {
    resetScale();
    resetEffects();
    hashtag.value = '';
    description.value = '';
  }
}

imgUploadInput.addEventListener('change', () => {
  openOverlay();
});

closeButton.addEventListener('click', () => {
  closeOverlay(false);
});

export {closeOverlay};
