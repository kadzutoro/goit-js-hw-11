import{i as l,S as f}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();l.settings({close:!1,closeOnClick:!0,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",backgroundColor:"red",progressBar:!1});const n=document.querySelector(".loader"),g=document.querySelector(".search-input"),c=document.querySelector(".form"),d=document.querySelector("#gallery");let h=new f(".gallery a",{showCounter:!1});const v="https://pixabay.com/api/";c.addEventListener("submit",y);function y(o){d.innerHTML="",n.classList.remove("is-hidden"),o.preventDefault();const s=new URLSearchParams({key:"41936359-935dea1b7e7e76694a23c8d00",q:g.value,image_type:"photo",orientation:"horizontal",safesearch:"safesearch"});fetch(`${v}?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{setTimeout(()=>{if(n.classList.add("is-hidden"),t.hits.length===0)return l.show();p(t.hits)},1e3)}).catch(t=>{console.log(t)}).finally(()=>{c.reset()})}function p(o){d.innerHTML=o.reduce((s,{largeImageURL:t,webformatURL:a,tags:e,likes:i,views:r,comments:u,downloads:m})=>s+`      <li class="gallery-item">
        <a href="${t}">
          <img src="${a}" alt="${e}" />
        </a>
        <div class="image-desc">
          <div class="image-desc-item">
            <div class="image-desc-label">Likes</div>
            <div>${i}</div>
          </div>
          <div class="image-desc-item">
             <div class="image-desc-label">Views</div>
             <div>${r}</div>
          </div>
          <div class="image-desc-item">
            <div class="image-desc-label">Comments</div>
            <div>${u}</div>
          </div>
          <div class="image-desc-item">
            <div class="image-desc-label">Downloads</div>
            <div>${m}</div>
          </div>
        </div>
      </li>`,""),h.refresh()}
//# sourceMappingURL=commonHelpers.js.map
