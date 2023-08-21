import { useState } from 'react';
import ExpandFilter from './ExpandFilter';
import { styled } from 'styled-components';
import { BsDashLg } from 'react-icons/bs';
import CategoriesTitle from './CategoriesTitle';
import { useTranslation } from 'react-i18next';

export default function Price() {
  const [expand, setExpand] = useState<boolean>(true);
  const { t } = useTranslation();

  return (
    <>
      <ExpandFilter
        background="#003f62"
        label={t('filter.price.title')}
        expand={expand}
        setExpand={setExpand}
      />
      {expand ? '' : <hr />}
      {expand && (
        <div>
          <CategoriesTitle label={t('filter.price.title')} />
          <PriceBody>
            <StyledInput min={1} max={9999} type="number" />
            <BsDashLg />
            <StyledInput min={1} max={9999} type="number" />
          </PriceBody>
        </div>
      )}
    </>
  );
}

const PriceBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
`;

const StyledInput = styled.input`
  width: 140px;
  height: 40px;
  padding: 10px;
  border-radius: 12px;
  background: #b3d4e5;
  border: none;
`;
