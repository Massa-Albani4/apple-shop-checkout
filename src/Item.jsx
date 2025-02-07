import deleteIcon from "./assets/delete-icon.svg";
import product from "./assets/apple-watch.png";

function Item() {
  return (
    <div className="app__main__checkout__items-container__item">
      <div className="app__main__checkout__items-container__item__image-container">
        <img src={product} alt="product-image" />
      </div>
      <div className="app__main__checkout__items-container__item__product-info">
        <div>
          <div>
            <p>iPhone 12 Pro</p>
            <p>Golden</p>
          </div>
          <p>$999.00</p>
        </div>
        <div className="flex">
          <p>X 1</p>
          <button>
            <img src={deleteIcon} alt="delete button" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
