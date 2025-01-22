import "./sass/style.scss";
import Item from "./Item.jsx";
import Form from "./Form.jsx";

function App() {
  return (
    <div>
      <header>
        <h1>Checkout</h1>
        <div>
          <p>3 ITEMS</p>
        </div>
      </header>
      <main>
        <section>
          <Item />
          <Item />
          <Item />
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
