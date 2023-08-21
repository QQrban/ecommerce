import { useTranslation } from 'react-i18next';
import { BiSolidCrown } from 'react-icons/bi';
import { BsFillBoxFill, BsShieldFillCheck } from 'react-icons/bs';
import { styled } from 'styled-components';

export default function Benefits() {
  const { t } = useTranslation();

  return (
    <BenefitsContainer>
      <BenefitWrapper>
        <Benefit>
          <BiSolidCrown style={{ flexShrink: 0 }} color="#EDA415" size={60} />
          <div>
            <BenefitTitle>{t('benefits.quality.title')}</BenefitTitle>
            <BenefitDescription>
              {t('benefits.quality.description')}
            </BenefitDescription>
          </div>
        </Benefit>
      </BenefitWrapper>
      <BenefitWrapper>
        <Benefit>
          <BsFillBoxFill style={{ flexShrink: 0 }} color="#EDA415" size={60} />
          <div>
            <BenefitTitle>{t('benefits.shipment.title')}</BenefitTitle>
            <BenefitDescription>
              {t('benefits.shipment.description')}
            </BenefitDescription>
          </div>
        </Benefit>
      </BenefitWrapper>
      <BenefitWrapper>
        <Benefit>
          <BsShieldFillCheck
            style={{ flexShrink: 0 }}
            color="#EDA415"
            size={60}
          />
          <div>
            <BenefitTitle>{t('benefits.warranty.title')}</BenefitTitle>
            <BenefitDescription>
              {t('benefits.warranty.description')}
            </BenefitDescription>
          </div>
        </Benefit>
      </BenefitWrapper>
    </BenefitsContainer>
  );
}

const BenefitsContainer = styled.div`
  margin-top: 60px;
  border-radius: 20px;
  display: flex;
  background: #e2f4ff;
  justify-content: space-between;
  padding: 40px;
  gap: 20px;
  @media (max-width: 1090px) {
    flex-direction: column;
    align-items: center;
    background: inherit;
    padding: 15px;
    margin-top: 40px;
  }
`;

const BenefitWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1090px) {
    background: #e2f4ff;
    border-radius: 20px;
    width: 100%;
    padding: 20px 40px;
  }
`;

const Benefit = styled.div`
  display: flex;
  align-items: center;
  gap: 31px;
  @media (max-width: 1249px) {
    gap: 20px;
  }
  @media (max-width: 1090px) {
    width: 450px;
    padding-left: 40px;
  }
  @media (max-width: 532px) {
    padding-left: 10px;
  }
  @media (max-width: 498px) {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
`;

const BenefitTitle = styled.div`
  color: #003f62;
  font-size: 22px;
  font-weight: 600;
  @media (max-width: 578px) {
    font-size: 19px;
  }
`;

const BenefitDescription = styled.div`
  color: #003f62;
  font-size: 18px;
  @media (max-width: 578px) {
    font-size: 16px;
  }
`;
