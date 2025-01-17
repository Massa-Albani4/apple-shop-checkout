import deleteIcon from "./assets/delete-icon.svg";

function Item() {
  return (
    <div>
      <img src="" alt="" />
      <div>
        <div>
          <p>iPhone 12 Pro</p>
          <p>Golden</p>
        </div>
        <p>$999.00</p>
      </div>
      <div>
        <p>X 1</p>
        <button>
          <img src={deleteIcon} alt="delete button" />
        </button>
      </div>
    </div>
  );
}

export default Item;
