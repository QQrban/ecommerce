import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import benefits from '../../assets/benefits.svg';
import order from '../../assets/order.svg';
import warranty from '../../assets/warranty.svg';
import Poster from './Poster';
import ServiceItem from './ServiceItem';

export default function Protection() {
  const { t } = useTranslation();

  const benefitList = [
    t('services.protection.order.purchase'),
    t('services.protection.order.inTheCart'),
    t('services.protection.order.pay'),
    t('services.protection.order.completed'),
    t('services.protection.order.use'),
  ];

  const orderList = [
    t('services.protection.order.purchase'),
    t('services.protection.order.inTheCart'),
    t('services.protection.order.pay'),
    t('services.protection.order.completed'),
    t('services.protection.order.use'),
  ];

  return (
    <ProtectionWrapper>
      <Poster
        title={t('services.protection.poster.title')}
        text={t('services.protection.poster.descr')}
        img={warranty}
      />
      <ServiceItem
        title={t('services.protection.benefits.title')}
        benefits={benefitList}
        img={benefits}
      />
      <ServiceItem
        title={t('services.protection.order.title')}
        benefits={orderList}
        img={order}
      />
    </ProtectionWrapper>
  );
}

const ProtectionWrapper = styled.section`
  flex: 1;
`;
