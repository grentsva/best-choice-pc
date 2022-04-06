import styled from 'styled-components';

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
  animation-duration: 1.5s;
  animation-fill-mode: both;
  animation-name: fadeIn;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
