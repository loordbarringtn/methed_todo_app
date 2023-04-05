import {render} from "./createElements.js";
import {showModal} from "./modal.js";
import {modalControll} from "./modalListeners.js";
import * as tableListeners from "./tableListeners.js";


const start = () => {
  showModal();
  modalControll();
  render();

  tableListeners.tableControll();
  // tableListeners.deleteButton();



  };
  
  
  window.start = start;
  