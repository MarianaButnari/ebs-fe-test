import { FC } from "react";
import { Link } from "react-router-dom";
import { LayoutProps } from "./Layout.types";
import { navLinks } from "./NavLinks";
import { NavLink } from "./NavLink.types";

const Layout: FC<LayoutProps> = ({ children }) => {
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
