import { FC } from "react";
import { Link } from "react-router-dom";

import { NavLink } from "./NavLink.types";
import { Children } from "../types/Children.type";

import { navLinks } from "./NavLinks";

const Layout: FC<Children> = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          {navLinks.map((link: NavLink, index) => (
            <Link to={link.to} key={`${link.name}-${index}`}>
              {link.name}
            </Link>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>Made With Love by Mariana Malic</p>
      </footer>
    </div>
  );
};

export default Layout;
