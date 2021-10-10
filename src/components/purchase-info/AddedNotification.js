import styled from "styled-components";

const AddedNotification = styled.p`
  opacity: ${(props) => (props.showNoti ? "1" : "0")};
  font-weight: lighter;
  font-size: 1.2rem;
  color: black;
  transition: opacity 0.3s ease-in;
  margin: 30px 0;
`;

export default AddedNotification;
