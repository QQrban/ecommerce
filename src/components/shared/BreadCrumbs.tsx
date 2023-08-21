import { capitalize } from 'lodash';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((p) => p);

  return (
    <BreadcrumbsWrapper>
      <Link to="/">Home</Link>
      {paths.map((segment, index) => {
        const url = `/${paths.slice(0, index + 1).join('/')}`;
        return (
          <React.Fragment key={index}>
            <div>{' > '}</div>
            <Link to={url}>{capitalize(segment)}</Link>
          </React.Fragment>
        );
      })}
    </BreadcrumbsWrapper>
  );
};

export default Breadcrumbs;

const BreadcrumbsWrapper = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
`;
