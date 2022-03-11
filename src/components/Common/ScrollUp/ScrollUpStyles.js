import styled from 'styled-components';

export const ScrollUpBtn = styled.button`
  position: fixed;
  bottom: 0px;
  right: 20px;
  z-index: 1000;
  padding: 7px 10px;
  background-color: #346b21;
  border: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
    transition: 1s;
  }
`;
