import { styled } from 'styled-components';
import warranty from '../../assets/warranty.svg';
import benefits from '../../assets/benefits.svg';
import order from '../../assets/order.svg';
import { useTranslation } from 'react-i18next';

export default function Protection() {
  const { t } = useTranslation();

  return (
    <ProtectionWrapper>
      <BigPoster>
        <PosterBody>
          <PosterTitle>{t('services.protection.poster.title')}</PosterTitle>
          <PosterText>{t('services.protection.poster.descr')}</PosterText>
          <PosterButton>{t('poster.button')}</PosterButton>
        </PosterBody>
        <ImgContainer>
          <img src={warranty} alt="warranty" />
        </ImgContainer>
      </BigPoster>
      <ProtectionItem>
        <ProtectionText>
          <ProtectionTitle>
            {t('services.protection.benefits.title')}
          </ProtectionTitle>
          <ProtectionList>
            <li>{t('services.protection.benefit.optimal')}</li>
            <li>{t('services.protection.benefit.prolonged')}</li>
            <li>{t('services.protection.benefit.benefitFrom')}</li>
            <li>{t('services.protection.benefit.enjoy')}</li>
            <li>{t('services.protection.benefit.noAssessment')}</li>
          </ProtectionList>
        </ProtectionText>
        <BenefitsImg>
          <img src={benefits} alt="benefits" />
        </BenefitsImg>
      </ProtectionItem>
      <OrderProtection>
        <BenefitsImg>
          <img src={order} alt="benefits" />
        </BenefitsImg>
        <ProtectionText>
          <ProtectionTitle>
            {t('services.protection.order.title')}
          </ProtectionTitle>
          <ProtectionList>
            <li>{t('services.protection.order.purchase')}</li>
            <li>{t('services.protection.order.inTheCart')}</li>
            <li>{t('services.protection.order.pay')}</li>
            <li>{t('services.protection.order.completed')}</li>
            <li>{t('services.protection.order.use')}</li>
          </ProtectionList>
        </ProtectionText>
      </OrderProtection>
    </ProtectionWrapper>
  );
}

const ProtectionWrapper = styled.section`
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
  min-width: 250px;
  @media (max-width: 1000px) {
    order: 1;
    min-width: auto;
    width: 180px;
  }
`;

const PosterButton = styled.button`
  background: #eda415;
  padding: 12px 32px;
  border-radius: 20px;
  align-self: flex-start;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    box-shadow: 1px 1px 4px rgba(255, 255, 255, 0.35);
  }
  @media (max-width: 1000px) {
    align-self: center;
  }
`;

const ProtectionItem = styled.div`
  border: 1px solid #b6b6b6;
  margin-top: 30px;
  border-radius: 12px;
  display: flex;
  overflow: hidden;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const OrderProtection = styled.div`
  border: 1px solid #b6b6b6;
  margin-top: 30px;
  border-radius: 12px;
  display: flex;
  overflow: hidden;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const ProtectionText = styled.div`
  flex: 1;
  @media (max-width: 1000px) {
    order: 2;
  }
`;

const ProtectionTitle = styled.h3`
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  padding: 20px;
  border-bottom: 1px solid #b6b6b6;
  @media (max-width: 380px) {
    font-size: 26px;
    text-align: center;
  }
`;

const ProtectionList = styled.ul`
  padding: 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: disc;
  @media (max-width: 380px) {
    font-size: 15px;
  }
`;

const BenefitsImg = styled.div`
  background: #e2f4ff;
  min-width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  @media (max-width: 1000px) {
    order: 1;
  }
  @media (max-width: 400px) {
    min-width: auto;
  }
`;
