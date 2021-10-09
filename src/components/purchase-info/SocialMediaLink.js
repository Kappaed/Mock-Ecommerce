import styled from "styled-components";

const SocialLink = styled.a`
  font-size: 15px;
  color: black;
  font-weight: lighter;
`;

const Wrapper = styled.div`
  display: inline-flexbox;
  align-items: flex-start;
  margin-top: 15px;
  margin-right: 12px;
  &:hover {
    opacity: 0.7;
  }
`;
const SocialMediaLink = (props) => {
  return (
    <Wrapper>
      <SocialLink href="#">
        {props.logo}
        <span style={{ marginRight: "2px" }}> </span>
        {props.text}
      </SocialLink>
    </Wrapper>
  );
};

export default SocialMediaLink;
