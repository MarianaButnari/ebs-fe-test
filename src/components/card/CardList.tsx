import { FC } from "react";

import { useCart } from "../../context/CartContext";

import { Product } from "../../types/Product.type";
import { CardListProps } from "./Cart.types";

import Card from "./Card";

import classes from "./CardList.module.css";

const CardList: FC<CardListProps> = ({ products, sortDirection }) => {
  const { addToCart } = useCart();

  const sortedProducts = sortDirection
    ? [...products].sort((a, b) => {
        if (sortDirection === "asc") {
          return a.price - b.price; //price asc
        } else {
          return b.price - a.price; //price desc
        }
      })
    : products;

  return (
    <div className={classes.list}>
      {sortedProducts.map((product: Product) => (
        <Card
          key={product.id}
          product={product}
          actionName="add to cart"
          onClick={() => addToCart(product)}
        />
      ))}
    </div>
  );
};

export default CardList;
