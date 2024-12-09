import { FC, useState } from "react";

import { useCart } from "../../context/CartContext";

import Button from "../button/Button";

import { Product, ProductListProps, SortDirection } from "../../types/Product.types";

import classes from "./ProductList.module.css";

const CardList: FC<ProductListProps> = ({ products }) => {
  // SORT by default products are not sorted
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const toggleSortOrder = () => {
    setSortDirection((prevDirection: SortDirection) => {
      if (prevDirection === null) {
        return "asc";
      }
      return prevDirection === "asc" ? "desc" : "asc";
    });
  };

  const { addToCart, removeFromCart } = useCart();

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
    <table className={classes.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>
            Price
            <span onClick={() => toggleSortOrder()} className={classes.sort}>
              &#x2195;
            </span>
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortedProducts.map((product: Product) => (
          <tr key={product.id} className={classes.tr}>
            <td>{product.title}</td>
            <td>{product.category}</td>
            <td>{`$${product.price.toFixed(2)}`}</td>
            <td>
              <Button onClick={() => removeFromCart(product.id)}>-</Button>
              <Button onClick={() => addToCart(product)}>+</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  // return (
  //   <div className={classes.list}>
  //     {sortedProducts.map((product: Product) => (
  //       <Card
  //         key={product.id}
  //         product={product}
  //         actionName="add to cart"
  //         onClick={() => addToCart(product)}
  //       />
  //     ))}
  //   </div>
  // );
};

export default CardList;
