import { styled } from 'styled-components';
import exchange from '../../assets/exchange.svg';
import { useTranslation } from 'react-i18next';
import ServiceItem from './ServiceItem';
import back from '../../assets/return.svg';
import Poster from './Poster';

export default function TradeIn() {
  const { t } = useTranslation();

  const stepsList = [
    t('services.tradeIn.steps.bring'),
    t('services.tradeIn.steps.returnedDevice'),
    t('services.tradeIn.steps.findPhone'),
    t('services.tradeIn.steps.makeSure'),
  ];
  return (
    <TradeInWrapper>
      <Poster
        title={t('services.tradeIn.poster.title')}
        text={t('services.tradeIn.poster.descr')}
        img={exchange}
      />
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
