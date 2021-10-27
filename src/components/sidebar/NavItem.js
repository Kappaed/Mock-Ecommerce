import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Divider from "../shared/Divider";

const StyledLink = styled(NavLink)`
  color: black;
  padding: 30px 0;
  display: block;
  text-align: left;
  font-size: 1.1rem;
  &.selected {
    font-weight: bold;
  }
  &:hover {
    opacity: var(--hover-link-opacity);
  }
  @media (max-width: 600px) {
    text-align: center;
  }
`;

const NavItem = (props) => {
  return (
    <>
      <ul>
        <StyledLink
          to={props.to}
          activeClassName="selected"
          onClick={props?.onLinkClick}
        >
          {props.children}
        </StyledLink>
      </ul>
      <Divider navDivider />
    </>
  );
};

export default NavItem;
