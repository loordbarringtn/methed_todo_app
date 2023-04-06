import { render } from "./createElements.js";
import { showModal } from "./modal.js";
import { modalControll } from "./modalListeners.js";
import { tableControll } from "./tableListeners.js";

const start = () => {
  showModal();
  modalControll();
  render();
  tableControll();
};

window.start = start;
