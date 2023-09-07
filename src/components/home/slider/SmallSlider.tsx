import Spinner from 'react-bootstrap/Spinner';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { styled } from 'styled-components';
import { ProductState } from '../../../redux/stateService';
import { StyledTitle } from '../../../shared/styled/styled';
import './SmallSlider.css';

type RootState = {
  products: ProductState;
};

export default function SmallSlider() {
  const { t } = useTranslation();

  const products = useSelector((state: RootState) => state.products.products);

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
        breakpoint: 1357,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 877,
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
    <>
      <SliderWrapper>
        <StyledTitle style={{ margin: '0 0 30px 0' }}>
          {t('home.title.newGoods')}
        </StyledTitle>
        {products ? (
          <Slider {...settings}>
            {products
              ?.filter((type) => type.goodsType === 'new')
              .map((product) => (
                <Card key={product.productCode}>
                  <ImgWrapper>
                    <ImgContainer>
                      <img src={product.img} alt={product.name} />
                    </ImgContainer>
                    <CardText>{product.name}</CardText>
                  </ImgWrapper>
                </Card>
              ))}
          </Slider>
        ) : (
          <LoadingSlider>
            <Spinner
              style={{ width: '6rem', height: '6rem' }}
              animation="grow"
            />
          </LoadingSlider>
        )}
      </SliderWrapper>
    </>
  );
}

const SliderWrapper = styled.div`
  padding: 5px 10px;
  margin: 30px auto 0 auto;
  @media (max-width: 1357px) {
    max-width: 850px;
  }
  @media (max-width: 877px) {
    max-width: 320px;
  }
`;

const LoadingSlider = styled.div`
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  max-width: 400px;
  height: 160px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 1px solid #a5a5a5;
  align-items: center;
  &:not(:last-child) {
    margin-right: 54px;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  overflow: hidden;
  padding: 5px 10px;
  gap: 14px;
  align-items: center;
  img {
    width: 90%;
  }
`;

const ImgContainer = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardText = styled.div`
  color: #1b5a7d;
  font-size: 18px;
  font-weight: 400;
`;
