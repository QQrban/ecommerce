import { styled } from 'styled-components';

type Props = {
  id: string;
  label: string;
  stock: number;
};

export default function FilterItem({ id, label, stock }: Props) {
  return (
    <InputItem>
      <InputContainer>
        <StyledInput type="checkbox" id={id} />
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
      </InputContainer>
      <div>{stock}</div>
    </InputItem>
  );
}

const InputItem = styled.div`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 18px;
  }
  &:last-child {
    border-bottom: 1px solid #bdbdbd;
    padding-bottom: 18px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledInput = styled.input`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const StyledLabel = styled.label`
  color: #222;
`;
