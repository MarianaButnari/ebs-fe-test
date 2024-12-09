import { FC } from "react";
import { Link } from "react-router-dom";

import { NavLink } from "./NavLink.types";
import { Children } from "../types/Children.type";

import { navLinks } from "./NavLinks";

import classes from "./Layout.module.css";

const Layout: FC<Children> = ({ children }) => {
  return (
    <div>
      <header>
        <nav className={classes.navbar}>
          {navLinks.map((link: NavLink, index) => (
            <Link
              to={link.to}
              key={`${link.name}-${index}`}
              className={classes.nav__link}
              data-testid={`${link.name}-${index}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </header>
      <main className={classes.main__container}>{children}</main>
      <footer className={classes.footer}>
        <p>Made With Love by Mariana Malic</p>
      </footer>
    </div>
  );
};

export default Layout;
