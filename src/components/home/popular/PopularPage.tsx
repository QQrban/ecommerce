import { useTranslation } from 'react-i18next';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { styled } from 'styled-components';

interface Product {
  id: number;
  photo: string;
  name: string;
  price: number;
}

type Products = {
  product: Product;
};

export default function PopularPage({ product }: Products) {
  const { t } = useTranslation();

  return (
    <GridItem>
      <ImgWrapper>
        <img src={product.photo} alt="" />
      </ImgWrapper>
      <ItemName>{product.name}</ItemName>
      <ItemPrice>{product.price}€</ItemPrice>
      <BuyLike>
        <BuyButton>{t('shared.addToCart')}</BuyButton>
        <LikeContainer>
          <LikeIcon size={26} />
        </LikeContainer>
      </BuyLike>
    </GridItem>
  );
}

const GridItem = styled.div`
  width: 300px;
  height: 310px;
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
