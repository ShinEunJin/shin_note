import PhotoDetailPage from "../pages/PhotoDetailPage/index.js";
import PhotoListPage from "../pages/PhotoListPage/index.js";

export const ROUTE_CHANGE_EVENT = "ROUTE_CHANGE";

export const routeChange = (url, params) => {
  history.pushState(null, null, url);
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
};

export const router = ($target) => {
  const { pathname } = location;

  $target.innerHTML = "";

  // 에러 페이지 필요
  let Page = null;

  if (pathname.startsWith("/") && pathname === "/") Page = PhotoListPage;
  if (pathname.startsWith("/photos/")) Page = PhotoDetailPage;

  new Page({ $target });
};

export default router;
