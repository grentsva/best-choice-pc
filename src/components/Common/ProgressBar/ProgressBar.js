import { ProgressBarLine, ProgressBarWrapper } from './ProgressBarStyles';

const ProgressBar = ({ scrollPercent }) => {
  return (
    <ProgressBarWrapper>
      <ProgressBarLine scrollPercent={scrollPercent} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
