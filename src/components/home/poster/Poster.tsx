import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import poster from '../../../assets/poster.png';

export default function Poster() {
  const { t } = useTranslation();

  return (
    <PosterWrapper>
      <PosterText>
        <PosterTitle>{t('poster.title')}</PosterTitle>
        <PosterDescription>{t('poster.description')}</PosterDescription>
        <PosterButton>{t('poster.button')}</PosterButton>
      </PosterText>
    </PosterWrapper>
  );
}

const PosterWrapper = styled.div`
  margin-top: 51px;
  height: 417px;
  display: flex;
  border-radius: 20px;
  align-items: center;
  justify-content: flex-end;
  background: url(${poster}) no-repeat center;
  @media (max-width: 1147px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
      url(${poster});
  }
  @media (max-width: 385px) {
    text-align: center;
  }
`;

const PosterTitle = styled.h3`
  color: #2e8fc5;
  font-size: 35px;
  max-width: 400px;
  font-weight: 700;
`;

const PosterText = styled.div`
  position: relative;
  padding: 0 20px;
`;

const PosterDescription = styled.p`
  color: #fff;
  margin-top: 15px;
  font-size: 16px;
  max-width: 400px;
`;

const PosterButton = styled.button`
  background: #eda415;
  padding: 12px 32px;
  border-radius: 20px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    box-shadow: 1px 1px 4px rgba(255, 255, 255, 0.35);
  }
`;
