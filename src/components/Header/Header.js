import ProgressBar from '../Common/ProgressBar';
import { HeaderWrapper, NavBarWrapper } from './HeaderStyles';

const Header = ({ scrollPercent }) => {
  return (
    <HeaderWrapper>
      <NavBarWrapper>
        <div>nav</div>
        <div>nav</div>
        <div>nav</div>
      </NavBarWrapper>
      <ProgressBar scrollPercent={scrollPercent} />
    </HeaderWrapper>
  );
};

export default Header;
