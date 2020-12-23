import galleryItems from "./gallery-items.js";
import galleries from "./gallery-items.js";


const ulGalleryRef = document.querySelector(".js-gallery");

galleries.forEach(image => {
    const listRef = document.createElement('li');
    listRef.classList.add('gallery__item');

    const aRef = document.createElement('a');
    aRef.classList.add('gallery__link');
    aRef.href = image.original;
    const imageRef = document.createElement('img');
    imageRef.classList.add('gallery__image');
    imageRef.src = image.preview;
    imageRef.alt = image.description;
    imageRef.setAttribute('data-source', image.original);

    aRef.appendChild(imageRef);
    listRef.appendChild(aRef);
    ulGalleryRef.appendChild(listRef);
})



const backdrop = document.querySelector('.js-lightbox');

const btnclose = document.querySelector('button[data-action="close-lightbox"]');
const imageFull = document.querySelector('.lightbox__image');


ulGalleryRef.addEventListener('click', watcher);
btnclose.addEventListener('click', closing)
backdrop.addEventListener('click', clickBackdrop)


function watcher(event) {
    if (event.target.nodeName !== 'UL') {
        event.preventDefault();
        backdrop.classList.add('is-open');
        window.addEventListener('keydown', escPress);
       // console.log(imageFull)
        imageFull.src = event.target.getAttribute('data-source');
        imageFull.alt = event.target.alt;
    }
}

function closing() {
    backdrop.classList.remove('is-open');
    imageFull.src = '';
    imageFull.alt = '';
    window.removeEventListener('keydown', escPress);

}

function clickBackdrop(event) {

    if (event.target.nodeName !== 'IMG') {
        closing();
    }
}

function escPress(event) {
    if (event.code === 'Escape') {
        closing();
    }
    
}