// import { taskInput, saveButton } from "./createElements.js";

// document.addEventListener("DOMContentLoaded", () => {
//   if (taskInput) {
//     debugger
//     taskInput.addEventListener("input", (e) => {
//       let taskInputValue = e.target.value;
//       if (taskInputValue === "") {
//         saveButton.disabled = true;
//       } else {
//         saveButton.disabled = false;
//       }
//     });
//   }

//   if (saveButton) {saveButton.addEventListener("click", (event) => {});
// }

// });

//q: event listener doesn't work  in tableListeners.js
//q: how to import variables from createElements.js


// document.addEventListener("DOMContentLoaded", () => {
//   const saveButton = document.querySelector(".btn-primary");
//   const taskInput = document.querySelector(".form-control");
//   taskInput.addEventListener("input", (e) => {
//     let taskInput = e.target.value;
//     if (taskInput === "") {
//       saveButton.disabled = true;
//     } else {
//       saveButton.disabled = false;
//     }
//   });
// });

// const saveButton = document.querySelector(".btn-primary");
// const taskInput = document.querySelector(".form-control");

document.addEventListener("DOMContentLoaded", () => {
const saveButton = document.querySelector(".btn-primary");
const taskInput = document.querySelector(".form-control");
  taskInput.addEventListener("input", (e) => {
    e.preventDefault();
    let taskInput = e.target.value;
    if (taskInput === "") {
      saveButton.disabled = true;
    } else {
      saveButton.disabled = false;
    }
  });
});



// saveButton.addEventListener("click", (event) => {});
