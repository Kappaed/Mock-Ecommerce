import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  margin: 200px 0;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff black #fff black;
    animation: ${spin} 1.2s linear infinite;
  }
`;

export default LoadingSpinner;
