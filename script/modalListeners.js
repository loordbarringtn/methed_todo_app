import { modalDiv } from "./modal.js";
import { render } from "./createElements.js";

const submButton = document.getElementById("modalSubmitBtn");
const nameInput = document.getElementById("nameInput");
const closeButton = document.querySelector(".close");

nameInput.addEventListener("input", (e) => {
  let inputVal = e.target.value;
  if (inputVal === "") {
    submButton.disabled = true;
  } else {
    submButton.disabled = false;
  }
});

closeButton.addEventListener("click", () => {
  modalDiv.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modalDiv) {
    modalDiv.style.display = "none";
  }
});

submButton.addEventListener("click", () => {
  const inputValue = nameInput.value;
  console.log(inputValue);
  modalDiv.style.display = "none";
  // render();
});

// render();




