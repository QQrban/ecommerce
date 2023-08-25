import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import delivery from '../../assets/delivery.svg';
import transport from '../../assets/transport.svg';
import Poster from './Poster';
import ServiceItem from './ServiceItem';
import wrench from '../../assets/wrench.svg';

export default function Delivery() {
  const { t } = useTranslation();

  const transportList = [
    t('services.delivery.transport.oneDay'),
    t('services.delivery.transport.cost'),
    t('services.delivery.transport.possibility'),
    t('services.delivery.transport.deliveryTime'),
    t('services.delivery.transport.whenOrdering'),
  ];

  const installationList = [
    t('services.delivery.installation.easy'),
    t('services.delivery.installation.special'),
    t('services.delivery.installation.replacing'),
    t('services.delivery.installation.installation'),
    t('services.delivery.installation.price'),
  ];

  return (
    <DeliveryWrapper>
      <Poster
        title={t('services.delivery.poster.title')}
        text={t('services.delivery.poster.descr')}
        img={delivery}
      />
      <ServiceItem
        title={t('services.delivery.transport.title')}
        benefits={transportList}
        img={transport}
      />
      <ServiceItem
        title={t('services.delivery.installation.title')}
        benefits={installationList}
        img={wrench}
      />
    </DeliveryWrapper>
  );
}

const DeliveryWrapper = styled.section`
  flex: 1;
`;
