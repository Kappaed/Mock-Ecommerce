import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import React from "react";
import Dropdown from "../sort-dropdown/Dropdown";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  font-size: 0.85rem;
  font-weight: lighter;
  margin: 25px 0;
`;

const IconWrapper = styled.div`
  margin: 0 8px;
`;

const StyledLink = styled(Link)`
  color: black;
  &:hover {
    opacity: 0.6;
  }
`;

const Breadcrumb = (props) => {
  return (
    <Wrapper>
      <StyledLink to="/">Home</StyledLink>

      {props.path.map((dir, index) => {
        const shouldLink = index === props.path.length - 1 ? false : true;
        return (
          <React.Fragment key={index}>
            <IconWrapper>
              <FaArrowRight />
            </IconWrapper>
            {shouldLink && <StyledLink to={dir.link}>{dir.name}</StyledLink>}
            {!shouldLink && dir.name}
          </React.Fragment>
        );
      })}
      {/* {props.categoryName} */}
    </Wrapper>
  );
};

export default Breadcrumb;
