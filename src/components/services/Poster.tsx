import { styled } from 'styled-components';

type Props = {
  title: string;
  text: string;
  img: string;
};

export default function Poster({ title, text, img }: Props) {
  return (
    <BigPoster>
      <PosterBody>
        <PosterTitle>{title}</PosterTitle>
        <PosterText>{text}</PosterText>
      </PosterBody>
      <ImgContainer>
        <img src={img} alt="warranty" />
      </ImgContainer>
    </BigPoster>
  );
}

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
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const PosterBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 1000px) {
    order: 2;
    text-align: center;
  }
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
  color: #fff;
  @media (max-width: 1000px) {
    font-size: 30px;
  }
`;

const ImgContainer = styled.div`
  min-width: 250px;
  @media (max-width: 1000px) {
    order: 1;
    min-width: auto;
    width: 180px;
  }
`;
