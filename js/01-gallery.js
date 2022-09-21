import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".js-gallery");

const galleryBox = ({ preview, original, description }) => `
<a href="${original}">
  <img
    src="${preview}"
    alt="${description}"
  />
</a>`;

const makeImageCard = () => {
  const imageList = galleryItems.map((img) => galleryBox(img)).join("");

  galleryList.innerHTML = "";
  galleryList.insertAdjacentHTML("beforeend", imageList);
};

console.log(makeImageCard());
