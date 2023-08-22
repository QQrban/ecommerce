import { styled } from 'styled-components';
import { BiSolidRightArrow } from 'react-icons/bi';

type Props = {
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
  background: string;
};

export default function ExpandFilter({
  expand,
  setExpand,
  label,
  background,
}: Props) {
  return (
    <Expand $background={background} onClick={() => setExpand(!expand)}>
      <Arrow $expand={expand} color="white" />
      <StyledLabel>{label}</StyledLabel>
    </Expand>
  );
}

type ExpandProps = {
  $background: string;
};

const Expand = styled.div<ExpandProps>`
  background: ${({ $background }) => $background};
  padding: 6px;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

const StyledLabel = styled.div`
  color: white;
  font-weight: 500;
`;

type ArrowProps = {
  $expand: boolean;
};

const Arrow = styled(BiSolidRightArrow)<ArrowProps>`
  transform: ${({ $expand }) => ($expand ? 'rotate(90deg)' : 'rotate(0)')};
  transition: transform 0.3s ease-in-out;
`;
