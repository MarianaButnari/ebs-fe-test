import { ChangeEvent, FC, useEffect, useState } from "react";

import SearchBox from "../components/search/SearchBox";
import CardList from "../components/productList/ProductList";
import { Product } from "../types/Product.types";

import classes from "./Home.module.css";

const Home: FC = () => {
  // PRODUCTS
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // SEARCH
  const [searchField, setSearchField] = useState("");
  function searchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchField(event.target.value);
  }
  const filteredProducts = products.filter((product: Product) => {
    return product.category.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <>
      <div className={classes.actions}>
        <SearchBox searchChange={searchChange}></SearchBox>
      </div>
      <hr></hr>

      {filteredProducts.length ? (
        <CardList products={filteredProducts} />
      ) : (
        <h2 className={classes.message}>
          {loading ? "Loading..." : "No product found"}
        </h2>
      )}
    </>
  );
};

export default Home;
