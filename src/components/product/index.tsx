import { useState } from 'react';
import { AiFillStar, AiOutlineCheck, AiOutlineStar } from 'react-icons/ai';
import { TfiFaceSad } from 'react-icons/tfi';
import { styled } from 'styled-components';
import pods from '../../assets/pods.png';
import DescriptionContent from './DescriptionContent';
import SpecificationsContent from './SpecificationsContent';

export default function SelectedProduct() {
  const [rating, setRating] = useState<number>(3);
  const [selectedPage, setSelectedPage] = useState<string>('descr');

  return (
    <ProdWrapper>
      <ProdContainer>
        <div>
          <ProductImgContainer>
            <img src={pods} alt="product" />
          </ProductImgContainer>
        </div>
        <ProdInfo>
          <ProdTitle>Apple AirPods 2 - True-Wireless Earbuds</ProdTitle>
          <ProdPrice>105 $</ProdPrice>
          <div>
            {[...Array(5)].map((_, i) =>
              i < rating ? (
                <StyledFilled key={i} onClick={() => setRating(i + 1)} />
              ) : (
                <StyledOutlined key={i} onClick={() => setRating(i + 1)} />
              )
            )}
            {'(5)'}
          </div>
          <ProdAvailability>
            Availability:{' '}
            <StockStatus>
              <AiOutlineCheck size={27} /> in stock
            </StockStatus>
          </ProdAvailability>
          <ProdCode>
            Product code: <ProdNumber>dV53Wj</ProdNumber>
          </ProdCode>
          <ProdDescription>
            <DescriptionTitle>More enchanting than before.</DescriptionTitle>
            <div>
              Now with more talk time and voice-activated Siri access — AirPods
              deliver an unparalleled wireless headphone experience. Simply take
              them out and they’re ready to use with all your devices. Put them
              in your ears and they connect immediately, immersing you in rich,
              high-quality sound. Just like magic.
            </div>
          </ProdDescription>
          <StyledButton>Add to Cart</StyledButton>
        </ProdInfo>
      </ProdContainer>
      <ProdSpecs>
        <ProdListContainer>
          <ProdListLink
            onClick={() => setSelectedPage('descr')}
            $active={selectedPage === 'descr'}
          >
            Description
          </ProdListLink>
          <ProdListLink
            onClick={() => setSelectedPage('specs')}
            $active={selectedPage === 'specs'}
          >
            Specifications
          </ProdListLink>
          <ProdListLink
            onClick={() => setSelectedPage('reviews')}
            $active={selectedPage === 'reviews'}
          >
            Reviews
          </ProdListLink>
        </ProdListContainer>
        <SelectedContainer>
          <SelectedPage>
            {' '}
            {selectedPage === 'descr' && <DescriptionContent />}
            {selectedPage === 'specs' && <SpecificationsContent />}
            {selectedPage === 'reviews' && (
              <div>
                <NoReviewsTitle>
                  There are currently no reviews. <TfiFaceSad />
                </NoReviewsTitle>
                <NoReviewsContent>
                  After making a purchase, you have the opportunity to
                  contribute and be the first to leave a review for the product.
                </NoReviewsContent>
              </div>
            )}
          </SelectedPage>
        </SelectedContainer>
      </ProdSpecs>
    </ProdWrapper>
  );
}

const ProdWrapper = styled.div``;

const ProdContainer = styled.div`
  display: flex;
  padding: 60px 60px 20px;
  max-width: 1360px;
  margin: 0 auto;
  gap: 60px;
  @media (max-width: 1195px) {
    padding: 20px;
  }
  @media (max-width: 1154px) {
    max-width: 1050px;
    gap: 25px;
    align-items: center;
  }
  @media (max-width: 915px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    max-width: 530px;
  }
`;

const ProductImgContainer = styled.div`
  border-radius: 20px;
  border: 1px solid #acacac;
  padding: 40px;
  max-width: 500px;
  min-width: 500px;
  @media (max-width: 915px) {
    min-width: auto;
    max-width: 400px;
  }
`;

const ProdInfo = styled.div`
  max-width: 700px;
`;

const ProdTitle = styled.div`
  color: #003f62;
  font-size: 29px;
  font-weight: 500;
`;

const ProdPrice = styled.div`
  color: #4a4a4a;
  font-size: 29px;
  font-weight: 600;
  margin-top: 11px;
`;

const ProdAvailability = styled.div`
  margin-top: 11px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const StockStatus = styled.span`
  color: #30bd57;
  font-size: 18px;
  font-weight: 500;
`;

const StyledFilled = styled(AiFillStar)`
  font-size: 24px;
  margin-top: 11px;
  color: #d4a80a;
  cursor: pointer;
`;

const StyledOutlined = styled(AiOutlineStar)`
  font-size: 24px;
  margin-top: 11px;
  color: #d4a80a;
  cursor: pointer;
`;

const ProdCode = styled.div`
  margin-top: 11px;
  color: #646b7d9b;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 1px solid #acacac;
  padding-bottom: 22px;
`;

const ProdDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-top: 11px;
`;

const StyledButton = styled.button`
  margin-top: 42px;
  border-radius: 20px;
  padding: 18px 32px;
  background: #eda415;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 356px) {
    padding: 10px 20px;
  }
  &:hover {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  }
`;

const DescriptionTitle = styled.div`
  color: #444;
  font-weight: 600;
`;

const ProdNumber = styled.span`
  color: #444444;
`;

const ProdSpecs = styled.div`
  margin-top: 45px;
  @media (max-width: 1050px) {
    margin-top: 22px;
  }
`;

const ProdListContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 60px;
  color: #1b5a7d;
  font-size: 20px;
  @media (max-width: 461px) {
    gap: 40px;
  }
  @media (max-width: 431px) {
    font-size: 16px;
  }
  @media (max-width: 360px) {
    gap: 25px;
  }
`;

interface ProdListLinkProps {
  $active: boolean;
}

const ProdListLink = styled.li<ProdListLinkProps>`
  cursor: pointer;
  font-weight: 500;
  border-bottom: ${(props) => (props.$active ? '4px solid #eda415' : '')};
`;

const SelectedContainer = styled.div`
  background: #f4f4f4;
`;

const SelectedPage = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 20px 60px;
  @media (max-width: 1195px) {
    padding: 20px;
  }
`;

const NoReviewsTitle = styled.h5`
  color: #1b5a7d;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const NoReviewsContent = styled.div`
  margin-top: 15px;
`;
