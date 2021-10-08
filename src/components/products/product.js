import styled from "styled-components";
import { Link } from "react-router-dom";
import FadeIn from "../shared/FadeIn";

const Wrapper = styled(Link)`
  display: flex;
  background: transparent;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  position: relative;
  color: black;
  /* height: 300px; */
  &:hover:before {
    content: "";
    z-index: 10;
    position: absolute;
    background: white;
    background-size: 100%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }
`;

const StyledName = styled.p`
  margin: 10px 0;
  font-weight: lighter;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
`;
const Product = (props) => {
  return (
    <FadeIn>
      <Wrapper to={props.link}>
        <StyledImg src={props.img} alt="available product" />
        <StyledName>{props.title}</StyledName>
        <span>{`$${props.price}`}</span>
      </Wrapper>
    </FadeIn>
  );
};

export default Product;
