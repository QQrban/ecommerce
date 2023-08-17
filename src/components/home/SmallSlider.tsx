import Slider from 'react-slick';
import './SmallSlider.css';
import { styled } from 'styled-components';
import laptop from '../../assets/laptop.png';
import speaker from '../../assets/speaker.png';
import controller from '../../assets/controller-black.png';

export default function SmallSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 929,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <SliderWrapper>
      <SliderStyled {...settings}>
        <Card>
          <ImgWrapper>
            <ImgContainer>
              <img src={laptop} alt="" />
            </ImgContainer>
            <div>
              <div>Laptop</div>
              <div>{'(6 items)'}</div>
            </div>
          </ImgWrapper>
        </Card>
        <Card>
          <ImgWrapper>
            <ImgContainer>
              <img src={speaker} alt="" />
            </ImgContainer>
            <div>
              <div>Speaker</div>
              <div>{'(3 items)'}</div>
            </div>
          </ImgWrapper>
        </Card>
        <Card>
          <ImgWrapper>
            <ImgContainer>
              <img src={controller} alt="" />
            </ImgContainer>
            <div>
              <div>Speaker</div>
              <div>{'(3 items)'}</div>
            </div>
          </ImgWrapper>
        </Card>
        <Card>
          <ImgWrapper>
            <ImgContainer>
              <img src={laptop} alt="" />
            </ImgContainer>
            <div>
              <div>Laptop</div>
              <div>{'(6 items)'}</div>
            </div>
          </ImgWrapper>
        </Card>
        <Card>
          <ImgWrapper>
            <ImgContainer>
              <img src={speaker} alt="" />
            </ImgContainer>
            <div>
              <div>Speaker</div>
              <div>{'(3 items)'}</div>
            </div>
          </ImgWrapper>
        </Card>
        <Card>
          <ImgWrapper>
            <ImgContainer>
              <img src={controller} alt="" />
            </ImgContainer>
            <div>
              <div>Speaker</div>
              <div>{'(3 items)'}</div>
            </div>
          </ImgWrapper>
        </Card>
        <Card>
          <ImgWrapper>
            <ImgContainer>
              <img src={laptop} alt="" />
            </ImgContainer>
            <div>
              <div>Laptop</div>
              <div>{'(6 items)'}</div>
            </div>
          </ImgWrapper>
        </Card>
        <Card>
          <ImgWrapper>
            <ImgContainer>
              <img src={speaker} alt="" />
            </ImgContainer>
            <div>
              <div>Speaker</div>
              <div>{'(3 items)'}</div>
            </div>
          </ImgWrapper>
        </Card>
        <Card>
          <ImgWrapper>
            <ImgContainer>
              <img src={controller} alt="" />
            </ImgContainer>
            <div>
              <div>Speaker</div>
              <div>{'(3 items)'}</div>
            </div>
          </ImgWrapper>
        </Card>
      </SliderStyled>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  max-width: 1200px;
  margin: 104px auto 0 auto;
  @media (max-width: 929px) {
    max-width: 600px;
  }
  @media (max-width: 600px) {
    max-width: 300px;
  }
`;

const SliderStyled = styled(Slider)``;

const Card = styled.div`
  max-width: 270px;
  height: 160px;
  display: flex !important;
  border-radius: 20px;
  border: 1px solid #a5a5a5;
  align-items: center;
  &:not(:last-child) {
    margin-right: 54px;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  gap: 14px;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
