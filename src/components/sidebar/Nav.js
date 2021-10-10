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
`;

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];
const Nav = () => {
  return (
    <Wrapper>
      <Divider />
      <ul>
        <NavItem to="/main"> Home </NavItem>
        {categories.map((category, index) => (
          <li key={index}>
            <NavItem to={`/category/${category}`}> {category} </NavItem>
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
