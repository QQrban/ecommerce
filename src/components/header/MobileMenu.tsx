import Offcanvas from 'react-bootstrap/Offcanvas';
import { styled } from 'styled-components';
import { useTranslation } from 'react-i18next';

type Props = {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileMenu({ openMenu, setOpenMenu }: Props) {
  const handleClose = () => setOpenMenu(false);
  const { t } = useTranslation();

  return (
    <>
      <StyledOffcanvas show={openMenu} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <CanvasBody>
          <NavigationLinks>
            <a href="/">{t('navigation.home')}</a>
            <a href="/">{t('navigation.catalogue')}</a>
            <a href="/">{t('navigation.services')}</a>
            <a href="/">{t('navigation.news')}</a>
          </NavigationLinks>
        </CanvasBody>
      </StyledOffcanvas>
    </>
  );
}

const StyledOffcanvas = styled(Offcanvas)`
  width: 270px !important;
  background: #f4f4f4;
`;

const CanvasBody = styled(Offcanvas.Body)`
  padding-top: 50px;
  text-align: center;
`;

const NavigationLinks = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 22px;
`;
