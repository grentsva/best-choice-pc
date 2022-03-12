import { ScrollUpBtn } from './ScrollUpStyles';

const ScrollUp = ({ scrollPercent }) => {
  return (
    <div style={scrollPercent > 60 ? { opacity: '1', transition: '1s' } : { opacity: '0', transition: '1s' }}>
      {scrollPercent && (
        <ScrollUpBtn onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <i className='fa fa-chevron-up'></i>
        </ScrollUpBtn>
      )}
    </div>
  );
};

export default ScrollUp;
