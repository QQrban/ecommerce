import { useState } from 'react';
import ExpandFilter from './ExpandFilter';
import { styled } from 'styled-components';
import { BsDashLg } from 'react-icons/bs';

export default function Price() {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <>
      <ExpandFilter
        background="#003f62"
        label="Price"
        expand={expand}
        setExpand={setExpand}
      />
      {expand ? '' : <hr />}
      {expand && (
        <PriceContainer>
          <StyledInput min={1} max={9999} type="number" />
          <BsDashLg />
          <StyledInput min={1} max={9999} type="number" />
        </PriceContainer>
      )}
    </>
  );
}

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  width: 140px;
  height: 40px;
  padding: 10px;
  border-radius: 12px;
  background: #b3d4e5;
  border: none;
`;
