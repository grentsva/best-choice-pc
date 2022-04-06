import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
}`;

export const ScrollUpBtn = styled.button`
  position: fixed;
  bottom: 0px;
  right: 20px;
  z-index: 1000;
  padding: 7px 10px;
  background-color: #346b21;
  border: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  animation: ${fadeIn} 1.5s;
`;
