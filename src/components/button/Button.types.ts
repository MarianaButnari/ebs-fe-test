import { ReactNode } from "react";

export type ButtonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
  children: ReactNode;
  type: ButtonType;
//   className: string;
  onClick: (() => void) | undefined;
}
