import {render} from "./createElements.js";
import {showModal} from "./modal.js";
import * as modalListeners from "./modalListeners.js";
import * as tableListeners from "./tableListeners.js";


const start = () => {
  showModal();
  render();

  tableListeners.controll();
  // tableListeners.deleteButton();



  };
  
  
  window.start = start;
  