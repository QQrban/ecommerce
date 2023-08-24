import { styled } from 'styled-components';

interface ServiceItemProps {
  title: string;
  benefits: string[];
  img: string;
}

export default function ServiceItem({
  title,
  benefits,
  img,
}: ServiceItemProps) {
  return (
    <ProtectionItem>
      <ProtectionText>
        <ProtectionTitle>{title}</ProtectionTitle>
        <ProtectionList>
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ProtectionList>
      </ProtectionText>
      <BenefitsImg>
        <img src={img} alt="benefits" />
      </BenefitsImg>
    </ProtectionItem>
  );
}

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
