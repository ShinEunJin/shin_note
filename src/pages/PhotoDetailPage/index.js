import Component from "../../components/Component.js";
import { createElement } from "../../utils/functions/createElement.js";
import productApi from "../../utils/apis/photo.js";
import PhotoDetail from "./PhotoDetail.js";

class PhotoDetailPage extends Component {
  setup() {
    const getPhoto = async () => {
      const photoId = location.pathname.split("/")[2];
      const photo = await productApi.getPhoto({ id: photoId });
      this.setState({ photo });
    };
    getPhoto();
  }

  render() {
    const title = createElement("h1", null, "사진 정보");
    const $page = createElement("div", { class: "PhotoDetailPage" }, title);

    new PhotoDetail($page, { photo: this.state.photo });

    this.$target.renderPage($page);
  }
}

export default PhotoDetailPage;
