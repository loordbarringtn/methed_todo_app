const getStorage = (key) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const setStorage = (key, object) => {
  const data = getStorage(key);
  data.push(object);
  localStorage.setItem(key, JSON.stringify(data));
};

const removeStorage = (key, idToDelete) => {
  const data = getStorage(key);
  const dataFiltered = data.filter((item) => item.id != idToDelete);
  localStorage.setItem(key, JSON.stringify(dataFiltered));
};

const updateTaskStatus = (key, taskId, newStatus, taskStatusClassName, taskCompletedClassName) => {
  const storageData = getStorage(key);
  const arrayIndex = storageData.findIndex(task => task.id === taskId);
  if (arrayIndex !== -1) {
    storageData[arrayIndex].status = newStatus;
    storageData[arrayIndex].taskStatusClassName = taskStatusClassName;
    storageData[arrayIndex].taskCompletedClassName = taskCompletedClassName;

    localStorage.setItem(key, JSON.stringify(storageData));
  }
}

export { getStorage, setStorage, removeStorage, updateTaskStatus };
