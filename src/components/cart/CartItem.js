import styled from "styled-components";
import { useDispatch } from "react-redux";
import { CartActions } from "../../store/CartSlice";
import {
  MainColumn,
  PriceColumn,
  QuantityColumn,
  TotalColumn,
  TextContainer,
} from "./CartGrid";
import FadeIn from "../shared/FadeIn";

const StyledText = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
`;

const StyledHeading = styled.p`
  font-size: 1.1rem;
  font-weight: lighter;
  margin-bottom: 20px;
`;

const RemoveButton = styled.button`
  outline: none;
  background: none;
  border: none;
  font-size: 0.9rem;
  color: black;
  font-weight: lighter;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const StyledImage = styled.img`
  max-width: 145px;
  max-height: 145px;
  object-fit: contain;
  margin-right: 30px;
`;
const CartItem = (props) => {
  const { data: itemData } = props;
  const dispatch = useDispatch();
  const removeItemHandler = () => {
    dispatch(
      CartActions.removeProduct({
        product: itemData,
        quantity: itemData.counter,
      })
    );
  };
  return (
    <>
      <FadeIn>
        <MainColumn>
          <StyledImage
            style={{ maxWidth: "145px", marginRight: "30px" }}
            src={itemData.image}
            alt="product purchased"
          />
          <StyledText>
            <StyledHeading>{itemData.title}</StyledHeading>
            <RemoveButton onClick={removeItemHandler}>Remove</RemoveButton>
          </StyledText>
        </MainColumn>
      </FadeIn>
      <FadeIn>
        <PriceColumn>
          <TextContainer>${itemData.price.toFixed(2)}</TextContainer>
        </PriceColumn>
      </FadeIn>
      <FadeIn>
        <QuantityColumn>
          <TextContainer>{itemData.counter} </TextContainer>
        </QuantityColumn>
      </FadeIn>
      <FadeIn>
        <TotalColumn>
          <TextContainer>${itemData.totalPrice.toFixed(2)} </TextContainer>
        </TotalColumn>
      </FadeIn>
    </>
  );
};

export default CartItem;
