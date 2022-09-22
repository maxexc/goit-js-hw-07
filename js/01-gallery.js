import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".js-gallery");

galleryRef.innerHTML = "";
galleryRef.insertAdjacentHTML("beforeend", makeImageList(galleryItems));
galleryRef.addEventListener("click", onImageClick);

function makeImageList(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `
      <div class="gallery__item">
        <a href="${original}" class="gallery__link">
        <img
          class="gallery__image"
          src=${preview}        
          data-source= ${original}        
          alt=${description}
        />
        </a> 
      </div>`
    )
    .join("");
}

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="1280" height="auto" alt=${event.target.alt} >
    `);
  instance.show();

  document.addEventListener("keydown", closeImgCard);

  function closeImgCard(event) {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", closeImgCard);
    }
  }

  // document.addEventListener("keydown", (event) => {
  //   if (event.key === "Escape") {
  //     instance.close();
  //   }
  // });
}
