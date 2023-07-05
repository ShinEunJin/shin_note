import Component from "@/components/helpers/Component";
import ContentInput from "./ContentInput";

import ContentList from "./ContentList";

class MainPage extends Component {
  render() {
    new ContentInput(this.$target);
    new ContentList(this.$target);
  }
}

export default MainPage;
