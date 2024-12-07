import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { CartProvider } from "./context/CartContext";

import Layout from "./layout/Layout";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App: FC = () => {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
};

export default App;
