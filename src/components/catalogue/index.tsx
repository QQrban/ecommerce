import { styled } from 'styled-components';
import Breadcrumbs from '../shared/BreadCrumbs';
import Filters from './filters/Filters';
import ProductsList from './ProductsList';

export default function Catalogue() {
  return (
    <CatalogueContainer>
      <Breadcrumbs />
      <CatalogueWrapper>
        <FiltersWrapper>
          <Filters />
        </FiltersWrapper>
        <ProductsList />
      </CatalogueWrapper>
    </CatalogueContainer>
  );
}

const CatalogueContainer = styled.div`
  padding: 20px 60px;
  @media (max-width: 1195px) {
    padding: 20px;
  }
`;

const CatalogueWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  @media (max-width: 968px) {
    align-items: center;
  }
`;

const FiltersWrapper = styled.div`
  width: 320px;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
