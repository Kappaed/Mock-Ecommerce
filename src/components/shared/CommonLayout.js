import Header from "../header/Header";
import Footer from "../footer/Footer";
import styled from "styled-components";
import PageContainer from "./PageContainer";
import { Link } from "react-router-dom";
import Nav from "../sidebar/Nav";
import Divider from "./Divider";

const SidebarTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 30px;
  font-size: 3rem;
`;
const StyledLink = styled(Link)`
  margin-top: 50px;
  color: black;
  width: 100%;
  height: auto;
  display: block;
  &:hover {
    opacity: var(--hover-link-opacity);
  }
`;
const Main = styled.main`
  display: flex;
  align-items: flex-start;
`;

const ShoppingContent = styled.div`
  width: 100%;
  padding-left: 20px;
  position: relative;
  /* margin-top: 20px; */
`;

const CommonLayout = (props) => {
  return (
    <PageContainer>
      <Header />
      <StyledLink to="/main">
        <SidebarTitle>Simple.</SidebarTitle>
      </StyledLink>
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
