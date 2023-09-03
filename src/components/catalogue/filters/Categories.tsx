import { useState } from 'react';
import { styled } from 'styled-components';
import CategoriesTitle from './CategoriesTitle';
import ExpandFilter from './ExpandFilter';
import FilterItem from './FilterItem';
import { useTranslation } from 'react-i18next';
import { CategoriesType } from './types';

export default function Categories() {
  const [expand, setExpand] = useState<boolean>(true);
  const { t } = useTranslation();

  const filtersCategories: CategoriesType[] = [
    {
      id: 'all',
      label: t('filter.categories.all'),
      stock: 99,
    },
    {
      id: 'tv',
      label: t('filter.categories.tvs'),
      stock: 4,
    },
    {
      id: 'computers',
      label: t('filter.categories.computers'),
      stock: 8,
    },
    {
      id: 'photovideo',
      label: t('filter.categories.photoVideo'),
      stock: 23,
    },
    {
      id: 'headphones',
      label: t('filter.categories.headphones'),
      stock: 14,
    },
    {
      id: 'phones',
      label: t('filter.categories.phones'),
      stock: 54,
    },
  ];

  return (
    <>
      <ExpandFilter
        background="#eda415"
        label={t('filter.categories.title')}
        expand={expand}
        setExpand={setExpand}
      />
      {expand ? '' : <hr />}
      {expand && (
        <CategoriesWrapper>
          <CategoriesTitle label={t('filter.categories.title')} />
          <CategoriesBody>
            {filtersCategories.map((filter) => (
              <FilterItem
                key={filter.id}
                id={filter.id}
                label={filter.label}
                stock={filter.stock}
              />
            ))}
          </CategoriesBody>
        </CategoriesWrapper>
      )}
    </>
  );
}

const CategoriesWrapper = styled.div`
  margin-top: 18px;
`;

const CategoriesBody = styled.div`
  margin-top: 16px;
`;
