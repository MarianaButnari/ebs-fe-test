import { FC } from "react";

import { useCart } from "../context/CartContext";
import Button from "../components/button/Button";

import { Product } from "../types/Product.types";
import classes from "./Cart.module.css";
const Cart: FC = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
  return (
    <div>
      <hr></hr>
      {cart.length === 0 && (
        <h2 className={classes.message}>No items in cart!</h2>
      )}
      {cart.length > 0 && (
        <ul className={classes.cart__items}>
          {cart.map((product: Product) => {
            const formattedPrice = `$${product.price.toFixed(2)}`;

            return (
              <li key={product.id} className={classes.cart__product}>
                <img src={product.image} alt={product.title} className={classes.image} />
                <div>
                  <span>{product.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className={classes.cart__actions}>
                  <Button
                    onClick={() => removeFromCart(product.id)}
                    variant="light"
                  >
                    -
                  </Button>
                  <span>{product.quantity}</span>
                  <Button onClick={() => addToCart(product)} variant="light">
                    +
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <div className={classes.cart__total}>
        <p>
          Cart Total: <strong>{formattedTotalPrice}</strong>
        </p>
        <Button onClick={() => clearCart()}>Clear Cart</Button>
      </div>
    </div>
  );
};

export default Cart;
