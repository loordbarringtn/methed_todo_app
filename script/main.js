import { render } from "./createElements.js";
import { showModal } from "./modal.js";
import { modalControll } from "./modalListeners.js";
import { toDoFormControll, toDoTableControll } from "./tableListeners.js";

const start = () => {
  showModal();
  modalControll();
  render();
  toDoFormControll();
  toDoTableControll();
};

window.start = start;
