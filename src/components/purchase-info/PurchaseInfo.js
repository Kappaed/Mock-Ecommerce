import styled from "styled-components";
import PurchaseButton from "./PurchaseButton";
import SocialMediaLink from "./SocialMediaLink";
import { FaTwitter, FaFacebook, FaPinterest } from "react-icons/fa";
import FadeIn from "../shared/FadeIn";

const StyledColumn = styled.div`
  width: 50%;
  margin-right: ${(props) => (props.marginRight ? "30px" : "0")};
`;

const StyledProductName = styled.h2`
  font-family: "Times New Roman", "Times", "serif";
  font-weight: 400;
  font-style: normal;
  line-height: 1.4;
`;

const StyledImg = styled.img`
  max-height: 470px;
  object-fit: contain;
  max-width: 100%;
`;

const StyledPrice = styled.p`
  margin: 15px 0 50px 0;
  font-size: 1.3rem;
  font-weight: lighter;
`;

const LinkRow = styled.div``;
const PurchaseInfo = (props) => {
  return (
    <>
      <StyledColumn marginRight>
        <FadeIn>
          <StyledImg src={props.image} alt="Main Product" />
        </FadeIn>
      </StyledColumn>
      <StyledColumn>
        <FadeIn>
          <StyledProductName>{props.name}</StyledProductName>
          <StyledPrice> {`$${props.price}`}</StyledPrice>
        </FadeIn>
        <PurchaseButton> Add to Cart </PurchaseButton>
        <PurchaseButton dark> Buy it Now</PurchaseButton>
        <LinkRow>
          <SocialMediaLink logo={<FaTwitter />} text="Share" />
          <SocialMediaLink logo={<FaFacebook />} text="Tweet" />
          <SocialMediaLink logo={<FaPinterest />} text="Pin it" />
        </LinkRow>
      </StyledColumn>
    </>
  );
};

export default PurchaseInfo;
