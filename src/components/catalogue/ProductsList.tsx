import ProductItem from '../shared/ProductItem';
import camera from '../../assets/camera.png';
import pods from '../../assets/pods.png';
import watch from '../../assets/watch.png';
import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import useMediaQuery from '../../shared/hooks/useMediaQuery';

const populargoods = [
  {
    id: 1,
    photo: camera,
    name: 'Canon EOS 2000D + 18-55mm III Kit, Black',
    price: 449,
  },
  {
    id: 2,
    photo: pods,
    name: 'Apple AirPods 2 - True-Wireless Earbuds',
    price: 119.99,
  },
  {
    id: 3,
    photo: watch,
    name: 'Apple Watch Series 8 GPS, Sport Band',
    price: 480,
  },
  {
    id: 4,
    photo: camera,
    name: 'Canon EOS 2000D + 18-55mm III Kit, Black',
    price: 449,
  },
  {
    id: 5,
    photo: pods,
    name: 'Apple AirPods 2 - True-Wireless Earbuds',
    price: 119.99,
  },
  {
    id: 6,
    photo: watch,
    name: 'Apple Watch Series 8 GPS, Sport Band',
    price: 480,
  },
  {
    id: 7,
    photo: pods,
    name: 'Apple AirPods 2 - True-Wireless Earbuds',
    price: 119.99,
  },
  {
    id: 8,
    photo: camera,
    name: 'Canon EOS 2000D + 18-55mm III Kit, Black',
    price: 449,
  },
  {
    id: 9,
    photo: watch,
    name: 'Apple Watch Series 8 GPS, Sport Band',
    price: 480,
  },
  {
    id: 10,
    photo: watch,
    name: 'Apple Watch Series 8 GPS, Sport Band',
    price: 480,
  },
  {
    id: 11,
    photo: pods,
    name: 'Apple AirPods 2 - True-Wireless Earbuds',
    price: 119.99,
  },
  {
    id: 12,
    photo: pods,
    name: 'Apple AirPods 2 - True-Wireless Earbuds',
    price: 119.99,
  },
  {
    id: 13,
    photo: camera,
    name: 'Canon EOS 2000D + 18-55mm III Kit, Black',
    price: 449,
  },
  {
    id: 14,
    photo: pods,
    name: 'Apple AirPods 2 - True-Wireless Earbuds',
    price: 119.99,
  },
  {
    id: 15,
    photo: watch,
    name: 'Apple Watch Series 8 GPS, Sport Band',
    price: 480,
  },
  {
    id: 16,
    photo: watch,
    name: 'Apple Watch Series 8 GPS, Sport Band',
    price: 480,
  },
  {
    id: 17,
    photo: camera,
    name: 'Canon EOS 2000D + 18-55mm III Kit, Black',
    price: 449,
  },
  {
    id: 18,
    photo: watch,
    name: 'Apple Watch Series 8 GPS, Sport Band',
    price: 480,
  },
  {
    id: 19,
    photo: watch,
    name: 'Apple Watch Series 8 GPS, Sport Band',
    price: 480,
  },
  {
    id: 20,
    photo: pods,
    name: 'Apple AirPods 2 - True-Wireless Earbuds',
    price: 119.99,
  },
  {
    id: 21,
    photo: pods,
    name: 'Apple AirPods 2 - True-Wireless Earbuds',
    price: 119.99,
  },
  {
    id: 22,
    photo: camera,
    name: 'Canon EOS 2000D + 18-55mm III Kit, Black',
    price: 449,
  },
  {
    id: 23,
    photo: pods,
    name: 'Apple AirPods 2 - True-Wireless Earbuds',
    price: 119.99,
  },
  {
    id: 24,
    photo: watch,
    name: 'Apple Watch Series 8 GPS, Sport Band',
    price: 480,
  },
];

export default function ProductsList() {
  const [page, setPage] = useState<number>(1);
  const matches = useMediaQuery('(min-width: 1346px)');

  const handlePageChange = (newPage: number) => {
    if (page === newPage) return;
    setTimeout(() => {
      setPage(newPage);
    }, 200);
  };

  useEffect(() => {
    if (matches && page >= 3) {
      setPage(2);
    }
  }, [matches, page]);

  return (
    <ListContainer>
      {matches ? (
        <ProductsGrid>
          {page === 1 &&
            populargoods
              .slice(0, 12)
              .map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
          {page === 2 &&
            populargoods
              .slice(12, 24)
              .map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
        </ProductsGrid>
      ) : (
        <ProductsGrid>
          {page === 1 &&
            populargoods
              .slice(0, 6)
              .map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
          {page === 2 &&
            populargoods
              .slice(6, 12)
              .map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
          {page === 3 &&
            populargoods
              .slice(12, 18)
              .map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
          {page === 4 &&
            populargoods
              .slice(18, 24)
              .map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
        </ProductsGrid>
      )}
      {matches ? (
        <RadioWrapper>
          <input
            onChange={() => handlePageChange(1)}
            checked={page === 1}
            type="radio"
            id="option10"
            name="option10"
          />
          <RadioButtonLabel htmlFor="option10"></RadioButtonLabel>
          <input
            onChange={() => handlePageChange(2)}
            checked={page === 2}
            type="radio"
            id="option20"
            name="option10"
          />
          <RadioButtonLabel htmlFor="option20"></RadioButtonLabel>
        </RadioWrapper>
      ) : (
        <RadioWrapper>
          <input
            onChange={() => handlePageChange(1)}
            checked={page === 1}
            type="radio"
            id="option10"
            name="option10"
          />
          <RadioButtonLabel htmlFor="option10"></RadioButtonLabel>
          <input
            onChange={() => handlePageChange(2)}
            checked={page === 2}
            type="radio"
            id="option20"
            name="option10"
          />
          <RadioButtonLabel htmlFor="option20"></RadioButtonLabel>
          <input
            onChange={() => handlePageChange(3)}
            checked={page === 3}
            type="radio"
            id="option30"
            name="option10"
          />
          <RadioButtonLabel htmlFor="option30"></RadioButtonLabel>
          <input
            onChange={() => handlePageChange(4)}
            checked={page === 4}
            type="radio"
            id="option40"
            name="option10"
          />
          <RadioButtonLabel htmlFor="option40"></RadioButtonLabel>
        </RadioWrapper>
      )}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 36px;
  margin-left: 132px;
  @media (max-width: 1750px) {
    margin-left: 50px;
  }
  @media (max-width: 1666px) {
    margin-left: 162px;
  }
  @media (max-width: 1476px) {
    margin-left: 50px;
  }
  @media (max-width: 1346px) {
    margin-left: 160px;
  }
  @media (max-width: 1158px) {
    margin-left: 90px;
  }
  @media (max-width: 1050px) {
    margin-left: 50px;
  }
  @media (max-width: 1000px) {
    margin: 70px 0 0 0;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  padding-bottom: 18px;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  @media (max-width: 1666px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1346px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const RadioWrapper = styled.div`
  margin-top: 18px;
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
