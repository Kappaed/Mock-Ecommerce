import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 15px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  display: none;
  font-size: 2rem;
  &:hover {
    opacity: var(--hover-link-opacity);
  }
  @media (max-width: 600px) {
    display: block;
  }
  svg:first-child {
    display: ${(props) => (props.showBars ? "block" : "none")};
  }
  svg:last-child {
    display: ${(props) => (props.showBars ? "none" : "block")};
  }
`;
const HamburgerButton = (props) => {
  return (
    <Wrapper>
      <StyledButton
        onClick={() => props.openMenuHandler((state) => !state)}
        showBars={props.isDormant}
      >
        <FaBars />
        <FaTimes />
      </StyledButton>
    </Wrapper>
  );
};

export default HamburgerButton;
