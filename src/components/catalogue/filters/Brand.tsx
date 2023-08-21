import { useState } from 'react';
import { styled } from 'styled-components';
import CategoriesTitle from './CategoriesTitle';
import ExpandFilter from './ExpandFilter';
import FilterItem from './FilterItem';
import { useTranslation } from 'react-i18next';
import { CategoriesType } from './types';

export default function Brand() {
  const [expand, setExpand] = useState<boolean>(false);
  const { t } = useTranslation();

  const filtersBrands: CategoriesType[] = [
    {
      id: 'allbrands',
      label: t('filter.brand.all'),
      stock: 6,
    },
    {
      id: 'nikon',
      label: 'Nikon',
      stock: 6,
    },
    {
      id: 'canon',
      label: 'Canon',
      stock: 4,
    },
    {
      id: 'acer',
      label: 'Acer',
      stock: 8,
    },
    {
      id: 'dell',
      label: 'Dell',
      stock: 23,
    },
    {
      id: 'apple',
      label: 'Apple',
      stock: 14,
    },
    {
      id: 'samsung',
      label: 'Samsung',
      stock: 54,
    },
    {
      id: 'microsoft',
      label: 'Microsoft',
      stock: 20,
    },
    {
      id: 'lenovo',
      label: 'Lenovo',
      stock: 20,
    },
  ];

  return (
    <>
      <ExpandFilter
        background="#003f62"
        label={t('filter.brand.title')}
        expand={expand}
        setExpand={setExpand}
      />
      {expand ? '' : <hr />}
      {expand && (
        <BrandWrapper>
          <CategoriesTitle label={t('filter.brand.title')} />
          <CategoriesBody>
            {filtersBrands.map((filter) => (
              <FilterItem
                key={filter.id}
                id={filter.id}
                label={filter.label}
                stock={filter.stock}
              />
            ))}
          </CategoriesBody>
        </BrandWrapper>
      )}
    </>
  );
}

const BrandWrapper = styled.div`
  margin-top: 18px;
`;

const CategoriesBody = styled.div`
  margin-top: 18px;
`;
