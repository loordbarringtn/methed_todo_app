import { modalDiv } from "./modal.js";

const submButton = document.getElementById("modalSubmitBtn");
const nameInput = document.getElementById("nameInput");

nameInput.addEventListener("input", (e) => {
  let inputVal = e.target.value;
  if (inputVal === "") {
    submButton.disabled = true;
  } else {
    submButton.disabled = false;
  }
});

document.addEventListener("click", (e) => {
  const target = e.target;

  if (target === submButton) {
    const inputValue = nameInput.value;
    modalDiv.style.display = "none";
  }

  if (target.classList.contains("close")) {
    if (nameInput.value !== "") {
      modalDiv.style.display = "none";
    }
  }

  if (target === modalDiv) {
    if (nameInput.value !== "") {
      modalDiv.style.display = "none";
    }
  }
});
