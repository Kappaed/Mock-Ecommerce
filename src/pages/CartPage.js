import CommonLayout from "../components/shared/CommonLayout";
import Divider from "../components/shared/Divider";
import styled from "styled-components";
import Breadcrumb from "../components/header/Breadcrumb";
import SectionHeading from "../components/shared/SectionHeading";
import Cart from "../components/cart/Cart";
import CheckoutInfo from "../components/cart/CheckoutInfo.js";
import { useSelector } from "react-redux";
import PurchaseButton from "../components/shared/PurchaseButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CartActions } from "../store/CartSlice";
import CartGrid, {
  PriceColumn,
  MainColumn,
  TotalColumn,
  QuantityColumn,
  TextContainer,
} from "../components/cart/CartGrid";

const ActionRow = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledText = styled.p`
  font-size: 1.1rem;
  font-style: italic;
  margin: 10px 0;
`;
const CartPage = () => {
  const numberOfItems = useSelector((state) => state.CartReducer.totalQuantity);
  const [purchasedItems, setPurchasedItems] = useState(false);
  const dispatch = useDispatch();

  const purchaseItemsHandler = () => {
    setPurchasedItems(true);
    dispatch(
      CartActions.setCart({ totalPrice: 0, totalQuantity: 0, cartItems: [] })
    );
  };
  return (
    <CommonLayout>
      <Divider />
      <Breadcrumb path={[{ name: "Your Shopping Cart", link: "/" }]} />
      <SectionHeading>Shopping Cart</SectionHeading>
      {/* <p>This is the Shopping Cart Page</p> */}
      {numberOfItems <= 0 && !purchasedItems && (
        <StyledText>No Items Added Yet.</StyledText>
      )}
      {numberOfItems <= 0 && purchasedItems && (
        <StyledText>Successfully purchased items...</StyledText>
      )}
      {numberOfItems > 0 && (
        <>
          <CartGrid>
            <MainColumn>Product</MainColumn>
            <PriceColumn>
              <TextContainer>Price </TextContainer>
            </PriceColumn>
            <QuantityColumn>
              <TextContainer>Quantity</TextContainer>
            </QuantityColumn>
            <TotalColumn>
              <TextContainer>Total</TextContainer>
            </TotalColumn>
            <Cart />
          </CartGrid>
          <ActionRow>
            <CheckoutInfo />
            <PurchaseButton dark width="auto" onClick={purchaseItemsHandler}>
              Check Out
            </PurchaseButton>
          </ActionRow>
        </>
      )}
    </CommonLayout>
  );
};

export default CartPage;
