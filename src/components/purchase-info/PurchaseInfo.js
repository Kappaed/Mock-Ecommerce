import styled from "styled-components";
import PurchaseButton from "../shared/PurchaseButton";
import SocialMediaLink from "./SocialMediaLink";
import { FaTwitter, FaFacebook, FaPinterest } from "react-icons/fa";
import FadeIn from "../shared/FadeIn";
import { CartActions } from "../../store/CartSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import AddedNotification from "./AddedNotification";

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
  max-height: 300px;
  object-fit: contain;
  max-width: 100%;
`;

const StyledPrice = styled.p`
  margin: 15px 0 50px 0;
  font-size: 1.3rem;
  font-weight: lighter;
`;

const PurchaseInfo = (props) => {
  const [showItemAdded, setShowItemAdded] = useState(false);
  const [numberOfAdded, setNumberOfAdded] = useState(0);
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    if (props.productInfo === null) {
      return;
    }
    dispatch(CartActions.addProduct(props.productInfo));
    setShowItemAdded(true);
    setNumberOfAdded((prevState) => prevState + 1);
  };
  useEffect(() => {
    if (showItemAdded) {
      const ID = setTimeout(() => setShowItemAdded(false), 3000);
      return () => clearTimeout(ID);
    }
    return;
  }, [showItemAdded]);
  console.log(props.productInfo);
  return (
    <>
      <StyledColumn marginRight>
        <FadeIn>
          <StyledImg src={props.productInfo?.image} alt="Main Product" />
        </FadeIn>
      </StyledColumn>
      <StyledColumn>
        <FadeIn>
          <StyledProductName>{props.productInfo?.title}</StyledProductName>
          <StyledPrice> {`$${props.productInfo?.price}`}</StyledPrice>
        </FadeIn>
        <PurchaseButton onClick={addToCartHandler}>Add to Cart</PurchaseButton>
        <AddedNotification showNoti={showItemAdded}>
          {`Added to the Cart! x${numberOfAdded}`}
        </AddedNotification>
        <div>
          <SocialMediaLink logo={<FaTwitter />} text="Share" />
          <SocialMediaLink logo={<FaFacebook />} text="Tweet" />
          <SocialMediaLink logo={<FaPinterest />} text="Pin it" />
        </div>
      </StyledColumn>
    </>
  );
};

export default PurchaseInfo;
