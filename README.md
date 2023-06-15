# SPA vanilla 구현

## 1. **root 만들기**

### 1-1. index.html script 작성

---

index.html에 root 노드 만들기

```
<script type="module" src="./src/index.js"></script>
```

type module 설정으로 import/export 사용

### 1-2. src App.js index.js 생성

---

index.js App.js 생성

App.js는 나중에 router를 통해 url에 따른 각 페이지 렌더링 해주는 역할

index.js는 App을 root 노드에 연결하는 역할

```
// index.js

new App({ $target: document.querySelector("#root") });
```

## 2. **createElement 유틸함수**

```
export const createElement = (tag, attributes = {}, ...children) => {
  if (!tag || typeof tag !== "string") {
    throw Error("tag is required and type must be string.");
  }

  const element = document.createElement(tag);

  if (typeof attributes !== "object" || Array.isArray(attributes)) {
    throw Error("attributes must be object only.");
  }

  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value);
    }
  }

  if (children && children.length > 0) {
    for (const child of children) {
      if (Array.isArray(child)) {
        throw Error(
          "Don't use array in children parameter. Use spread operator"
        );
      } else {
        element.append(child);
      }
    }
  }

  return element;
};
```

## 3. **router 설정**

### 3-1. router 만들기

---

url이 바뀔때마다 그에 맞는 페이지를 렌더링 해줘야한다.

```
export const router = ($target) => {
  const { pathname } = location;

  $target.innerHTML = "";

  let Page = null;

  if (pathname.startsWith("/") && pathname === "/") Page = PhotoListPage;
  if (pathname.startsWith("/photos/")) Page = PhotoDetailPage;

  new Page({ $target });
};
```

```
$target,innerHTML = "" // 초기화 필수
```

새 인스턴트를 만들때 마다 Component안에 기본으로 render()를 생성자에
넣어놔서 자동으로 렌더링된다.

### 3-2. url 변경 감지 이벤트 추가

---

a href 를 통해 페이지를 이동하면 페이지가 새로고침 되기때문에
React의 `<Link />` 와 같은 기능을 하는 함수를 만들어야한다.

```
export const ROUTE_CHANGE_EVENT = "ROUTE_CHANGE";

export const routeChange = (url, params) => {
  history.pushState(null, null, url);
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
};
```

routeChange 함수를 통해 url을 history에 추가하고
커스텀 이벤트를 활용해 router 함수를 작동시켜준다.

(params는 이벤트 버블링 위한것이기 때문에 필요시 알면된다.)

```
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
```

popstate는 브라우저의 뒤로가기, 앞으로가기 이벤트 감지다.

이렇게 popstate, custom(ROUTE CHANGE EVENT)가 일어날 때 router를 통해
페이지를 다시 렌더링 해주면 된다.

밑은 routeChange의 사용예시다.

```
title.addEventListener("click", () => {
  routeChange(`/photos/${"fsdfsdfsdf"}`);
});
```

정리

```
- routeChange

  history.pushState 로 url 변경
  (= history stack 에 url 추가)

  window.dispatchEvent 로 커스텀 이벤트 발생시키기

  App 에서 커스텀 이벤트 감지 후 router() 로 페이지 렌더링


- 브라우저 뒤로가기, 앞으로가기

  App 에서 popstate 감지 후 router () 로 페이지 렌더링
```
