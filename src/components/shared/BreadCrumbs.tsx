import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((p) => p);
  const { t } = useTranslation();

  const getBreadCrumb = (segment: string): string | undefined => {
    const getLabel: { [key: string]: string } = {
      catalogue: t('navigation.catalogue'),
      services: t('navigation.services'),
      news: t('navigation.news'),
      protection: t('shared.protection'),
      tradein: t('shared.tradeIn'),
      delivery: t('shared.delivery'),
      drivein: t('shared.driveIn'),
    };

    return getLabel[segment];
  };

  return (
    <BreadcrumbsWrapper>
      <Link to="/">{t('navigation.home')}</Link>
      {paths.map((segment, index) => {
        const url = `/${paths.slice(0, index + 1).join('/')}`;
        return (
          <React.Fragment key={index}>
            <div>{' > '}</div>
            <Link to={url}>{getBreadCrumb(segment)}</Link>
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
