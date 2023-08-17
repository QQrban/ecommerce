import { StyledTitle } from '../../../shared/styled/styled';
import { styled } from 'styled-components';

export default function Popular() {
  return (
    <PopularWrapper style={{ marginTop: '70px', padding: '5px 10px' }}>
      <StyledTitle>Popular Goods</StyledTitle>
      <Pills>
        <Pill>Cameras</Pill>
        <Pill>Laptops</Pill>
        <Pill>Tablets</Pill>
      </Pills>
    </PopularWrapper>
  );
}

const PopularWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Pills = styled.div`
  display: flex;
  gap: 13px;
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
`;
