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
  width: 60%;
  cursor: pointer;
  display: block;
  text-transform: capitalize;
  &:hover {
    opacity: 0.6;
  }
`;

export default PurchaseButton;
