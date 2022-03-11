import { PreloaderWrapper } from './PreloaderStyles';
import preloader from '../../../assets/images/preloader.svg';

const Preloader = () => {
  return (
    <PreloaderWrapper>
      <img src={preloader} alt='Loading...' />
    </PreloaderWrapper>
  );
};

export default Preloader;
