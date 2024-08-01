import{a as y,i as p,S as L}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(s){return s.map(({webformatURL:t,largeImageURL:o,tags:a,likes:e,views:r,comments:l,downloads:b})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${a}"
            />
          </a>
          <div class="description-container">
            <div class="description">
              <h2 class="description-title">Likes</h2>
              <p class="description-amount">${e}</p>
            </div>
            <div class="description">
              <h2 class="description-title">Views</h2>
              <p class="description-amount">${r}</p>
            </div>
            <div class="description">
              <h2 class="description-title">Comments</h2>
              <p class="description-amount">${l}</p>
            </div>
            <div class="description">
              <h2 class="description-title">Downloads</h2>
              <p class="description-amount">${b}</p>
            </div>
          </div>
        </li>`).join("")}const P=15;async function h(s,t){y.defaults.baseURL="https://pixabay.com/api/";const o="45109614-503c0802e6fcda244df0afcb5";try{return s.includes(" ")&&s.replace(/\s+/g,"+"),await y.get("",{params:{key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:P}})}catch{p.error({title:"Error",message:"Try again later!"})}}const g=document.querySelector(".search"),u=document.querySelector(".gallery"),c=document.querySelector(".loader"),i=document.querySelector(".load-btn");let n=0;const m=15;let d="";const v=new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});c.style.display="none";i.style.display="none";g.addEventListener("submit",S);i.addEventListener("click",M);function S(s){if(s.preventDefault(),n=1,u.innerHTML="",c.style.display="block",i.style.display="none",d=s.target.elements.search.value.trim(),!d){p.warning({title:"Attention",message:"Fill in the field!"}),c.style.display="none";return}h(d,n).then(({data:t})=>{c.style.display="none";const o=Math.ceil(t.totalHits/m);if(n===o?i.style.display="none":i.style.display="block",!t.hits.length){p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}u.insertAdjacentHTML("beforeend",f(t.hits)),v.refresh(),g.reset()}).catch(t=>{c.style.display="none",console.log(t)})}function M(){n+=1,i.style.display="none",h(d,n).then(({data:s})=>{u.insertAdjacentHTML("beforeend",f(s.hits)),v.refresh();const t=Math.ceil(s.totalHits/m);if(n===t){p.info({title:"Caution",message:"There is no more images to load!"}),i.style.display="none";return}i.style.display="block"}).catch(s=>console.log(s))}
//# sourceMappingURL=commonHelpers.js.map
