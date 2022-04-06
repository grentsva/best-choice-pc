import { ScrollUpBtn } from './ScrollUpStyles';

const ScrollUp = ({ scrollPercent }) => {
  return (
    <div>
      {scrollPercent > 60 && (
        <ScrollUpBtn onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <i className='fa fa-chevron-up'></i>
        </ScrollUpBtn>
      )}
    </div>
  );
};

export default ScrollUp;
