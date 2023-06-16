import Component from "../../components/Component.js";
import { createElement } from "../../utils/functions/createElement.js";

class PhotoDetail extends Component {
  render() {
    const $photoDetail = createElement("div", { class: "PhotoDetail" });

    const { photo } = this.props;

    if (!photo) return;

    $photoDetail.innerHTML = `
      <img src=${photo.imgUrl} />
      <div class="PhotoDetail__info">
        <h2>${photo.title}</h2>
        <div class="PhotoDetail__price">${photo.location}</div>
        <select>
          <option>선택하세요.</option>
          <option>100개 번들</option>
          <option>1000개 번들(+5,000)</option>
        </select>
        <div class="PhotoDetail__selectedOptions">
          <h3>선택된 상품</h3>
          <ul>
            <li>
              커피잔 100개 번들 10,000원
              <div>
                <input type="number" value="10" />개
              </div>
            </li>
            <li>
              커피잔 1000개 번들 15,000원
              <div>
                <input type="number" value="5" />개
              </div>
            </li>
          </ul>
          <div class="PhotoDetail__totalPrice">175,000원</div>
          <button class="OrderButton">주문하기</button>
        </div>
      </div>
    `;

    this.$target.appendChild($photoDetail);
  }
}

export default PhotoDetail;
