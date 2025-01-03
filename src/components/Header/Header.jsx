import {
  HeaderContainer,
  NavContainer,
  NavList,
  NavLogo,
} from "./Header.styled";
import logo from "../../assets/svg/logo.svg";

import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <NavLogo>
          <Link to={"/"}>
            <img src={logo} alt="Your SVG" width="112px" />
          </Link>
        </NavLogo>
        <NavList>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/catalog"}>Catalog</NavLink>
          </li>
        </NavList>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
