import { FC } from "react";
import { Product } from "../../types/Product.type";
import classes from "./Card.module.css";

const Card: FC<Partial<Product>> = ({ title, price, image, onAddToCart }) => {
  return (
    <div className={classes.card}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>$:{price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Card;
