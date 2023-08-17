import { StyledTitle } from '../../../shared/styled/styled';
import { styled } from 'styled-components';
import camera from '../../../assets/grid-camera.png';
import pods from '../../../assets/pods.png';
import watch from '../../../assets/watch.png';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

export default function Popular() {
  const { t } = useTranslation();
  return (
    <PopularWrapper style={{ marginTop: '70px', padding: '5px 10px' }}>
      <PopularHeader>
        <StyledTitle>{t('home.title.popularGoods')}</StyledTitle>
        <Pills>
          <Pill>{t('home.popular.pills.cameras')}</Pill>
          <Pill>{t('home.popular.pills.laptops')}</Pill>
          <Pill>{t('home.popular.pills.tablets')}</Pill>
        </Pills>
      </PopularHeader>
      <PopularGrid>
        <GridItem>
          <ImgWrapper>
            <img src={camera} alt="" />
          </ImgWrapper>
          <ItemName>Wireless headphones</ItemName>
          <ItemPrice>$11.70</ItemPrice>
          <BuyLike>
            <BuyButton>{t('shared.addToCart')}</BuyButton>
            <LikeContainer>
              <LikeIcon size={26} />
            </LikeContainer>
          </BuyLike>
        </GridItem>
        <GridItem>
          <ImgWrapper>
            <img src={pods} alt="" />
          </ImgWrapper>
          <ItemName>Wireless headphones</ItemName>
          <ItemPrice>$11.70</ItemPrice>
          <BuyLike>
            <BuyButton>{t('shared.addToCart')}</BuyButton>
            <LikeContainer>
              <LikeIcon size={26} />
            </LikeContainer>
          </BuyLike>
        </GridItem>
        <GridItem>
          <ImgWrapper>
            <img src={watch} alt="" />
          </ImgWrapper>
          <ItemName>Wireless headphones</ItemName>
          <ItemPrice>$11.70</ItemPrice>
          <BuyLike>
            <BuyButton>{t('shared.addToCart')}</BuyButton>
            <LikeContainer>
              <LikeIcon size={26} />
            </LikeContainer>
          </BuyLike>
        </GridItem>
        <GridItem>
          <ImgWrapper>
            <img src={camera} alt="" />
          </ImgWrapper>
          <ItemName>Wireless headphones</ItemName>
          <ItemPrice>$11.70</ItemPrice>
          <BuyLike>
            <BuyButton>{t('shared.addToCart')}</BuyButton>
            <LikeContainer>
              <LikeIcon size={26} />
            </LikeContainer>
          </BuyLike>
        </GridItem>
        <GridItem>
          <ImgWrapper>
            <img src={pods} alt="" />
          </ImgWrapper>
          <ItemName>Wireless headphones</ItemName>
          <ItemPrice>$11.70</ItemPrice>
          <BuyLike>
            <BuyButton>{t('shared.addToCart')}</BuyButton>
            <LikeContainer>
              <LikeIcon size={26} />
            </LikeContainer>
          </BuyLike>
        </GridItem>
        <GridItem>
          <ImgWrapper>
            <img src={watch} alt="" />
          </ImgWrapper>
          <ItemName>Wireless headphones</ItemName>
          <ItemPrice>$11.70</ItemPrice>
          <BuyLike>
            <BuyButton>{t('shared.addToCart')}</BuyButton>
            <LikeContainer>
              <LikeIcon size={26} />
            </LikeContainer>
          </BuyLike>
        </GridItem>
        <GridItem>
          <ImgWrapper>
            <img src={camera} alt="" />
          </ImgWrapper>
          <ItemName>Wireless headphones</ItemName>
          <ItemPrice>$11.70</ItemPrice>
          <BuyLike>
            <BuyButton>{t('shared.addToCart')}</BuyButton>
            <LikeContainer>
              <LikeIcon size={26} />
            </LikeContainer>
          </BuyLike>
        </GridItem>
        <GridItem>
          <ImgWrapper>
            <img src={pods} alt="" />
          </ImgWrapper>
          <ItemName>Wireless headphones</ItemName>
          <ItemPrice>$11.70</ItemPrice>
          <BuyLike>
            <BuyButton>{t('shared.addToCart')}</BuyButton>
            <LikeContainer>
              <LikeIcon size={26} />
            </LikeContainer>
          </BuyLike>
        </GridItem>
      </PopularGrid>
      <RadioWrapper>
        <input defaultChecked type="radio" id="option10" name="option10" />
        <RadioButtonLabel htmlFor="option10"></RadioButtonLabel>
        <input type="radio" id="option20" name="option10" />
        <RadioButtonLabel htmlFor="option20"></RadioButtonLabel>
        <input type="radio" id="option30" name="option10" />
        <RadioButtonLabel htmlFor="option30"></RadioButtonLabel>
      </RadioWrapper>
    </PopularWrapper>
  );
}

const PopularWrapper = styled.div`
  padding: 0 20px;
`;

const PopularHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 857px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const Pills = styled.div`
  display: flex;
  gap: 13px;
  @media (max-width: 514px) {
    gap: 7px;
  }
`;

const Pill = styled.button`
  border-radius: 20px;
  border: 1px solid #b5b5b5;
  padding: 10px 40px;
  color: #1b5a7d;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    background: #1b5a7d;
    color: white;
  }
  @media (max-width: 514px) {
    padding: 5px 10px;
  }
`;

const PopularGrid = styled.div`
  margin-top: 53px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  gap: 15px;
  @media (max-width: 1395px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 700px;
    margin: 53px auto 0 auto;
  }
  @media (max-width: 745px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  width: 300px;
  height: 270px;
  border-radius: 19.671px;
  border: 1px solid #b6b6b6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  justify-content: space-between;
  gap: 6px;
  @media (max-width: 360px) {
    width: 260px;
  }
`;

const ImgWrapper = styled.div`
  width: 130px;
`;

const ItemName = styled.div`
  color: #003f62;
  font-size: 17px;
  font-weight: 500;
`;

const ItemPrice = styled.div`
  color: #4a4a4a;
  font-size: 17px;
  font-weight: 600;
`;

const BuyLike = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`;

const BuyButton = styled.button`
  background: #003f62;
  padding: 5px 20px;
  border-radius: 20px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  }
`;

const LikeContainer = styled.div`
  border: 1px solid rgba(128, 128, 128, 0.118);
  padding: 4px 10px;
  border-radius: 12px;
  cursor: pointer;
`;

const LikeIcon = styled(MdOutlineFavoriteBorder)`
  color: #eda415;
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
