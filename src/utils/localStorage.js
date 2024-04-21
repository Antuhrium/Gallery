export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);

  if (data !== null) {
    return JSON.parse(data);
  }
  return {};
};

export const setLocalStorage = (key, data) => {
  console.log(JSON.stringify(data));
  localStorage.setItem(key, JSON.stringify(data));
};
