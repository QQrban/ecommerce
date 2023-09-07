import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { ProductState } from '../../../redux/stateService';

interface ICarousel {
  name: string;
  photo: string;
  price: string;
}

type RootState = {
  products: ProductState;
};

export default function BigSlider() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const products = useSelector((state: RootState) => state.products.products);

  const [activeSlide, setActiveSlide] = useState<ICarousel | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(15);
  const [isChanging, setIsChanging] = useState<boolean>(false);

  const handleChangeSlide = (index: number) => {
    if (products && products[index]) {
      setIsChanging(true);
      setTimeout(() => {
        setActiveSlideIndex(index);
        setActiveSlide({
          name: products[index].name,
          photo: products[index].img,
          price: products[index].price,
        });
        setIsChanging(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (products && products[activeSlideIndex]) {
      setActiveSlide({
        name: products[activeSlideIndex].name,
        photo: products[activeSlideIndex].img,
        price: products[activeSlideIndex].price,
      });
    }
  }, [products, activeSlideIndex]);

  return (
    <>
      {products ? (
        <SliderWrapper>
          <LeftColumn>
            <ProductName>{activeSlide?.name}</ProductName>
            <ProductPrice>{activeSlide?.price}€</ProductPrice>
            <SliderButtons>
              <ShopButton>{t('slider.button.shopNow')}</ShopButton>
              <ViewButton onClick={() => navigate('/catalogue')}>
                {t('slider.button.viewMore')}
              </ViewButton>
            </SliderButtons>
            <RadioWrapper>
              <input
                onClick={() => handleChangeSlide(15)}
                defaultChecked
                type="radio"
                id="option1"
                name="option1"
              />
              <RadioButtonLabel htmlFor="option1"></RadioButtonLabel>
              <input
                onClick={() => handleChangeSlide(10)}
                type="radio"
                id="option2"
                name="option1"
              />
              <RadioButtonLabel htmlFor="option2"></RadioButtonLabel>
              <input
                onClick={() => handleChangeSlide(11)}
                type="radio"
                id="option3"
                name="option1"
              />
              <RadioButtonLabel htmlFor="option3"></RadioButtonLabel>
            </RadioWrapper>
          </LeftColumn>
          <ImgWrapper $isсhanging={isChanging}>
            <img src={activeSlide?.photo} alt={activeSlide?.name} />
          </ImgWrapper>
        </SliderWrapper>
      ) : (
        <LoadingSlider>
          <Spinner style={{ width: '6rem', height: '6rem' }} animation="grow" />
        </LoadingSlider>
      )}
    </>
  );
}

const SliderWrapper = styled.div`
  height: 394px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
  }
`;

const LoadingSlider = styled.div`
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    height: 500px;
  }
`;

const LeftColumn = styled.div`
  @media (max-width: 900px) {
    order: 2;
  }
`;

const ProductName = styled.div`
  color: #1b5a7d;
  font-size: 43px;
  font-weight: 700;
  max-width: 400px;
  @media (max-width: 481px) {
    font-size: 36px;
    text-align: center;
  }
  @media (max-width: 419px) {
    font-size: 32px;
    text-align: center;
  }
`;

const ProductPrice = styled.div`
  color: #444;
  font-weight: 600;
  font-size: 30px;
  margin-top: 19px;
  @media (max-width: 481px) {
    font-size: 36px;
    text-align: center;
  }
`;

type ImgWrapperProps = {
  $isсhanging: boolean;
};

const ImgWrapper = styled.div<ImgWrapperProps>`
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ $isсhanging }) => ($isсhanging ? 0 : 1)};
  width: 450px;
  flex-shrink: 0;
  @media (max-width: 458px) {
    width: 350px;
  }
  @media (max-width: 380px) {
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
  @media (max-width: 481px) {
    justify-content: center;
  }
  @media (max-width: 370px) {
    flex-direction: column;
  }
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
  @media (max-width: 393px) {
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
  @media (max-width: 393px) {
    padding: 10px 20px;
  }
  &:hover {
    background: #316887;
    color: white;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  }
`;
