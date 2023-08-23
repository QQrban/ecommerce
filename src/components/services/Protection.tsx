import { styled } from 'styled-components';
import warranty from '../../assets/warranty.svg';
import benefits from '../../assets/benefits.svg';
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
    </ProtectionWrapper>
  );
}

const ProtectionWrapper = styled.section`
  flex: 1;
  margin: 0 auto;
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
`;

const PosterBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
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
  text-align: left;
  color: #fff;
`;

const ImgContainer = styled.div`
  min-width: 250px;
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
`;

const ProtectionItem = styled.div`
  border: 1px solid #b6b6b6;
  margin-top: 30px;
  border-radius: 12px;
  display: flex;
  overflow: hidden;
`;

const ProtectionText = styled.div`
  flex: 1;
`;

const ProtectionTitle = styled.h3`
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  padding: 20px;
  border-bottom: 1px solid #b6b6b6;
`;

const ProtectionList = styled.ul`
  padding: 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: disc;
`;

const BenefitsImg = styled.div`
  background: #e2f4ff;
  min-width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
