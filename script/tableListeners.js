import { createTableRows } from "./createElements.js";
import { setStorage, removeStorage, updateTaskStatus } from "./localStorage.js";
import { nameFromInput } from "./modalListeners.js";
import { generateRandomId } from "./helper.js";

const tableControll = () => {
  const saveButton = document.querySelector(".btn-primary");
  const taskInput = document.querySelector(".form-control");
  const clearButton = document.querySelector(".btn-warning");

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

      const data = {
        id: generateRandomId(),
        task: taskValue,
        taskStatusClassName: "table-light",
        taskCompletedClassName: "task",
        status: 0,
      };

      setStorage(nameFromInput, data);
      createTableRows(data);
      taskInput.value = "";
      saveButton.disabled = true;
    }

    if (target === clearButton) {
      e.preventDefault();
      taskInput.value = "";
    }

    if (target.classList.contains("btn-danger")) {
      const question = confirm("Вы уверены что хотите удалить задачу?");
      if (question === true) {
        const idRowToDelete = target
          .closest("tr")
          .querySelector("td:nth-child(1)").textContent;
        removeStorage(nameFromInput, idRowToDelete);
        target.closest("tr").remove();
      }
    }

    if (target.classList.contains("btn-success")) {
      const closestTr = target.closest("tr");
      const idRowToUpdate = target.closest("tr").querySelector("td:nth-child(1)").textContent;
      closestTr.setAttribute("class", "table-success");
      closestTr
        .querySelector("td:nth-child(2)")
        .setAttribute("class", "text-decoration-line-through");
      closestTr.querySelector("td:nth-child(3)").textContent = "Выполнено";  
      updateTaskStatus(nameFromInput, idRowToUpdate, 1, "table-success", "text-decoration-line-through");  
    }
  });
};

export { tableControll };
