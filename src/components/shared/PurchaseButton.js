import styled from "styled-components";

const PurchaseButton = styled.button`
  outline: none;
  border: 1px solid black;
  color: ${(props) => (props.dark ? "white" : "black")};
  background: ${(props) => (props.dark ? "black" : "transparent")};
  font-weight: lighter;
  text-align: center;
  padding: 10px 35px;
  margin-bottom: 15px;
  font-size: 1.1rem;
  width: ${(props) => (props.width ? props.width : "60%")};
  cursor: pointer;
  display: block;
  text-transform: capitalize;
  &:hover {
    opacity: 0.7;
  }
`;

export default PurchaseButton;
