import { styled } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { GoLocation } from 'react-icons/go';
import { FiTruck } from 'react-icons/fi';
import {
  CgProfile,
  CgShoppingCart,
  CgSearch,
  CgChevronDown,
} from 'react-icons/cg';
import logo from '../../assets/logo.svg';
import { useState } from 'react';
import useMediaQuery from '../../shared/hooks/useMediaQuery';
import BurgerButton from './BurgerButton';
import MobileMenu from './MobileMenu';
import ChangeLanguage from './ChangeLanguage';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const { t } = useTranslation();
  const matchesMenu = useMediaQuery('(min-width: 932px)');
  const matchesProfile = useMediaQuery('(min-width: 704px)');

  return (
    <StyledHeader>
      <HelpSection>
        <PhoneLang>
          <LanguageWrapper>
            <ChangeLanguage />
          </LanguageWrapper>
          {t('header.helpSection.needHelp')}:{' '}
          <Phone href="tel:+37255511221">(+372) 555-11-221</Phone>
        </PhoneLang>
        <HelpButtons>
          <HelpButton>
            <GoLocation size={24} />
            <span>{t('header.helpSection.ourStore')}</span>
          </HelpButton>
          <HelpButton>
            <FiTruck size={24} />
            <span>{t('header.helpSection.track')}</span>
          </HelpButton>
        </HelpButtons>
      </HelpSection>
      <MiddleSection>
        <LogoSearchContainer>
          <Logo>
            <LogoIcon src={logo} alt="logo" />
            <ShopName>ReactShop</ShopName>
          </Logo>
          <SearchContainer>
            <SearchIcon size={30} color="#292d32" />
            <StyledSearch type="text" />
            <SearchButton>{t('shared.search')}</SearchButton>
          </SearchContainer>
        </LogoSearchContainer>
        <ProfileButtons>
          <ProfileButton>
            {matchesProfile ? <CgProfile size={24} /> : <CgProfile size={32} />}
            {matchesProfile && <div>{t('header.MiddleSection.signIn')}</div>}
          </ProfileButton>
          <ProfileButton>
            {matchesProfile ? (
              <CgShoppingCart size={24} />
            ) : (
              <CgShoppingCart size={32} />
            )}
            {matchesProfile && <div>{t('header.MiddleSection.cart')}</div>}
          </ProfileButton>
        </ProfileButtons>
      </MiddleSection>
      {matchesMenu ? (
        <Navigation>
          <TabsStyled>
            <BrowseButton>
              {t('navigation.browse')} <CgChevronDown size={24} />
            </BrowseButton>
            <NavigationLinks>
              <a href="/">{t('navigation.home')}</a>
              <a href="/">{t('navigation.catalogue')}</a>
              <a href="/">{t('navigation.services')}</a>
              <a href="/">{t('navigation.news')}</a>
            </NavigationLinks>
          </TabsStyled>
          <ReturnInfo>{t('navigation.return')}</ReturnInfo>
        </Navigation>
      ) : (
        <Navigation>
          <BurgerButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
          {openMenu && (
            <MobileMenu setOpenMenu={setOpenMenu} openMenu={openMenu} />
          )}
        </Navigation>
      )}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
`;

const HelpSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 60px;
  background: #f4f4f4;
  @media (max-width: 931px) {
    order: 3;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;
  }
`;

const LanguageWrapper = styled.div`
  margin-right: 15px;
  @media (max-width: 460px) {
    display: block;
    margin: 0 0 10px 0;
  }
`;

const PhoneLang = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
`;

const Phone = styled.a`
  &:hover {
    color: #113c53;
    text-decoration: underline;
  }
`;

const HelpButtons = styled.div`
  display: flex;
  gap: 36px;
`;

const HelpButton = styled.button`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 14px;
  &:hover {
    color: #113c53;
    text-decoration: underline;
  }
  @media (max-width: 854px) {
    gap: 8px;
  }
`;

const MiddleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  @media (max-width: 931px) {
    order: 2;
  }
  padding: 20px 60px;
  background-color: #003f62;
  @media (max-width: 1195px) {
    padding: 20px 20px;
  }
  @media (max-width: 461px) {
    flex-direction: column;
  }
`;

const LogoSearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 110px;
  @media (max-width: 1195px) {
    gap: 30px;
  }
  @media (max-width: 559px) {
    gap: 0px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const LogoIcon = styled.img`
  min-width: 56px;
  @media (max-width: 559px) {
    display: none;
  }
`;

const ShopName = styled.div`
  color: white;
  font-size: 34px;
  font-weight: 700;
  @media (max-width: 890px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  border-radius: 20px;
`;

const SearchIcon = styled(CgSearch)`
  position: absolute;
  left: 10px;
  height: 100%;
  opacity: 0.5;
`;

const StyledSearch = styled.input`
  height: 56px;
  width: 438px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  font-family: inherit;
  padding: 0 130px 0 50px;
  color: #292d32;
  &:focus {
    outline: none;
  }
  @media (max-width: 1190px) {
    width: 300px;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 0;
  height: 100%;
  padding: 10px 30px;
  border-radius: 20px;
  background: #eda415;
  color: white;
  font-size: 17px;
`;

const ProfileButtons = styled.div`
  display: flex;
  gap: 36px;
`;

const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  gap: 20px;
  color: white;
  font-size: 14px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #f4f4f4;
  height: 71px;
  position: relative;
`;

const TabsStyled = styled.div`
  display: flex;
  gap: 98px;
  @media (max-width: 1174px) {
    gap: 30px;
  }
`;

const BrowseButton = styled.button`
  display: flex;
  align-items: center;
  gap: 14px;
  background: #eda415;
  margin-left: 60px;
  font-size: 16px;
  padding: 0 14px;
  color: white;
  @media (max-width: 1195px) {
    margin-left: 30px;
  }
`;

const NavigationLinks = styled.div`
  display: flex;
  font-weight: 500;
  gap: 26px;
  align-self: center;
  a {
    &:hover {
      color: #1b5a7d;
      text-decoration: underline;
    }
  }
`;

const ReturnInfo = styled.span`
  color: #003f62;
  font-size: 16px;
  font-weight: 700;
  align-self: center;
  padding-right: 60px;
  @media (max-width: 1195px) {
    padding-right: 20px;
  }
`;
