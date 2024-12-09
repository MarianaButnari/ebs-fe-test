import { Product } from "../../types/Product.types";

export interface CardProps {
    product: Product;
    actionName: string;
    onClick: () => void
}