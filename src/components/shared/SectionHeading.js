import styled from "styled-components";

const SectionHeading = styled.h2`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.8rem")};
  font-weight: lighter;
  text-align: left;
  margin: ${(props) => (props.margin ? props.margin : "0px")};
`;

export default SectionHeading;
