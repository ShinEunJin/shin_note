import MainPage from "@/pages/MainPage/MainPage";

const router = (url: string, $target: Element) => {
  switch (url) {
    case "/":
      return new MainPage($target);
    default:
      return;
  }
};

export default router;
