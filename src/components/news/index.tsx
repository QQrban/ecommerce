import { styled } from 'styled-components';

export default function News() {
  return (
    <NewsWrapper>
      <div>newZ</div>
    </NewsWrapper>
  );
}

const NewsWrapper = styled.div`
  padding: 20px 60px;
  @media (max-width: 631px) {
    padding: 20px;
  }
`;
