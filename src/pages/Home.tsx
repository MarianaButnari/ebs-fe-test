import { ChangeEvent, FC, useEffect, useState } from "react";

import SearchBox from "../components/search/SearchBox";
import Button from "../components/button/Button";
import CardList from "../components/card/CardList";

import { SortDirection } from "../components/card/Card.types";
import { Product } from "../types/Product.type";

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

  // SORT
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const toggleSortOrder = () => {
    setSortDirection((prevDirection: SortDirection) => {
      if (prevDirection === null) {
        return "asc";
      }
      return prevDirection === "asc" ? "desc" : "asc";
    });
  };

  return (
    <>
      <div className={classes.actions}>
        <SearchBox searchChange={searchChange}></SearchBox>
        <Button onClick={toggleSortOrder}>
          {sortDirection === null
            ? "Sort by Price"
            : sortDirection === "asc"
            ? "Sort by Price: Ascending"
            : "Sort by Price: Descending"}
        </Button>
      </div>
      <hr></hr>

      {filteredProducts.length ? (
        <CardList products={filteredProducts} sortDirection={sortDirection} />
      ) : (
        <h2 className={classes.message}>
          {loading ? "Loading..." : "No product found"}
        </h2>
      )}
    </>
  );
};

export default Home;
