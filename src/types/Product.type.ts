import { Rating } from "./Rating.type";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  onAddToCart: () => void;
}
