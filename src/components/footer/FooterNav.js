import styled from "styled-components";
import SectionHeading from "../shared/SectionHeading";

const StyledLink = styled.a`
  color: black;
  display: inline-block;
  margin-bottom: 5px;
  &:hover {
    opacity: var(--hover-link-opacity);
  }
`;

const StyledList = styled.ul`
  margin-top: 20px;
`;

const FooterNav = () => {
  return (
    <>
      <SectionHeading fontSize="1.2rem">Links</SectionHeading>
      <nav>
        <StyledList>
          <li>
            <StyledLink href="#">Our Story</StyledLink>
          </li>
          <li>
            <StyledLink href="#">News</StyledLink>
          </li>
          <li>
            <StyledLink href="#">Contact Us</StyledLink>
          </li>
        </StyledList>
      </nav>
    </>
  );
};

export default FooterNav;
