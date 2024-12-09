import { FC } from "react";

import Button from "../button/Button";

import { CardProps } from "./Card.type";
import classes from "./Card.module.css";

const Card: FC<CardProps> = ({ product, actionName, onClick }) => {
  const { image, title, price } = product;
  return (
    <div className={classes.card}>
      <img src={image} alt={title} className={classes.image} />
      <h3>{title}</h3>
      <div className={classes.card__footer}>
        <p>$:{price}</p>

        <Button onClick={onClick} variant="light">
          {actionName}
        </Button>
      </div>
    </div>
  );
};

export default Card;
