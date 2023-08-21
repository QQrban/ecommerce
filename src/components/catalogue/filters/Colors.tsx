import CategoriesTitle from './CategoriesTitle';
import { useState } from 'react';
import ExpandFilter from './ExpandFilter';
import { styled } from 'styled-components';
import FilterItem from './FilterItem';

const filtersColors = [
  {
    id: 'black',
    label: 'Black',
    stock: 6,
  },
  {
    id: 'white',
    label: 'White',
    stock: 9,
  },
  {
    id: 'silver',
    label: 'Silver',
    stock: 15,
  },
  {
    id: 'blue',
    label: 'Blue',
    stock: 18,
  },
];

export default function Colors() {
  const [expand, setExpand] = useState<boolean>(false);
  return (
    <>
      <ExpandFilter
        background="#eda415"
        label="Colors"
        expand={expand}
        setExpand={setExpand}
      />
      {expand ? '' : <hr />}
      {expand && (
        <ColorWrapper>
          <CategoriesTitle label="Colors" />
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
