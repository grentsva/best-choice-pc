import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  height: 36px;
  width: 100%;
  background-color: #181818;
`;

export const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HomeLink = styled.a`
  color: #fff;
  padding: 8px;

  &:hover {
    color: #94d137;
    transition: 200ms ease-in;
  }
`;
