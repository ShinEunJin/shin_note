import Component from "@/components/helpers/Component";

import router from "./router";

class App extends Component {
  render() {
    const path = location.pathname;
    router(path, this.$target);
  }
}

export default App;
