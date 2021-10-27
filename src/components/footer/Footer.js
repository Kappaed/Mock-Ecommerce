import styled from "styled-components";
import FooterNav from "./FooterNav";
import FooterEmail from "./FooterEmail";
import Divider from "../shared/Divider";
import SecondaryFooter from "./SecondaryFooter";

const MainFooterWrapper = styled.div`
  padding: 35px 0;
  display: flex;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterItem = styled.div`
  width: 50%;
  text-align: left;
  @media (max-width: 600px) {
    text-align: center;
    width: 100%;
  }
`;
const Footer = () => {
  return (
    <>
      <MainFooterWrapper>
        <FooterItem>
          <FooterNav />
        </FooterItem>
        <FooterItem>
          <FooterEmail />
        </FooterItem>
      </MainFooterWrapper>
      <Divider />
      <SecondaryFooter />
    </>
  );
};

export default Footer;
