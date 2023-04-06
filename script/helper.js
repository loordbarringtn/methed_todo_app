export const generateRandomId = () =>
  Date.now().toString().slice(6, 11) + Math.floor(Math.random() * 10);
