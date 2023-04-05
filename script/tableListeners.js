import { createTableRows } from "./createElements.js";
import { setStorage } from "./localStorage.js";
import { inputValue } from "./modalListeners.js";
const status = [
  'В процессе',
  'Выполнено',
]
const tableControll = () => {
  const saveButton = document.querySelector(".btn-primary");
  const taskInput = document.querySelector(".form-control");
  const clearButton = document.querySelector(".btn-warning");
  const deleteButton = document.querySelectorAll(".btn-danger");

  document.querySelector(".app-container").addEventListener("click", (e) => {
    const target = e.target;

    taskInput.addEventListener("input", (e) => {
      let taskInput = e.target.value;
      if (taskInput === "") {
        saveButton.disabled = true;
      } else {
        saveButton.disabled = false;
      }
    });

    if (target === saveButton) {
      e.preventDefault();
      const taskValue = taskInput.value;
      // createTableRows(taskValue);
      const data = {
        id: Date.now(),
        task: taskValue,
        status: 0,
      }

      console.log(status[data.status]);
      setStorage(inputValue, data);
      createTableRows(data)
      taskInput.value = "";
      saveButton.disabled = true;
    }

    if (target === clearButton) {
      e.preventDefault();
      taskInput.value = "";
    }

    if (target === deleteButton) {
      if (deleteButton === null) return;
      deleteButton.forEach((button) => {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          e.target.closest("tr").remove();
        });
      });
    }

    if (target.classList.contains("btn-danger")) {
      target.closest("tr").remove();
    }
  });
};

export { tableControll };
