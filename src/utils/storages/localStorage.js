const isJson = (str) => {
  try {
    JSON.parse(str);
  } catch (error) {
    return false;
  }
  return true;
};

export const getLocalStorage = (key) => {
  const result = localStorage.getItem(key);
  if (isJson(result)) return JSON.parse(result);
  else result;
};

export const setLocalStorage = (key, item) => {
  if (typeof item === "object") {
    localStorage.setItem(key, JSON.stringify(item));
  } else {
    localStorage.setItem(key, item);
  }
};
