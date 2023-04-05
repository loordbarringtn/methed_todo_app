import { modalDiv } from "./modal.js";
import { getStorage, setStorage, removeStorage } from "./localStorage.js";
import { createTableRows } from "./createElements.js";

const submButton = document.getElementById("modalSubmitBtn");
const nameInput = document.getElementById("nameInput");
let inputValue = null;

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
      // const inputValue = nameInput.value;
      inputValue = nameInput.value;
      modalDiv.style.display = "none";




      const dataToRender = getStorage(inputValue);
      console.log(dataToRender)
      dataToRender.forEach((item) => {
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

export { modalControll, inputValue };
