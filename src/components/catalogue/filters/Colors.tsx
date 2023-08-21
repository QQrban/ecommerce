import CategoriesTitle from './CategoriesTitle';
import { useState } from 'react';
import ExpandFilter from './ExpandFilter';
import { styled } from 'styled-components';
import FilterItem from './FilterItem';
import { CategoriesType } from './types';
import { useTranslation } from 'react-i18next';

export default function Colors() {
  const [expand, setExpand] = useState<boolean>(false);
  const { t } = useTranslation();

  const filtersColors: CategoriesType[] = [
    {
      id: 'allColors',
      label: t('filter.colors.all'),
      stock: 99,
    },
    {
      id: 'black',
      label: t('filter.colors.black'),
      stock: 6,
    },
    {
      id: 'white',
      label: t('filter.colors.white'),
      stock: 9,
    },
    {
      id: 'silver',
      label: t('filter.colors.silver'),
      stock: 15,
    },
    {
      id: 'blue',
      label: t('filter.colors.blue'),
      stock: 18,
    },
    {
      id: 'other',
      label: t('filter.colors.other'),
      stock: 41,
    },
  ];

  return (
    <>
      <ExpandFilter
        background="#eda415"
        label={t('filter.colors.title')}
        expand={expand}
        setExpand={setExpand}
      />
      {expand ? '' : <hr />}
      {expand && (
        <ColorWrapper>
          <CategoriesTitle label={t('filter.colors.title')} />
          <CategoriesBody>
            {filtersColors.map((filter) => (
              <FilterItem
                key={filter.id}
                id={filter.id}
                label={filter.label}
                stock={filter.stock}
              />
            ))}
          </CategoriesBody>
        </ColorWrapper>
      )}
    </>
  );
}

const ColorWrapper = styled.div`
  margin-top: 18px;
`;

const CategoriesBody = styled.div`
  margin-top: 18px;
`;
