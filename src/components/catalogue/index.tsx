import { styled } from 'styled-components';
import Breadcrumbs from '../shared/BreadCrumbs';
import Filters from './filters/Filters';

export default function Catalogue() {
  return (
    <div>
      <Breadcrumbs />
      <CatalogueWrapper>
        <FiltersWrapper>
          <Categories>
            <Filters />
          </Categories>
        </FiltersWrapper>
      </CatalogueWrapper>
    </div>
  );
}

const CatalogueWrapper = styled.div`
  margin-top: 60px;
`;

const FiltersWrapper = styled.div`
  width: 314px;
`;

const Categories = styled.div``;
