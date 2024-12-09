import { ReactNode } from "react";

export type ButtonType = "button" | "submit" | "reset" | undefined;
export type ButtonVariant = "light" | "outline";

export interface ButtonProps {
  children: ReactNode;
  type: ButtonType;
  variant: ButtonVariant;
  onClick: (() => void) | undefined;
}
