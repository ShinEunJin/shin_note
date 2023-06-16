const BASE_URL = "http://localhost:5500/api";

const api = async ({ url, method, body, headers }) => {
  try {
    const res = await fetch(BASE_URL + url, { method, body, headers });

    if (res.ok) {
      const json = await res.json();
      return json;
    }

    throw Error("HTTP API ERROR");
  } catch (error) {
    return Promise.reject(error);
  }
};

export default api;
