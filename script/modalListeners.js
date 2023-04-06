import { modalDiv } from "./modal.js";
import { getStorage } from "./localStorage.js";
import { createTableRows } from "./createElements.js";

const submButton = document.getElementById("modalSubmitBtn");
const nameInput = document.getElementById("nameInput");
let nameFromInput = null;

const modalControll = () => {
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
      nameFromInput = nameInput.value;
      modalDiv.style.display = "none";
      const dataFromLocalStorage = getStorage(nameFromInput);
      dataFromLocalStorage.forEach((item) => {
        createTableRows(item);
      });
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
};

export { modalControll, nameFromInput };
