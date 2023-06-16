import Component from "../../components/Component.js";
import { createElement } from "../../utils/functions/createElement.js";
import { routeChange } from "../../router/router.js";

class PhotoList extends Component {
  render() {
    const $photoList = createElement("ul");

    const { photos } = this.props;

    if (photos && photos.length > 0) {
      $photoList.innerHTML = `
        ${photos
          .map(
            (photo) =>
              `
            <li class="Photo" data-photo-id=${photo._id}>
              <img src="${photo.imgUrl}" />
              <div class="Photo__info">
                <div>${photo.title}</div>
                <div>${photo.location}</div>
              </div>
            </li>
          `
          )
          .join("")}`;
    }

    $photoList.addEventListener("click", (e) => {
      const $li = e.target.closest("li");
      const { photoId } = $li.dataset;

      if (photoId) {
        routeChange(`/photos/${photoId}`);
      }
    });

    this.$target.appendChild($photoList);
  }
}

export default PhotoList;
