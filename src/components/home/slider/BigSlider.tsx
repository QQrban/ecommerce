import { styled } from 'styled-components';
import camera from '../../../assets/camera.png';
import airpods from '../../../assets/pods.png';
import mac from '../../../assets/watch.png';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface ICarousel {
  name: string;
  photo: string;
}

interface ICarousels {
  [key: string]: ICarousel;
}

export default function BigSlider() {
  const { t } = useTranslation();

  const carousel: ICarousels = {
    nikon: {
      name: `Nikon D3300 + 18-55mm VR II Kit, Black`,
      photo: camera,
    },
    pods: {
      name: `Apple AirPods 2 - True-Wireless Earbuds`,
      photo: airpods,
    },
    macbook: {
      name: `Apple Watch Series 8 GPS, Silver`,
      photo: mac,
    },
  };

  const [activeSlide, setActiveSlide] = useState<ICarousel>(carousel.nikon);
  const [isChanging, setIsChanging] = useState<boolean>(false);

  const handleChangeSlide = (newSlide: ICarousel) => {
    setIsChanging(true);

    setTimeout(() => {
      setActiveSlide(newSlide);
      setIsChanging(false);
    }, 500);
  };

  return (
    <SliderWrapper>
      <LeftColumn>
        <ProductName>{activeSlide.name}</ProductName>
        <SliderButtons>
          <ShopButton>{t('slider.button.shopNow')}</ShopButton>
          <ViewButton>{t('slider.button.viewMore')}</ViewButton>
        </SliderButtons>
        <RadioWrapper>
          <input
            onClick={() => handleChangeSlide(carousel.nikon)}
            defaultChecked
            type="radio"
            id="option1"
            name="option1"
          />
          <RadioButtonLabel htmlFor="option1"></RadioButtonLabel>
          <input
            onClick={() => handleChangeSlide(carousel.pods)}
            type="radio"
            id="option2"
            name="option1"
          />
          <RadioButtonLabel htmlFor="option2"></RadioButtonLabel>
          <input
            onClick={() => handleChangeSlide(carousel.macbook)}
            type="radio"
            id="option3"
            name="option1"
          />
          <RadioButtonLabel htmlFor="option3"></RadioButtonLabel>
        </RadioWrapper>
      </LeftColumn>
      <ImgWrapper $isсhanging={isChanging}>
        <img src={activeSlide.photo} alt="camera" />
      </ImgWrapper>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  height: 394px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 763px) {
    flex-direction: column;
    height: auto;
  }
`;

const LeftColumn = styled.div`
  @media (max-width: 763px) {
    order: 2;
  }
`;

const ProductName = styled.div`
  color: #1b5a7d;
  font-size: 43px;
  font-weight: 700;
  max-width: 400px;
`;

type ImgWrapperProps = {
  $isсhanging: boolean;
};

const ImgWrapper = styled.div<ImgWrapperProps>`
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ $isсhanging }) => ($isсhanging ? 0 : 1)};
  width: 331px;
  flex-shrink: 0;
  @media (max-width: 458px) {
    width: 280px;
  }
  .fadeOut {
    opacity: 0;
  }
`;

const SliderButtons = styled.div`
  display: flex;
  gap: 21px;
  margin-top: 19px;
`;

const RadioWrapper = styled.div`
  margin-top: 49px;
  display: flex;
  justify-content: center;
  gap: 8px;
  input[type='radio'] {
    display: none;
  }
  @media (max-width: 458px) {
    margin-top: 30px;
  }
`;

const RadioButtonLabel = styled.label`
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  display: inline-block;
  line-height: 20px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #adadad;
    background-color: #fff;
  }

  input[type='radio']:checked + &::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #eda415;
  }
`;

const ShopButton = styled.button`
  border-radius: 20px;
  padding: 18px 32px;
  background: #eda415;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 356px) {
    padding: 10px 20px;
  }
  &:hover {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  }
`;

const ViewButton = styled.button`
  border-radius: 20px;
  padding: 18px 32px;
  border: 1px solid #316887;
  color: #316887;
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 356px) {
    padding: 10px 20px;
  }
  &:hover {
    background: #316887;
    color: white;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  }
`;
