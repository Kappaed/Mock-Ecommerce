import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.CartReducer.cartItems);
  console.log(cartItems);
  return (
    <>
      {cartItems.map((item) => (
        <CartItem data={item} key={item.id} />
      ))}
    </>
  );
};

export default Cart;
