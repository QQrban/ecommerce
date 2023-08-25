import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import samsung from '../../../assets/samsung.webp';
import xiaomi from '../../../assets/xiaomi.png';
import { StyledTitle } from '../../../shared/styled/styled';

export default function News() {
  const { t } = useTranslation();

  return (
    <NewsWrapper>
      <NewsHeader>
        <StyledTitle>{t('home.news.title')}</StyledTitle>
        <HeaderButton>{t('home.news.button')}</HeaderButton>
      </NewsHeader>
      <NewsBody>
        <NewsItem>
          <ImgContainer>
            <img src={samsung} alt="az" />
          </ImgContainer>
          <NewsInfo>
            <NewsDate>19.08.2023</NewsDate>
            <NewsTitle>{t('news.samsung.title')}</NewsTitle>
            <NewsText>{t('news.samsung.text')}</NewsText>
            <NewsButton>{t('news.button')}</NewsButton>
          </NewsInfo>
        </NewsItem>
        <NewsItem>
          <ImgContainer>
            <img src={xiaomi} alt="az" />
          </ImgContainer>
          <NewsInfo>
            <NewsDate>18.08.2023</NewsDate>
            <NewsTitle>{t('news.xiaomi.title')}</NewsTitle>
            <NewsText>{t('news.xiaomi.text')}</NewsText>
            <NewsButton>{t('news.button')}</NewsButton>
          </NewsInfo>
        </NewsItem>
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

const NewsItem = styled.div`
  display: flex;
  border-radius: 20px;
  border: 1px solid #c8c8c8;
  padding: 20px;
  flex: 1;
  @media (max-width: 617px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
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

const ImgContainer = styled.div`
  min-width: 300px;
  img {
    border-radius: 20px;
  }
  @media (max-width: 617px) {
    width: 270px;
  }
`;

const NewsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NewsDate = styled.div`
  border-radius: 20px;
  border: 1px solid #d4d4d4;
  padding: 5px 18px;
  color: #1b5a7d;
  font-size: 20px;
  font-weight: 500;
  align-self: flex-start;
`;

const NewsTitle = styled.div`
  color: #1b5a7d;
  font-size: 22px;
  font-weight: 500;
  margin-top: 8px;
  line-height: 27px;
`;

const NewsText = styled.div`
  margin-top: 8px;
  color: #003f62;
  font-size: 13px;
  font-weight: 400;
`;

const NewsButton = styled.button`
  margin-top: 15px;
  border-radius: 20px;
  border: 1px solid #b5b5b5;
  padding: 10px 20px;
  color: #1b5a7d;
  font-size: 16px;
  font-weight: 500;
  align-self: flex-end;
  &:hover {
    background: #1b5a7d;
    color: white;
  }
  @media (max-width: 555px) {
    padding: 5px 10px;
  }
`;
