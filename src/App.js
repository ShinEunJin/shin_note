import { router, ROUTE_CHANGE_EVENT } from "./router/router.js";

class App {
  constructor({ $target }) {
    window.addEventListener("popstate", () => {
      router($target);
    });

    window.addEventListener(ROUTE_CHANGE_EVENT, () => {
      router($target);
    });

    router($target);
  }
}

export default App;
