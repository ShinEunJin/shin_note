import Component from "@/components/helpers/Component";
import * as element from "@/utils/functions/element";

import "./ContentList.style.css";

class ContentList extends Component {
  render() {
    const text = element.createElement("span", null, "dfsfds");
    const item = element.createElement("li", { class: "content__item" }, text);
    const list = element.createElement("ul", { class: "content" }, item);

    this.$target.appendChild(list);
  }
}

export default ContentList;
