import styled from "styled-components";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  height: 100%;
  text-align: right;
`;

const ItalicText = styled.p`
  font-style: italic;
  font-size: 0.9rem;
  margin: 20px 0;
`;

const PurchaseText = styled.p`
  text-decoration: underline;
  font-size: 1.2rem;
`;
const CheckoutInfo = () => {
  const totalPrice = useSelector((state) => state.CartReducer.totalPrice);

  return (
    <Wrapper>
      <PurchaseText>Subtotal ${totalPrice.toFixed(2)}</PurchaseText>
      <ItalicText>Taxes and shipping calculated at checkout</ItalicText>
    </Wrapper>
  );
};

export default CheckoutInfo;
