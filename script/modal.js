const modalDiv = document.createElement("div");

modalDiv.setAttribute("class", "modal");
modalDiv.setAttribute("id", "myModal");
// modalDiv.style.display = "none";
// modalDiv.style.position = "fixed";
// modalDiv.style.zIndex = "1";
// modalDiv.style.left = "0";
// modalDiv.style.top = "0";
// modalDiv.style.width = "100%";
// modalDiv.style.height = "100%";
// modalDiv.style.overflow = "auto";
// modalDiv.style.backgroundColor = "rgba(0,0,0,0.4)";

const modalContentDiv = document.createElement("div");
modalContentDiv.setAttribute("class", "modal-content");
// modalContentDiv.style.position = "absolute";
// modalContentDiv.style.top = "50%";
// modalContentDiv.style.left = "50%";
// modalContentDiv.style.transform = "translate(-50%, -50%)";
// modalContentDiv.style.backgroundColor = "#fefefe";  
// modalContentDiv.style.padding = "20px";
// modalContentDiv.style.maxWidth = "500px";
// modalContentDiv.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";

const spanClose = document.createElement("span");
const closeIcon = document.createTextNode("\u00D7");
spanClose.appendChild(closeIcon);
spanClose.setAttribute("class", "close");
// spanClose.style.color = "black";
// spanClose.style.float = "right";
// spanClose.style.fontSize = "28px";
// spanClose.style.fontWeight = "bold";
// spanClose.style.cursor = "pointer";


const h2 = document.createElement("h2");
h2.textContent = "Введите Ваше Имя:";
// h2.style.color = "#777";
// h2.style.fontSize = "1.5rem";
// h2.style.marginBottom = "1rem";

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Имя");
input.setAttribute("id", "nameInput");
// input.style.border = "1px solid #ccc";
// input.style.padding = "0.5rem";

const button = document.createElement("button");
button.setAttribute("type", "submit");
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


const modalClass = document.querySelector(".modal");
modalClass.style.display = "none";
modalClass.style.position = "fixed";
modalClass.style.zIndex = "1";
modalClass.style.left = "0";
modalClass.style.top = "0";
modalClass.style.width = "100%";
modalClass.style.height = "100%";
modalClass.style.overflow = "auto";
modalClass.style.backgroundColor = "rgba(0,0,0,0.4)";

const modalContentClass = document.querySelector(".modal-content");
modalContentClass.style.position = "absolute";
modalContentClass.style.top = "50%";
modalContentClass.style.left = "50%";
modalContentClass.style.transform = "translate(-50%, -50%)";
modalContentClass.style.backgroundColor = "#fefefe";
modalContentClass.style.padding = "20px";
modalContentClass.style.maxWidth = "500px";
modalContentClass.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";

const spanCloseClass = document.querySelector(".close");  
spanCloseClass.style.color = "black";
spanCloseClass.style.float = "right";
spanCloseClass.style.fontSize = "28px";
spanCloseClass.style.fontWeight = "bold";


const nameInput = document.querySelector("#nameInput");
nameInput.style.border = "1px solid #ccc";
nameInput.style.padding = "0.5rem";








// let modalHTML = `
// <div class="modal-dialog modal-sm" style="max-width: 400px;" role="document">
// <div class="modal-content">
//   <div class="modal-header">
//     <h3 class="modal-title" id="exampleModalLabel">Modal title</h3>
//     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//       <span aria-hidden="true">&times;</span>
//     </button>
//   </div>
//   <div class="modal-body">
//     <div class="form-group">
//       <label for="inputField">Input Field:</label>
//       <input type="text" class="form-control" id="inputField">
//     </div>
//   </div>
//   <div class="modal-footer justify-content-center">
//     <button type="button" class="btn btn-primary btn-lg btn-block" data-dismiss="modal">Submit</button>
//   </div>
// </div>
// </div>
// `;

// modalDiv.insertAdjacentHTML("afterbegin", modalHTML);

// document.body.appendChild(modalDiv)

export const showModal = () => {
  // myModal.setAttribute('style', 'display: none;');

  modalDiv.style.display = "block";
  modalContentDiv.style.display = "block";
};