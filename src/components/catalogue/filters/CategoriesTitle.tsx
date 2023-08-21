import { styled } from 'styled-components';

type Props = {
  label: string;
};

export default function CategoriesTitle({ label }: Props) {
  return (
    <Title>
      <TitleLabel>{label}</TitleLabel>
      <StyledButton>Reset</StyledButton>
    </Title>
  );
}

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleLabel = styled.div`
  color: #003f62;
  font-weight: 600;
`;

const StyledButton = styled.div`
  color: #595959;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
