const isJson = (str: string) => {
  try {
    JSON.parse(str);
  } catch (error) {
    return false;
  }
  return true;
};

export const getLocalStorage = (key: string) => {
  const result = localStorage.getItem(key);
  if (isJson(result)) return JSON.parse(result);
  else result;
};

export const setLocalStorage = (key: string, item: object | string) => {
  if (typeof item === "object") {
    localStorage.setItem(key, JSON.stringify(item));
  } else {
    localStorage.setItem(key, item);
  }
};
