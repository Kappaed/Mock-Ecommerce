import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const bgPos = css`
  position: absolute;
  content: "";
  width: 100%;
  background-size: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Wrapper = styled(Link)`
  position: relative;
  color: white;
  font-size: 1.4rem;
  text-align: center;
  background: transparent;
  padding: 20px 40px;
  display: block;
  &:before {
    background: black;
    opacity: 0.2;
    z-index: 100;
    ${bgPos};
  }
  &:hover:after {
    background: white;
    opacity: 0.15;
    z-index: 150;
    ${bgPos};
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const StyledText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  z-index: 200;
`;
const CatItem = (props) => {
  return (
    <li>
      <Wrapper to={`/category/${props.category}`}>
        <StyledImg src={props.img} alt="Item from each category" />
        <StyledText>{props.category}</StyledText>
      </Wrapper>
    </li>
  );
};

export default CatItem;
