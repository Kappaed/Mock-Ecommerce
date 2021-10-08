import styled from "styled-components";

const StyledSelect = styled.select`
  border: none;
  outline: none;
  border-radius: 5px;
  background: whitesmoke;
  font-size: 1rem;
  padding: 15px 40px 15px 15px;
  -moz-appearance: none;
  -webkit-appearance: none;
  &::-ms-expand {
    display: none;
  }
`;

const StyledSelectWrapper = styled.div`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #333;
  }
`;

const Dropdown = (props) => {
  const onChangeHandler = (event) => {
    props.setOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="sort-dropdown" />
      <StyledSelectWrapper>
        <StyledSelect
          name="sort-dropdown"
          id="sort-dropdown"
          onChange={onChangeHandler}
          value={props.selected}
        >
          <option value="alphabetical">alphabetical</option>
          <option value="Least Expensive">Least Expensive</option>
          <option value="Most Expensive">Most Expensive </option>
        </StyledSelect>
      </StyledSelectWrapper>
    </div>
  );
};

export default Dropdown;
