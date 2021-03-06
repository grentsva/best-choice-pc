import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background-color: #181818;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FooterLinks = styled.a`
  color: #fff;
  padding: 10px;

  &:hover {
    color: #94d137;
    transition: 200ms ease-in;
  }
`;

export const FooterSign = styled.div`
  flex-basis: 55%;
  padding: 10px 0;

  @media (max-width: 425px) {
    flex-basis: 85%;
  }
`;
