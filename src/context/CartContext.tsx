import { FC, createContext, useState, useContext } from "react";

import { Children } from "../types/Children.type";
import { Product } from "../types/Product.types";

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: FC<Children> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const existingProduct = cart.find((cartItem) => cartItem.id === product.id);

    setCart(
      existingProduct
        ? cart.map((cartItem) =>
            cartItem.id === product.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...cart, { ...product, quantity: 1 }]
    );
  };

  const removeFromCart = (id: number) => {
    const existingProduct = cart.find((cartItem) => cartItem.id === id);

    if (!existingProduct) return;
    setCart(
      existingProduct.quantity > 1
        ? cart.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
        : cart.filter((cartItem) => cartItem.id !== id)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
