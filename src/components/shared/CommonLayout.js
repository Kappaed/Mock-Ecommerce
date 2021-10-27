import Header from "../header/Header";
import Footer from "../footer/Footer";
import styled from "styled-components";
import PageContainer from "./PageContainer";
import { Link } from "react-router-dom";
import Nav from "../sidebar/Nav";
import Divider from "./Divider";
import HamburgerButton from "../header/HamburgerButton";
import { useState } from "react";

const SidebarTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 30px;
  font-size: 3rem;
  &:hover {
    opacity: var(--hover-link-opacity);
  }
  @media (max-width: 600px) {
    text-align: center;
  }
`;
const StyledLink = styled(Link)`
  margin-top: 50px;
  color: black;
  width: 100%;
  height: auto;
  display: block;
  /* &:hover {
    opacity: var(--hover-link-opacity);
  } */
`;
const Main = styled.main`
  display: flex;
  align-items: flex-start;
`;

const ShoppingContent = styled.div`
  width: 100%;
  padding-left: 20px;
  position: relative;
  @media (max-width: 600px) {
    padding-left: 0px;
  }
  /* margin-top: 20px; */
`;

const MobileDivider = styled(Divider)`
  display: none;
  margin-bottom: ${(props) => (props.myb15 ? "15px" : "0")};
  @media (max-width: 600px) {
    display: block;
  }
`;

const CommonLayout = (props) => {
  const [shouldMinimise, setShouldMinimise] = useState(true);
  return (
    <PageContainer>
      <Header />
      <StyledLink to="/main">
        <SidebarTitle>Simple.</SidebarTitle>
      </StyledLink>
      <MobileDivider />
      <HamburgerButton
        openMenuHandler={setShouldMinimise}
        isDormant={shouldMinimise}
      />
      <Nav
        mobile
        minimised={shouldMinimise}
        openLinkHandler={setShouldMinimise}
      />
      <MobileDivider myb15 />
      <Main>
        <Nav />
        <ShoppingContent>{props.children}</ShoppingContent>
      </Main>
      <Divider />
      <Footer />
    </PageContainer>
  );
};

export default CommonLayout;
