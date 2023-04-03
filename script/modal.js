import {render} from "./createElements.js";

const modalDiv = document.createElement("div");
modalDiv.setAttribute("class", "modal");
modalDiv.setAttribute("id", "myModal");
modalDiv.style.display = "none";
modalDiv.style.position = "fixed";
modalDiv.style.zIndex = "1";
modalDiv.style.left = "0";
modalDiv.style.top = "0";
modalDiv.style.width = "100%";
modalDiv.style.height = "100%";
modalDiv.style.overflow = "auto";
modalDiv.style.backgroundColor = "rgba(0,0,0,0.4)";

const modalContentDiv = document.createElement("div");
modalContentDiv.setAttribute("class", "modal-content");
modalContentDiv.style.position = "absolute";
modalContentDiv.style.top = "50%";
modalContentDiv.style.left = "50%";
modalContentDiv.style.transform = "translate(-50%, -50%)";
modalContentDiv.style.backgroundColor = "#fefefe";  
modalContentDiv.style.padding = "20px";
modalContentDiv.style.maxWidth = "500px";
modalContentDiv.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";

const spanClose = document.createElement("span");
const closeIcon = document.createTextNode("\u00D7");
spanClose.append(closeIcon);
spanClose.setAttribute("class", "close");
spanClose.style.color = "black";
spanClose.style.float = "right";
spanClose.style.fontSize = "28px";
spanClose.style.fontWeight = "bold";
spanClose.style.cursor = "pointer";

const h2 = document.createElement("h2");
h2.textContent = "Введите Ваше Имя:";
h2.style.color = "#000";
h2.style.fontSize = "1.5rem";
h2.style.marginBottom = "1rem";
h2.style.fontWeight = "bold";

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Имя");
input.setAttribute("id", "nameInput");
input.style.border = "1px solid #ccc";
input.style.padding = "0.5rem";

const button = document.createElement("button");
button.setAttribute("type", "submit");
button.setAttribute("id", "modalSubmitBtn");
button.textContent = "Отправить";
button.style.backgroundColor = "#007bff";
button.style.border = "none";
button.style.color = "#fff";
button.style.padding = "0.5rem 1rem";
button.style.marginLeft = "0.5rem";
button.disabled = true;

modalDiv.append(modalContentDiv);
modalContentDiv.append(spanClose, h2, input, button);

document.body.append(modalDiv);

export const showModal = () => {
  modalDiv.style.display = "block";
  modalContentDiv.style.display = "block";
};

export {modalDiv};