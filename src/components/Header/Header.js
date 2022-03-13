import ProgressBar from '../Common/ProgressBar';
import { HeaderWrapper, HomeLink, NavBarWrapper } from './HeaderStyles';

const Header = ({ scrollPercent }) => {
  return (
    <HeaderWrapper>
      <NavBarWrapper>
        <HomeLink href='#'>
          <i className='fas fa-home'></i>
        </HomeLink>
      </NavBarWrapper>
      <ProgressBar scrollPercent={scrollPercent} />
    </HeaderWrapper>
  );
};

export default Header;
