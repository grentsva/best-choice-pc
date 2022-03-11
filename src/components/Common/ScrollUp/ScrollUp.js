import { ScrollUpBtn } from './ScrollUpStyles';

const ScrollUp = ({ isScrolled }) => {
  return (
    <div
      style={
        isScrolled
          ? { opacity: '1', transition: '1s' }
          : { opacity: '0', transition: '1s' }
      }
    >
      {isScrolled && (
        <ScrollUpBtn
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <i className='fa fa-chevron-up'></i>
        </ScrollUpBtn>
      )}
    </div>
  );
};

export default ScrollUp;
