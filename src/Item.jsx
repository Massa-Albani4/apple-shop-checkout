import deleteIcon from "./assets/delete-icon.svg";
import product from "./assets/apple-watch.png";

function Item() {
  return (
    <div className="app__main__checkout__items-container__item">
      <div className="app__main__checkout__items-container__item__image-container">
        <img src={product} alt="product-image" />
      </div>
      <div className="app__main__checkout__items-container__item__product-info">
        <div className="app__main__checkout__items-container__item__product-info__product-name-quantity">
          <p>iPhone 12 Pro</p>
          <p>Golden</p>
          <p>X 1</p>
        </div>
        <div className="app__main__checkout__items-container__item__product-info__price-delete-container">
          <p className="app__main__checkout__items-container__item__product-info__price">
            $999.00
          </p>
          <button className="app__main__checkout__items-container__item__delete-btn">
            <img src={deleteIcon} alt="delete button" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
