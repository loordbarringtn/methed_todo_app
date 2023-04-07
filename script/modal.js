const createModalDiv = () => {
  const modalDiv = document.createElement("div");

  modalDiv.setAttribute("class", "modal");
  modalDiv.setAttribute("id", "myModal");
  modalDiv.style.display = "none";
  modalDiv.style.position = "fixed";
  modalDiv.style.zIndex = "1";
  modalDiv.style.left = "0";
  modalDiv.style.top = "0";
  modalDiv.style.width = "100%";
  modalDiv.style.height = "100%";
  modalDiv.style.overflow = "auto";
  modalDiv.style.backgroundColor = "rgba(0,0,0,0.4)";
  return modalDiv;
};

const createModalContentDiv = () => {
  const modalContentDiv = document.createElement("div");

  modalContentDiv.setAttribute("class", "modal-content");
  modalContentDiv.style.position = "absolute";
  modalContentDiv.style.top = "50%";
  modalContentDiv.style.left = "50%";
  modalContentDiv.style.transform = "translate(-50%, -50%)";
  modalContentDiv.style.backgroundColor = "#fefefe";
  modalContentDiv.style.padding = "20px";
  modalContentDiv.style.maxWidth = "500px";
  modalContentDiv.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
  return modalContentDiv;
};

const createSpan = () => {
  const spanClose = document.createElement("span");
  const closeIcon = document.createTextNode("\u00D7");
  spanClose.append(closeIcon);
  spanClose.setAttribute("class", "close");
  spanClose.style.color = "black";
  spanClose.style.float = "right";
  spanClose.style.fontSize = "28px";
  spanClose.style.fontWeight = "bold";
  spanClose.style.cursor = "pointer";
  return spanClose;
};

const createH2 = () => {
  const h2 = document.createElement("h2");
  h2.textContent = "Введите Ваше Имя:";
  h2.style.color = "#000";
  h2.style.fontSize = "1.5rem";
  h2.style.marginBottom = "1rem";
  h2.style.fontWeight = "bold";
  return h2;
};

const createForm = () => {
  const form = document.createElement("form");
  form.setAttribute("id", "nameForm");
  return form;
};

const createInput = () => {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Имя");
  input.setAttribute("id", "nameInput");
  input.style.border = "1px solid #ccc";
  input.style.padding = "0.5rem";
  input.style.marginRight = "0.5rem";
  return input;
};

const createButton = () => {
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("id", "modalSubmitBtn");
  button.textContent = "Отправить";
  button.style.backgroundColor = "#007bff";
  button.style.border = "none";
  button.style.color = "#fff";
  button.style.padding = "0.5rem 1rem";
  button.disabled = true;
  return button;
};

const modalDiv = createModalDiv();
const modalContentDiv = createModalContentDiv();
const spanClose = createSpan();
const h2 = createH2();
const form = createForm();
const input = createInput();
const button = createButton();

modalDiv.append(modalContentDiv);
modalContentDiv.append(spanClose, h2, form);
form.append(input, button);

document.body.append(modalDiv);

createModalDiv().append(createModalContentDiv());
createModalContentDiv().append(createSpan(), createH2(), createForm());

export const showModal = () => {
  modalDiv.style.display = "block";
  modalContentDiv.style.display = "block";
};