import styled, { css } from "styled-components";

const DisplayGrid = styled.ul`
  display: grid;
  grid-template-columns: ${(props) =>
    props.perRow ? css`repeat(${props.perRow}, 1fr)` : "repeat(3, 1fr)"};
  gap: ${(props) => (props.gap ? props.gap : "80px")};
  margin-top: 30px;
  width: 100%;
  margin-bottom: 60px;
`;

export default DisplayGrid;
