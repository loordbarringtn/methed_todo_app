
const firstDiv = document.querySelector(".app-container");
const taskStatus = [
  'В процессе',
  'Выполнена',
];

const status = ["В процессе", "Выполнено"];

function addClasses(element, classes) {
  if (!Array.isArray(classes)) {
    classes = [classes];
  }
  classes.forEach((cls) => {
    element.classList.add(cls);
  });
}

const createLabel = () => {
  const label = document.createElement("label");
  addClasses(label, ["form-group", "me-3", "mb-0"]);
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "ввести задачу";
  addClasses(input, "form-control");
  label.append(input);
  return label;
};

const createButton = (buttonType, className, text) => {
  const button = document.createElement("button");
  button.type = buttonType;
  button.textContent = text;
  addClasses(button, className);
  return button;
};

const createForm = () => {
  const form = document.createElement("form");
  addClasses(form, ["d-flex", "align-items-center", "mb-3"]);
  form.append(createLabel());
  form.append(createButton("submit", ["btn", "btn-primary", "me-3"], "Сохранить"));
  form.append(createButton("reset", ["btn", "btn-warning"], "Очистить"));
  return form;
};

const createHeader = (text) => {
  const header = document.createElement("h3");
  header.textContent = text;
  return header;
};

addClasses(firstDiv, [
  "app-container",
  "vh-100",
  "w-100",
  "d-flex",
  "align-items-center",
  "justify-content-center",
  "flex-column",
]);

const createTableWrapper = () => {
  const div = document.createElement("div");
  addClasses(div, "table-wrapper");
  return div;
};

const createTable = () => {
  const table = document.createElement("table");
  addClasses(table, ["table", "table-hover", "table-bordered"]);
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const tr = document.createElement("tr");
  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  const th3 = document.createElement("th");
  const th4 = document.createElement("th");
  th1.textContent = "№";
  th2.textContent = "Задача";
  th3.textContent = "Статус";
  th4.textContent = "Действия";
  thead.append(tr);
  tr.append(th1, th2, th3, th4);
  table.append(thead, tbody);
  return table;
};

const createTableRows = (object) => {
  const tbodySelector = document.querySelector("tbody");

  const tableRow = document.createElement("tr");
  addClasses(tableRow, ["table-light"]);
  const td1 = document.createElement("td");
  td1.textContent = object.id; 
  const td2 = document.createElement("td");
  addClasses(td2, "task");
  td2.textContent = object.task;
  const td3 = document.createElement("td");
  td3.textContent = taskStatus[object.status];
  const td4 = document.createElement("td");
  const deleteButton = createButton("button", ["btn", "btn-danger"], " Удалить ");
  const finishButton = createButton("button", ["btn", "btn-success"], " Завершить ");
  td4.append(deleteButton, finishButton);
  tableRow.append(td1, td2, td3, td4);

  tbodySelector.append(tableRow);
  
  return tableRow;
};





const render = () => {
  firstDiv.append(createHeader("Todo App"));
  firstDiv.append(createForm());
  document.querySelector(".btn-primary").disabled = true;
  const tableWrapper = createTableWrapper();
  firstDiv.append(tableWrapper);
  tableWrapper.append(createTable());
  
  // tbodySelector.append(createTableRows());

};



const saveButton = document.querySelector(".btn-primary");
const taskInput = document.querySelector(".form-control");

export {render, saveButton, taskInput, createTableRows};

// export {render};




