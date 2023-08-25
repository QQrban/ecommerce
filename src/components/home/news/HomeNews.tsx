import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import samsung from '../../../assets/samsung.webp';
import xiaomi from '../../../assets/xiaomi.png';
import { StyledTitle } from '../../../shared/styled/styled';
import NewsItem from '../../shared/NewsItem';

export default function News() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <NewsWrapper>
      <NewsHeader>
        <StyledTitle>{t('home.news.title')}</StyledTitle>
        <HeaderButton onClick={() => navigate('/news')}>
          {t('home.news.button')}
        </HeaderButton>
      </NewsHeader>
      <NewsBody>
        <NewsItem
          img={samsung}
          date="19.08.2023"
          title={t('news.samsung.title')}
          text={t('news.samsung.text')}
        />
        <NewsItem
          img={xiaomi}
          date="22.08.2023"
          title={t('news.xiaomi.title')}
          text={t('news.xiaomi.text')}
        />
      </NewsBody>
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

const NewsBody = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 35px;
  @media (max-width: 1294px) {
    flex-direction: column;
  }
`;

const HeaderButton = styled.button`
  color: #1b5a7d;
  font-size: 20px;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;
