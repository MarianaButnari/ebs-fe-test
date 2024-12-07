import React from "react";
import { useCart } from "../context/CartContext";
import { Product } from "../types/Product.type";
import Button from "../components/button/Button";
const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price,
    // (acc, item) => acc + item.price * item.quantity,
    0
  );

  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
  return (
    <div>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((product: Product) => (
            <li key={product.id}>
              {product.title} - ${product.price}
              <Button onClick={() => removeFromCart(product.id)}>Remove</Button>
            </li>
          ))}
        </ul>
      )}

      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
};

export default Cart;
