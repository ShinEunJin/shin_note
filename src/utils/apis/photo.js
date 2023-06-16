import api from "./api.js";

const photoApi = {
  async getPhotos() {
    return api({
      method: "get",
      url: "/v1/photos",
    });
  },
};

export default photoApi;
