import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';

type Props = {
  img: string;
  title: string;
  text: string;
  date: string;
};

export default function NewsItem({ img, title, text, date }: Props) {
  const { t } = useTranslation();

  return (
    <NewsWrapper>
      <ImgContainer>
        <img src={img} alt="news" />
      </ImgContainer>
      <NewsInfo>
        <NewsDate>{date}</NewsDate>
        <NewsTitle>{title}</NewsTitle>
        <NewsText>{text}</NewsText>
        <NewsButton>{t('news.button')}</NewsButton>
      </NewsInfo>
    </NewsWrapper>
  );
}

const NewsWrapper = styled.div`
  display: flex;
  border-radius: 20px;
  border: 1px solid #c8c8c8;
  padding: 20px;
  gap: 50px;
  flex: 1;
  @media (max-width: 679px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 30px;
  }
`;

const ImgContainer = styled.div`
  min-width: 300px;
  img {
    border-radius: 20px;
  }
  @media (max-width: 679px) {
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
