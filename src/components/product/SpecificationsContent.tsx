import { styled } from 'styled-components';
import { AiOutlineLink } from 'react-icons/ai';

const specs = [
  {
    title: 'Manufacturer',
    value: 'Apple',
  },
  {
    title: 'Type',
    value: 'In-ear',
  },
  {
    title: 'Cordless headphones',
    value: 'Yes',
  },
  {
    title: 'Headphone Connection',
    value: 'Bluetooth',
  },
];

const features = [
  {
    title: 'Bluetooth',
    value: 'Yes',
  },
  {
    title: 'Microphone ',
    value: 'Yes',
  },
  {
    title: 'Noise Cancelling',
    value: 'No',
  },
  {
    title: 'Weight (g)',
    value: '40',
  },
  {
    title: 'Battery Life',
    value: '24h',
  },
];

export default function SpecificationsContent() {
  return (
    <SpecsWrapper>
      <SpecSection>
        <SpecHeading>General Information</SpecHeading>
        {specs.map((spec) => (
          <SpecInfoItem key={spec.title}>
            <SpecTitle>{spec.title}</SpecTitle>
            <span>{spec.value}</span>
          </SpecInfoItem>
        ))}
      </SpecSection>
      <SpecSection>
        <SpecHeading>Other Features</SpecHeading>
        {features.map((feature) => (
          <SpecInfoItem key={feature.title}>
            <SpecTitle>{feature.title}</SpecTitle>
            <span>{feature.value}</span>
          </SpecInfoItem>
        ))}
      </SpecSection>
      <SpecSection>
        <SpecHeading>Links</SpecHeading>
        <SpecInfoItem>
          <StyledLink target="_blank" href="https://www.apple.com/airpods/">
            Manufacturer's information
            <AiOutlineLink size={25} />
          </StyledLink>
        </SpecInfoItem>
      </SpecSection>
    </SpecsWrapper>
  );
}

const SpecsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1260px) {
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
  }
`;

const SpecSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 360px;
  @media (max-width: 420px) {
    width: 300px;
  }
`;

const SpecHeading = styled.div`
  font-size: 20px;
  color: #1b5a7d;
`;

const SpecTitle = styled.span`
  color: #646b7d;
`;

const SpecInfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d6d8e1;
  padding-bottom: 4px;
`;

const StyledLink = styled.a`
  color: #646b7d;
  &:hover {
    color: #444a58;
  }
`;
