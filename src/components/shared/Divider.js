import styled from "styled-components";

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: var(--light-border-color);
  @media (max-width: 600px) {
    display: ${(props) => (props.navDivider ? "none" : "block")};
  }
`;

export default Divider;
