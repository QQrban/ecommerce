import { styled } from 'styled-components';
import Breadcrumbs from '../shared/BreadCrumbs';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { getNews } from '../../api/apiService';

interface News {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  img: string;
}

interface TranslatedNews {
  eng: News[];
  est: News[];
  ru: News[];
}

export default function NewsPage() {
  const { t, i18n } = useTranslation();
  const [news, setNews] = useState<TranslatedNews | null>(null);
  const [translatedNews, setTranslatedNews] = useState<News[] | null>(null);

  useEffect(() => {
    getNews()
      .then((data) => {
        setNews(data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const currentLanguage = i18n.language;
    if (news) {
      switch (currentLanguage) {
        case 'en':
          setTranslatedNews(news.eng);
          break;
        case 'ee':
          setTranslatedNews(news.est);
          break;
        case 'ru':
          setTranslatedNews(news.ru);
          break;
      }
    }
  }, [i18n.language, news]);

  return (
    <NewsWrapper>
      <Breadcrumbs />
      <NewsContainer>
        <Title>{t('navigation.news')}</Title>
        {translatedNews ? (
          <div>
            <NewsMain>
              <NewsMainImgWrapper>
                <StyledImg src={translatedNews[0].img} alt="" />
              </NewsMainImgWrapper>
              <NewsMainContent>
                <NewsDate>{translatedNews[0].date}</NewsDate>
                <BigNewsTitle>{translatedNews[0].title}</BigNewsTitle>
                <NewsText>{translatedNews[0].description}</NewsText>
                <StyledButton>{t('news.button')}</StyledButton>
              </NewsMainContent>
            </NewsMain>
            <NewsSmall>
              {translatedNews.slice(1, translatedNews.length).map((news) => (
                <NewsItem key={news.id}>
                  <NewsSmallImgContainer>
                    <StyledImg src={news.img} alt="" />
                  </NewsSmallImgContainer>
                  <SmallNewsTitle>{news.title}</SmallNewsTitle>
                  <NewsText>{news.description}</NewsText>
                  <StyledButton>{t('news.button')}</StyledButton>
                </NewsItem>
              ))}
            </NewsSmall>
          </div>
        ) : (
          'NO DATA'
        )}
      </NewsContainer>
    </NewsWrapper>
  );
}

const NewsWrapper = styled.div`
  padding: 20px 60px;
  @media (max-width: 1195px) {
    padding: 20px;
  }
`;

const NewsContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  @media (max-width: 998px) {
    max-width: 850px;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    max-width: 530px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  margin-top: 18px;
  font-size: 45px;
`;

const NewsMain = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 30px;
  padding: 10px;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: rgb(238, 237, 237);
  }
  @media (max-width: 998px) {
    flex-direction: column;
    gap: 15px;
  }
  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

const NewsMainContent = styled.div`
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
  @media (max-width: 555px) {
    font-size: 14px;
  }
`;

const NewsSmall = styled.div`
  margin-top: 15px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1100px) {
    justify-content: center;
  }
  @media (max-width: 998px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NewsItem = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: rgb(238, 237, 237);
  }
`;

const NewsMainImgWrapper = styled.div`
  min-width: 450px;
  max-width: 650px;
  overflow: hidden;
  border-radius: 20px;
  @media (max-width: 998px) {
    align-self: center;
    max-width: inherit;
  }
  @media (max-width: 510px) {
    @media (max-width: 998px) {
      min-width: inherit;
    }
  }
`;

const NewsSmallImgContainer = styled.div`
  max-height: 220px;
  border-radius: 20px;
  flex-shrink: 0;
  overflow: hidden;
  @media (max-width: 600px) {
    align-self: center;
  }
`;

const BigNewsTitle = styled.div`
  color: #1b5a7d;
  font-weight: 600;
  font-size: 18px;
  max-width: 600px;
  @media (max-width: 998px) {
    max-width: inherit;
    margin-top: 18px;
  }
  @media (max-width: 600px) {
    text-align: center;
  }
  @media (max-width: 439px) {
    font-size: 16px;
  }
`;

const SmallNewsTitle = styled.div`
  color: #1b5a7d;
  font-weight: 600;
  font-size: 16px;
  margin-top: 18px;
  @media (max-width: 882px) {
    margin-top: 10px;
  }
  @media (max-width: 600px) {
    text-align: center;
  }
  @media (max-width: 439px) {
    font-size: 16px;
  }
`;

const NewsText = styled.div`
  margin-top: 18px;
  max-width: 600px;
  font-size: 15px;
  @media (max-width: 1315px) {
    max-width: 500px;
  }
  @media (max-width: 998px) {
    align-self: center;
    max-width: inherit;
  }
  @media (max-width: 882px) {
    margin-top: 10px;
  }
  @media (max-width: 600px) {
    text-align: center;
  }
  @media (max-width: 439px) {
    font-size: 14px;
  }
`;

const StyledImg = styled.img`
  border-radius: 20px;
  min-height: 220px;
`;

const StyledButton = styled.button`
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
