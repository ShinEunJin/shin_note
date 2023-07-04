import Component from "../../../components/helpers/Component";
import * as element from "../../../utils/functions/element";

import "./ContentInput.style.css";

class ContentInput extends Component {
  render() {
    const $input = element.createElement("input", { class: "content__input" });

    this.$target.appendChild($input);
  }
}

export default ContentInput;
