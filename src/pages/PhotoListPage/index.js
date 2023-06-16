import Component from "../../components/Component.js";
import { createElement } from "../../utils/functions/createElement.js";

class PhotoListPage extends Component {
  render() {
    const title = createElement("h1", null, "사진 목록");
    const $page = createElement("div", { class: "PhotoListPage" }, title);

    this.$target.appendChild($page);
  }
}

export default PhotoListPage;
