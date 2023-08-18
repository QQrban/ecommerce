import { styled } from 'styled-components';
import { StyledTitle } from '../../../shared/styled/styled';
import { useTranslation } from 'react-i18next';

export default function News() {
  const { t } = useTranslation();

  return (
    <NewsWrapper>
      <NewsHeader>
        <StyledTitle>{t('home.news.title')}</StyledTitle>
        <HeaderButton>{t('home.news.button')}</HeaderButton>
      </NewsHeader>
    </NewsWrapper>
  );
}

const NewsWrapper = styled.div`
  margin-top: 70px;
`;

const NewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderButton = styled.button`
  color: #1b5a7d;
  font-size: 20px;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;
