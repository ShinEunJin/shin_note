import Component from "../../components/Component.js";
import { createElement } from "../../utils/functions/createElement.js";

class PhotoDetailPage extends Component {
  render() {
    const title = createElement("h1", null, "사진 정보");
    const $page = createElement("div", { class: "PhotoDetailPage" }, title);

    this.$target.appendChild($page);
  }
}

export default PhotoDetailPage;
