import PageContainer from "../shared/PageContainer";
import styled from "styled-components";
import Divider from "../shared/Divider";
import { FaSearch } from "react-icons/fa";
import CartLink from "./CartLink";
import { useHistory } from "react-router";
import { useState } from "react";

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInput = styled.input`
  border: none;
  width: 250px;
  padding: 15px 15px 15px 30px;
`;
const InputWrapper = styled.form`
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
  const [inputValue, setInputValue] = useState("");
  const History = useHistory();
  const submitFormHandler = (event) => {
    event.preventDefault();
    History.push(`/search/${inputValue}`);
  };

  return (
    <HeaderWrapper>
      <FlexWrapper>
        <InputWrapper onSubmit={submitFormHandler}>
          <FaSearch />
          <label htmlFor="GlobalSearch" />
          <StyledInput
            type="text"
            placeholder="Search..."
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            name="GlobalSearch"
            id="GlobalSearch"
          />
        </InputWrapper>
        <input type="submit" style={{ visibility: "hidden" }}></input>
        <CartLink />
      </FlexWrapper>
      <Divider />
    </HeaderWrapper>
  );
};

export default Header;
