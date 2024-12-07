import { ChangeEvent, FC, useEffect, useState } from "react";

import SearchBox from "../components/search/SearchBox";

import CardList from "../components/card/CardList";
import { Product } from "../types/Product.type";
import Button from "../components/button/Button";
import { SortDirection } from "../components/card/Cart.types";
const Home: FC = () => {
  // PRODUCTS
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  // SEARCH
  const [searchField, setSearchField] = useState("");
  function searchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchField(event.target.value);
  }
  const filteredProducts = products.filter((product: Product) => {
    return product.title.toLowerCase().includes(searchField.toLowerCase());
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "end",
        }}
      >
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
      <CardList products={filteredProducts} sortDirection={sortDirection} />
    </>
  );
};

export default Home;
