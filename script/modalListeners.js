import { getStorage } from "./localStorage.js";
import { createTableRows } from "./createElements.js";

const submButton = document.getElementById("modalSubmitBtn");
const nameInput = document.getElementById("nameInput");
const form = document.getElementById("nameForm");
const modal = document.getElementById("myModal");
let nameFromInput = null;

const checkInput = () => (nameInput.value === "" ? true : false);

const readData = () => {
  if (checkInput()) return null;
  modal.style.display = "none";
  nameFromInput = nameInput.value;
  const dataFromLocalStorage = getStorage(nameInput.value);
  dataFromLocalStorage.forEach((item) => {
    createTableRows(item);
  });
};

const modalControll = () => {
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("close") || target === modal) {
        readData();
    }
  });

  nameInput.addEventListener("input", (e) => {
    let inputVal = e.target.value;
    if (inputVal === "") {
      submButton.disabled = true;
    } else {
      submButton.disabled = false;
    };
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    readData();
  });
};

export { modalControll, nameFromInput };
