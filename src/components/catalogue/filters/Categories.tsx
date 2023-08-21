import { useState } from 'react';
import { styled } from 'styled-components';
import CategoriesTitle from './CategoriesTitle';
import ExpandFilter from './ExpandFilter';
import FilterItem from './FilterItem';

const filtersCategories = [
  {
    id: 'all',
    label: 'All categories',
    stock: 99,
  },
  {
    id: 'tv',
    label: `TV's & Home cinema`,
    stock: 4,
  },
  {
    id: 'computers',
    label: 'Computers',
    stock: 8,
  },
  {
    id: 'photovideo',
    label: 'Photo & Video',
    stock: 23,
  },
  {
    id: 'headphones',
    label: 'Headphones',
    stock: 14,
  },
  {
    id: 'phones',
    label: 'Phones',
    stock: 54,
  },
  {
    id: 'gaming',
    label: 'Gaming',
    stock: 20,
  },
];

export default function Categories() {
  const [expand, setExpand] = useState<boolean>(true);

  return (
    <>
      <ExpandFilter
        background="#eda415"
        label="Categories"
        expand={expand}
        setExpand={setExpand}
      />
      {expand ? '' : <hr />}
      {expand && (
        <CategoriesWrapper>
          <CategoriesTitle label="Categories" />
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
