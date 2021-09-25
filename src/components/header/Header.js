import PageContainer from "../shared/PageContainer";
import styled from "styled-components";
import Divider from "../shared/Divider";
import { FaSearch } from "react-icons/fa";
import CartLink from "./CartLink";

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInput = styled.input`
  border: none;
  width: 100%;
  padding: 15px 60px 15px 30px;
`;
const InputWrapper = styled.div`
  position: relative;
  background: transparent;
  margin-bottom: 15px;
  svg {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
  }
`;

const HeaderWrapper = styled(PageContainer)`
  padding-top: var(--body-padding-top);
`;
const Header = () => {
  return (
    <HeaderWrapper>
      <FlexWrapper>
        <InputWrapper>
          <FaSearch />
          <StyledInput
            type="text"
            placeholder="Search..."
            name="GlobalSearch"
            id="GlobalSearch"
          />
        </InputWrapper>
        <CartLink />
      </FlexWrapper>
      <Divider />
    </HeaderWrapper>
  );
};

export default Header;
