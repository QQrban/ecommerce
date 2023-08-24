import { styled } from 'styled-components';
import exchange from '../../assets/exchange.svg';
import { useTranslation } from 'react-i18next';
import ServiceItem from './ServiceItem';
import back from '../../assets/return.svg';

export default function TradeIn() {
  const { t } = useTranslation();

  const stepsList = [
    t('services.protection.order.purchase'),
    t('services.protection.order.inTheCart'),
    t('services.protection.order.pay'),
    t('services.protection.order.completed'),
    t('services.protection.order.use'),
  ];
  return (
    <TradeInWrapper>
      <BigPoster>
        <PosterBody>
          <PosterTitle>{t('services.tradeIn.poster.title')}</PosterTitle>
          <PosterText>{t('services.tradeIn.poster.descr')}</PosterText>
        </PosterBody>
        <ImgContainer>
          <img src={exchange} alt="warranty" />
        </ImgContainer>
      </BigPoster>
      <ServiceItem
        title={t('services.tradeIn.steps.title')}
        benefits={stepsList}
        img={back}
      />
    </TradeInWrapper>
  );
}

const TradeInWrapper = styled.div`
  flex: 1;
`;

const BigPoster = styled.div`
  padding: 30px;
  background: radial-gradient(
    26.18% 141.29% at 32.19% 50%,
    #005481 0%,
    #003f62 100%
  );
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const PosterBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 1000px) {
    order: 2;
    text-align: center;
  }
`;

const PosterTitle = styled.h4`
  color: #bac3d6;
  font-size: 21px;
  line-height: 24px;
`;

const PosterText = styled.p`
  font-size: 40px;
  max-width: 900px;
  line-height: 43px;
  letter-spacing: 0em;
  color: #fff;
  @media (max-width: 1000px) {
    font-size: 30px;
  }
`;

const ImgContainer = styled.div`
  width: 235px;
  height: 235px;
  display: flex;
  border: 18px solid white;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  background: #eda415;
  border-radius: 50%;
  @media (max-width: 1000px) {
    order: 1;
    width: 180px;
    height: 180px;
  }
`;
