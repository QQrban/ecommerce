import Offcanvas from 'react-bootstrap/Offcanvas';
import { styled } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
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
            <Link to="/">{t('navigation.home')}</Link>
            <Link to="/catalogue">{t('navigation.catalogue')}</Link>
            <Link to="/services/protection">{t('navigation.services')}</Link>
            <Link to="/news">{t('navigation.news')}</Link>
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
