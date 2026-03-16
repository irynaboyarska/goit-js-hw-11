import{a as u,S as p,i}from"./assets/vendor-D8kWkXeg.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function d(n){return u.get("https://pixabay.com/api/",{params:{key:"55050395-20e5244c38068275f8aacdcf3",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data.hits)}const f=new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),s={container:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function m(n){const o=n.map(e=>`
    <li>
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes</b><span>${e.likes}</span></p>
        <p><b>Views</b><span>${e.views}</span></p>
        <p><b>Comments</b><span>${e.comments}</span></p>
        <p><b>Downloads</b><span>${e.downloads}</span></p>
      </div>
    </li>
  `).join("");s.container.innerHTML=o,f.refresh()}function h(){s.container.innerHTML=""}function y(){s.loader.classList.remove("hidden")}function l(){s.loader.classList.add("hidden")}const g=document.querySelector(".form");g.addEventListener("submit",n=>{n.preventDefault();const o=n.target.elements["search-text"].value.trim();if(!o){i.error({title:"Error",message:"Please enter a search term!"});return}h(),y(),d(o).then(e=>{if(l(),e.length===0){i.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3});return}m(e),n.target.reset()}).catch(e=>{l(),console.error(e),i.error({title:"Error",message:"Something went wrong. Please try again!",position:"topRight",timeout:4e3})})});
//# sourceMappingURL=index.js.map
