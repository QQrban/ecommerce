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
      <ExpandWrapper>
        <ExpandFilter
          background="#003f62"
          label={t('filter.price.title')}
          expand={expand}
          setExpand={setExpand}
        />
      </ExpandWrapper>
      {expand && (
        <PriceWrapper>
          <CategoriesTitle label={t('filter.price.title')} />
          <PriceBody>
            <StyledInput placeholder="1" min={1} max={9999} type="number" />
            <BsDashLg />
            <StyledInput placeholder="9999" min={1} max={9999} type="number" />
          </PriceBody>
        </PriceWrapper>
      )}
    </>
  );
}

const ExpandWrapper = styled.div`
  margin-top: 18px;
`;

const PriceWrapper = styled.div`
  margin-top: 18px;
`;

const PriceBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  @media (max-width: 1000px) {
    justify-content: flex-start;
    gap: 10px;
  }
`;

const StyledInput = styled.input`
  width: 140px;
  height: 40px;
  padding: 10px;
  border-radius: 12px;
  background: #b3d4e5;
  border: none;
`;
