import MainPage from "../pages/MainPage/MainPage";

const router = (url, $target) => {
  switch (url) {
    case "/":
      return new MainPage($target);
    default:
      return;
  }
};

export default router;
