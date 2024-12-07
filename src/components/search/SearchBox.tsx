import { ChangeEventHandler, FC } from "react";
import classes from "./SearchBox.module.css";

const SearchBox: FC<{ searchChange: ChangeEventHandler<HTMLInputElement> }> = ({
  searchChange,
}) => {
  return (
    <div className={classes.form__group}>
      <input
        type="search"
        placeholder="Search Product"
        onChange={searchChange}
        className={classes.form__control}
      />
    </div>
  );
};

export default SearchBox;
