import { FC } from "react";
import { ButtonProps } from "./Button.types";
import classes from "./Button.module.css";

const Button: FC<Partial<ButtonProps>> = ({
  type,
  variant = "outline",
  children,
  onClick,
}) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`${classes.btn} ${variant === "outline" && classes.outline} ${
        variant === "light" && classes.light
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
