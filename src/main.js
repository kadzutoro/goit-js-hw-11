import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

iziToast.settings({
    close: false,
    closeOnClick: true,
    message:'Sorry, there are no images matching your search query. Please try again!',
    messageColor: 'white',
    timeout: 3000,
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    position: 'topRight',
    backgroundColor: 'red',
    progressBar: false,
  });


const loader = document.querySelector('.loader')
const input = document.querySelector(".search-input")
const form = document.querySelector(".form")
const gallery = document.querySelector('#gallery')
let lightbox = new SimpleLightbox('.gallery a', { showCounter: false });
const URL = "https://pixabay.com/api/"

form.addEventListener('submit',fetchImages)



function fetchImages(event) {
    gallery.innerHTML = "";
    loader.classList.remove('is-hidden');
    event.preventDefault();
    const searchParams = new URLSearchParams({
        key: "41936359-935dea1b7e7e76694a23c8d00",
        q: input.value,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'safesearch'
    });
    
    fetch (`${URL}?${searchParams}`)
    .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
    .then (data => {setTimeout(() => {
        loader.classList.add('is-hidden')
        if (data.hits.length === 0) {
        return iziToast.show();} 
      renderImages(data.hits);},1000 )})
    .catch(error => {
            console.log(error);
      })
      .finally(() => {
        form.reset();
      });
}

function renderImages(images) {
    gallery.innerHTML= images.reduce (
        (
           html, {largeImageURL,webformatURL,tags,likes,views,comments,downloads}  
        ) => html + `      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="image-desc">
          <div class="image-desc-item">
            <div class="image-desc-label">Likes</div>
            <div>${likes}</div>
          </div>
          <div class="image-desc-item">
             <div class="image-desc-label">Views</div>
             <div>${views}</div>
          </div>
          <div class="image-desc-item">
            <div class="image-desc-label">Comments</div>
            <div>${comments}</div>
          </div>
          <div class="image-desc-item">
            <div class="image-desc-label">Downloads</div>
            <div>${downloads}</div>
          </div>
        </div>
      </li>`, ""
    ); lightbox.refresh();
}





  
  
  



