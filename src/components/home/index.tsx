import { styled } from 'styled-components';
import Benefits from './benefits/Benefits';
import News from './news/News';
import Popular from './popular/Popular';
import Poster from './poster/Poster';
import BigSlider from './slider/BigSlider';
import SmallSlider from './slider/SmallSlider';

export default function Home() {
  return (
    <SliderWrapper>
      <BigSlider />
      <SmallSlider />
      <Popular />
      <Poster />
      <Benefits />
      <News />
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  padding: 20px;
  max-width: 1300px;
  margin: 0 auto;
`;
