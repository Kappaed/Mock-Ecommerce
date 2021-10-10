import styled, { css } from "styled-components";

const centerGridItem = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const CartGrid = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr 2fr 1fr;
  gap: 30px;
  margin: 30px 0;
`;

export default CartGrid;

export const MainColumn = styled.div`
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  margin: 5px 0;
`;

export const TextContainer = styled.span`
  width: 100%;
  text-align: center;
`;

export const PriceColumn = styled.div`
  text-align: right;
  ${centerGridItem};
`;

export const QuantityColumn = styled.div`
  text-align: middle;
  ${centerGridItem};
`;

export const TotalColumn = styled.div`
  text-align: right;
  ${centerGridItem};
`;
