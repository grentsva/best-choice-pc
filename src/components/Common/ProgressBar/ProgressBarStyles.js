import styled from 'styled-components';

export const ProgressBarWrapper = styled.div`
  margin-top: 18px;
  width: 100%;
  height: 8px;
  background: #dfdfdf;
`;

export const ProgressBarLine = styled.div.attrs((props) => ({
  style: {
    width: props.scrollPercent + '%' || '0%',
  },
}))`
  height: 8px;
  background: #94d137; ;
`;
