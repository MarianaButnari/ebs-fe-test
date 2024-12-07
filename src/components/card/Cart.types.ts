import { Product } from "../../types/Product.type";

export type SortDirection = "asc" | "desc" | null;

export interface CardListProps {
    products: Product[];
    sortDirection: SortDirection;
  }

export interface CardProps {
    product: Product;
    actionName: string;
    onClick: () => void
}