import { styled } from 'styled-components';

interface Props {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BurgerButton({ openMenu, setOpenMenu }: Props) {
  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <StyledBurger $openmenu={openMenu} onClick={handleClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

type StyledBurgerProps = {
  $openmenu: boolean;
};

const StyledBurger = styled.button<StyledBurgerProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 699;
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background: #607b96;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    &:first-child {
      transform: ${({ $openmenu }) =>
        $openmenu ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ $openmenu }) => ($openmenu ? '0' : '1')};
    }

    &:nth-child(3) {
      transform: ${({ $openmenu }) =>
        $openmenu ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
