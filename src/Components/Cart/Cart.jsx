import Modal from "./Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Ola", price: 12.99, amount: 2 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  // const [error, setError] = useState();

  // const errorHandler = () => {
  //   setError(null);
  // };

  return (
    <Modal onClear={props.onClear}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.21</span>
      </div>
      <div className={classes["actions"]}>
        <button className={classes["button--alt"]} onClick={props.onClear}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
