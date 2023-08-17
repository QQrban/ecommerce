import Popular from './popular/Popular';
import BigSlider from './slider/BigSlider';
import SmallSlider from './slider/SmallSlider';
import { styled } from 'styled-components';

export default function Home() {
  return (
    <SliderWrapper>
      <BigSlider />
      <SmallSlider />
      <Popular />
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;
