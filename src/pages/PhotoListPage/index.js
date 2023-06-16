import Component from "../../components/Component.js";
import { createElement } from "../../utils/functions/createElement.js";
import photoApi from "../../utils/apis/photo.js";

import PhotoList from "./PhotoList.js";

class PhotoListPage extends Component {
  render() {
    const title = createElement("h1", null, "사진 목록");
    const $page = createElement("div", { class: "PhotoListPage" }, title);

    new PhotoList($page, { photos: this.state.photos });

    this.$target.renderPage($page);
  }

  setup() {
    const getPhotos = async () => {
      const photos = await photoApi.getPhotos();
      this.setState({ photos });
    };

    getPhotos();
  }
}

export default PhotoListPage;
