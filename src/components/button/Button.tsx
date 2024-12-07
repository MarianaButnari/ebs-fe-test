import { FC } from "react";
import { ButtonProps } from "./Button.types";
import classes from "./Button.module.css";

const Button: FC<Partial<ButtonProps>> = ({ type, children, onClick }) => {
  return (
    <button type={type || "button"} onClick={onClick} className={classes.btn}>
      {children}
    </button>
  );
};

export default Button;
