import { FooterWrapper, FooterSign, FooterLinks } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinks
        href='https://github.com/grentsva'
        rel='noreferrer'
        target={'_blank'}
      >
        <i className='fab fa-github'></i>
      </FooterLinks>
      <FooterSign>Developed by Vladislav Grents, 2022</FooterSign>
    </FooterWrapper>
  );
};

export default Footer;
