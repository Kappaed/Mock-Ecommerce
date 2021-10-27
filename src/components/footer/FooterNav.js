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

const StyledNav = styled.nav`
  @media (max-width: 600px) {
    margin: 20px 0;
  }
`;

const StyledListItem = styled.li`
  @media (max-width: 600px) {
    margin: 10px 0;
    font-size: 1.1rem;
  }
`;

const FooterNavHeading = styled(SectionHeading)`
  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

const FooterNav = () => {
  return (
    <>
      <FooterNavHeading fontSize="1.2rem">Links</FooterNavHeading>
      <StyledNav>
        <StyledList>
          <StyledListItem>
            <StyledLink href="#">Our Story</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink href="#">News</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink href="#">Contact Us</StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledNav>
    </>
  );
};

export default FooterNav;
