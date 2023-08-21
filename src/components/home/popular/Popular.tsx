import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import useMediaQuery from '../../../shared/hooks/useMediaQuery';
import { StyledTitle } from '../../../shared/styled/styled';
import PopularPage from './PopularPage';
import { populargoods } from './mock';

export default function Popular() {
  const [page, setPage] = useState<number>(1);
  const { t } = useTranslation();
  const matches = useMediaQuery('(min-width: 990px)');

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
    <PopularWrapper style={{ marginTop: '70px', padding: '5px 10px' }}>
      <PopularHeader>
        <StyledTitle>{t('home.title.popularGoods')}</StyledTitle>
        <Pills>
          <Pill>{t('home.popular.pills.cameras')}</Pill>
          <Pill>{t('home.popular.pills.laptops')}</Pill>
          <Pill>{t('home.popular.pills.tablets')}</Pill>
        </Pills>
      </PopularHeader>
      {matches ? (
        <PopularGrid>
          {page === 1 &&
            populargoods
              .slice(0, 8)
              .map((product) => (
                <PopularPage key={product.id} product={product} />
              ))}
          {page === 2 &&
            populargoods
              .slice(8, 16)
              .map((product) => (
                <PopularPage key={product.id} product={product} />
              ))}
        </PopularGrid>
      ) : (
        <PopularGrid>
          {page === 1 &&
            populargoods
              .slice(0, 4)
              .map((product) => (
                <PopularPage key={product.id} product={product} />
              ))}
          {page === 2 &&
            populargoods
              .slice(4, 8)
              .map((product) => (
                <PopularPage key={product.id} product={product} />
              ))}
          {page === 3 &&
            populargoods
              .slice(8, 12)
              .map((product) => (
                <PopularPage key={product.id} product={product} />
              ))}
          {page === 4 &&
            populargoods
              .slice(12, 16)
              .map((product) => (
                <PopularPage key={product.id} product={product} />
              ))}
        </PopularGrid>
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
  @media (max-width: 882px) {
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
  @media (max-width: 364px) {
    flex-wrap: wrap;
    justify-content: center;
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
  @media (max-width: 555px) {
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
