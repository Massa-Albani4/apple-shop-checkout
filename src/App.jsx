import "./sass/style.scss";
import Item from "./Item.jsx";
import Form from "./Form.jsx";
import bgImg from "./assets/background-image-mobile.png";

function App() {
  return (
    <div className="app">
      <img
        className="app__background-image"
        src={bgImg}
        alt="background-image"
      />
      <header className="header">
        <h1 className="header__title">Checkout</h1>
        <div className="header__item-count">
          <p>3 ITEMS</p>
        </div>
      </header>
      <main className="app__main">
        <section className="app__main__checkout">
          <div className="app__main__checkout__items-container">
            <Item />
            <Item />
            <Item />
          </div>
          <div>
            <div>
              <input type="text" placeholder="Enter coupon code" />
              <button className="cartBtn">Apply Coupon</button>
            </div>
            <div>
              <div>
                <p>Sub total</p>
                <p>$2597.00</p>
              </div>
              <div>
                <p>Tax</p>
                <p>$623.28</p>
              </div>
              <div>
                <p>Total</p>
                <p>$3220.28</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Form />
        </section>
      </main>
    </div>
  );
}

export default App;
