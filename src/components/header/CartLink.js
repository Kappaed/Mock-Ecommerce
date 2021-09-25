import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: black;
  &:hover {
    opacity: var(--hover-link-opacity);
  }
`;

const StyledText = styled.span`
  margin-left: 5px;
`;
const CartLink = (props) => {
  return (
    <StyledLink to="/cart">
      <FaShoppingCart />
      <StyledText>Cart (0)</StyledText>
    </StyledLink>
  );
};

export default CartLink;
