import { createTableRows } from "./createElements.js";


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


// const deleteButton = () => {
//   const deleteButton = document.querySelectorAll(".btn-danger");
//   if (deleteButton===null) return; 
//   deleteButton.forEach((button) => {
  
//     button.addEventListener("click", (e) => {
//       e.preventDefault();
//       e.target.closest("tr").remove();
//     });
//   });



// };

const controll = () => {
  const saveButton = document.querySelector(".btn-primary");
  const taskInput = document.querySelector(".form-control");
  const clearButton = document.querySelector(".btn-warning");
  document.querySelector('.app-container').addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('btn-danger')) {
      target.closest('tr').remove();
    }
  });
  taskInput.addEventListener("input", (e) => {
    let taskInput = e.target.value;
    if (taskInput === "") {
      saveButton.disabled = true;
    } else {
      saveButton.disabled = false;
    }
  });

  saveButton.addEventListener("click", (e) => {
    e.preventDefault();
    const taskValue = taskInput.value;
    createTableRows(taskValue);
    taskInput.value = "";
    saveButton.disabled = true;

    // deleteButton();


  });

  clearButton.addEventListener("click", (e) => {
    e.preventDefault();
    taskInput.value = "";
  });

  // const deleteButton = document.querySelector(".btn-danger");
  // debugger




  // deleteButton.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   e.target.closest("tr").remove();

  // });



};


function deleteButton ()  {
  const deleteButton = document.querySelectorAll(".btn-danger");
  if (deleteButton===null) return; 
  deleteButton.forEach((button) => {
  
    button.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.closest("tr").remove();
    });
  });
 }



// export { deleteButton };

export { deleteButton, controll};




// saveButton.addEventListener("click", (event) => {});
