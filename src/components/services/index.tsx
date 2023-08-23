import { styled } from 'styled-components';
import Breadcrumbs from '../shared/BreadCrumbs';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import Protection from './Protection';
import TradeIn from './TradeIn';
import Delivery from './Delivery';
import DriveIn from './DriveIn';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  return (
    <ServicesWrapper>
      <Breadcrumbs />
      <ServicesContainer>
        <ServicesList>
          <ServicesItem to="/services/protection">
            {t('shared.protection')}
          </ServicesItem>
          <ServicesItem to="/services/tradein">
            {t('shared.tradeIn')}
          </ServicesItem>
          <ServicesItem to="/services/delivery">
            {t('shared.delivery')}
          </ServicesItem>
          <ServicesItem to="/services/drivein">
            {t('shared.driveIn')}
          </ServicesItem>
        </ServicesList>
        <Routes>
          <Route path="/" element={<Navigate to="/services/protection" />} />
          <Route path="/protection" element={<Protection />} />
          <Route path="/tradein" element={<TradeIn />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/drivein" element={<DriveIn />} />
        </Routes>
      </ServicesContainer>
    </ServicesWrapper>
  );
}

const ServicesWrapper = styled.div`
  padding: 20px 60px;
  @media (max-width: 631px) {
    padding: 20px;
  }
`;

const ServicesContainer = styled.div`
  display: flex;
  gap: 80px;
  margin-top: 30px;
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const ServicesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media (max-width: 1200px) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 0;
    border-bottom: 1px solid #eda4156b;
  }
  @media (max-width: 515px) {
    gap: 15px;
  }
  @media (max-width: 767px) {
    justify-content: flex-start;
  }
  @media (max-width: 468px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-bottom: none;
  }
`;

const ServicesItem = styled(NavLink)`
  background: #eda415;
  color: white;
  padding: 8px 40px 8px 15px;
  width: 160px;
  position: relative;
  opacity: 0.8;
  @media (max-width: 1200px) {
    z-index: 555;
    margin-bottom: -1px;
    border-bottom: 1px solid #eda415;
  }
  @media (max-width: 767px) {
    padding: 8px 12px;
    width: auto;
  }
  @media (max-width: 468px) {
    text-align: center;
  }
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 20px 0 20px 40px;
    border-color: transparent transparent transparent #eda415;
    right: -40px;
    top: 0;
    @media (max-width: 1200px) {
      content: none;
    }
  }
  &.active {
    opacity: 1;
    background: #003f62;
    @media (max-width: 1200px) {
      border-bottom: 1px solid #003f62;
      margin-bottom: -1px;
    }
    &::after {
      border-color: transparent transparent transparent #003f62;
    }
  }
`;
