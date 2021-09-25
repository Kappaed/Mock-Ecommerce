import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  position: relative;
  color: white;
  /* font-weight: lighter; */
  font-size: 1.4rem;
  text-align: center;
  background: transparent;
  padding: 20px 40px;
  /* padding: 5px 10px; */
  display: block;
  &:before {
    content: "";
    position: absolute;
    background: black;
    opacity: 0.2;
    background-size: 100%;
    z-index: 100;
    width: 100%;
    /* border-radius: 8px; */
    height: 100%;
    top: 0;
    left: 0;
  }
  &:hover:after {
    content: "";
    position: absolute;
    background: white;
    opacity: 0.15;
    background-size: 100%;
    z-index: 150;
    width: 100%;
    /* border-radius: 8px; */
    height: 100%;
    top: 0;
    left: 0;
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
