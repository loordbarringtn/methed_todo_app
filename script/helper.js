export const generateRandomId = () =>
  Date.now().toString().slice(0, 5) + Math.floor(Math.random() * 10);
