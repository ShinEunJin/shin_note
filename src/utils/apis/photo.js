import api from "./api.js";

const photoApi = {
  async getPhotos() {
    return api({
      method: "get",
      url: "/v1/photos",
    });
  },
  async getPhoto({ id }) {
    return api({
      method: "get",
      url: `/v1/photo/?id=${id}`,
    });
  },
};

export default photoApi;
