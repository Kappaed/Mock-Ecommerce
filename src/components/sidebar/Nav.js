import styled from "styled-components";
import NavItem from "./NavItem";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Divider from "../shared/Divider";

const SocialLinks = styled.ul`
  display: flex;
  width: 35%;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  font-size: 1.3rem;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
  a {
    color: black;
    &:hover {
      opacity: var(--hover-link-opacity);
    }
  }
`;

const Wrapper = styled.nav`
  width: 300px;
  margin-bottom: 200px;
  display: ${(props) => (props.mobile ? "none" : "block")};

  @media (max-width: 600px) {
    display: ${(props) => (props.mobile ? "flex" : "none")};
    height: ${(props) => (props.minimised ? "0" : "500px")};
    transition: all 0.3s ease-out;
    overflow: ${(props) => (props.minimised ? "hidden" : "visible")};
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 100%;
  }
`;

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Nav = (props) => {
  const openNavLinkHandler = () => {
    if (props.openLinkHandler) {
      props.openLinkHandler((state) => !state);
    }
  };
  return (
    <Wrapper mobile={props.mobile} minimised={props.minimised}>
      <Divider navDivider />
      <ul>
        <NavItem to="/main" onLinkClick={openNavLinkHandler}>
          Home
        </NavItem>
        {categories.map((category, index) => (
          <li key={index}>
            <NavItem
              to={`/category/${category}`}
              onLinkClick={openNavLinkHandler}
            >
              {category}
            </NavItem>
          </li>
        ))}
      </ul>
      <SocialLinks>
        <li>
          <a href="#">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram />
          </a>
        </li>
      </SocialLinks>
    </Wrapper>
  );
};

export default Nav;
