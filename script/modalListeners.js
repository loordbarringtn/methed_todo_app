const submButton = document.getElementById("modalSubmitBtn");
const nameInput = document.getElementById("nameInput");
const closeButton = document.querySelector(".close");
import { modalDiv } from "./modal.js";

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

