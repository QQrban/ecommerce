import { styled } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FiSend } from 'react-icons/fi';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import logo from '../../assets/logo.svg';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <FooterContainer>
        <SubscribeContainer>
          <div>
            <SubscribeTitle>{t('footer.subscribe.title')}</SubscribeTitle>
            <SubscribeDescr>{t('footer.subscribe.descr')}</SubscribeDescr>
          </div>
          <EmailContainer>
            <StyledInput type="email" placeholder={t('footer.email')} />
            <EmailButton>
              <FiSend size={30} color="white" />
            </EmailButton>
          </EmailContainer>
        </SubscribeContainer>
        <FooterLinks>
          <LogoAddressContainer>
            <Logo>
              <LogoIcon src={logo} alt="logo" />
              <ShopName>ReactShop</ShopName>
            </Logo>
            <Address>Estonia, Tartu, Tartumaa, Kangru 42</Address>
            <SocialMediaLinks>
              <a href="#">
                <AiFillFacebook size={30} />
              </a>
              <a href="#">
                <AiFillInstagram size={30} />
              </a>
              <a href="#">
                <AiFillTwitterCircle size={30} />
              </a>
            </SocialMediaLinks>
          </LogoAddressContainer>
          <NavigationLinks>
            <FooterNavigation>
              <LinksTitle>{t('footer.contact.title')}</LinksTitle>
              <FooterLink href="#">
                {t('footer.contact.customerSupport')}
              </FooterLink>
              <FooterLink href="#">
                {t('footer.contact.corporateCustomers')}
              </FooterLink>
              <FooterLink href="#">{t('footer.contact.stores')}</FooterLink>
              <FooterLink href="#">{t('footer.contact.management')}</FooterLink>
            </FooterNavigation>
            <FooterNavigation>
              <LinksTitle>{t('footer.services.title')}</LinksTitle>
              <FooterLink href="#">{t('shared.protection')}</FooterLink>
              <FooterLink href="#">{t('shared.tradeIn')}</FooterLink>
              <FooterLink href="#">{t('shared.delivery')}</FooterLink>
              <FooterLink href="#">{t('shared.driveIn')}</FooterLink>
            </FooterNavigation>
            <FooterNavigation>
              <LinksTitle>{t('footer.getHelp.title')}</LinksTitle>
              <FooterLink href="#">
                {t('footer.getHelp.loyaltyProgram')}
              </FooterLink>
              <FooterLink href="#">
                {t('footer.getHelp.returnPolicy')}
              </FooterLink>
              <FooterLink href="#">
                {t('footer.getHelp.privacyPolicy')}
              </FooterLink>
              <FooterLink href="#">
                {t('footer.getHelp.paymentPolicy')}
              </FooterLink>
            </FooterNavigation>
            <FooterNavigation>
              <LinksTitle>{t('footer.aboutUs.title')}</LinksTitle>
              <FooterLink href="#">{t('footer.aboutUs.news')}</FooterLink>
              <FooterLink href="#">{t('footer.aboutUs.work')}</FooterLink>
              <FooterLink href="#">{t('footer.aboutUs.ourPolicy')}</FooterLink>
              <FooterLink href="#">{t('footer.aboutUs.fAQ')}</FooterLink>
            </FooterNavigation>
          </NavigationLinks>
        </FooterLinks>
      </FooterContainer>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background: #e2f4ff;
`;

const FooterContainer = styled.div`
  padding: 20px 60px;
  @media (max-width: 1195px) {
    padding: 20px;
  }
`;

const SubscribeContainer = styled.div`
  display: flex;
  margin: 22px auto 0 auto;
  max-width: 1300px;
  align-items: center;
  justify-content: space-around;
  padding: 20px 40px;
  background: white;
  border-radius: 20px;
  gap: 20px;
  @media (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterLinks = styled.div`
  margin-top: 41px;
  display: flex;
  gap: 82px;
  @media (max-width: 1313px) {
    flex-direction: column;
    gap: 22px;
  }
`;

const LogoAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1313px) {
    align-items: center;
  }
  @media (max-width: 1313px) {
    border-bottom: 1px solid #c8c8c8;
    padding-bottom: 22px;
  }
`;

const SubscribeTitle = styled.div`
  color: #1b5a7d;
  font-size: 29px;
  font-weight: 700;
`;

const SubscribeDescr = styled.div`
  font-size: 16px;
  margin-top: 14px;
  @media (max-width: 1000px) {
    margin-top: 5px;
  }
`;

const StyledInput = styled.input`
  width: 388px;
  height: 63px;
  border-radius: 20px;
  background: #eda415;
  padding: 10px 20px;
  font-size: 19px;
  color: white;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
    opacity: 0.8;
  }
  @media (max-width: 458px) {
    width: 330px;
    font-size: 16px;
  }
  @media (max-width: 384px) {
    width: 290px;
    font-size: 14px;
  }
  @media (max-width: 346px) {
    width: 260px;
    font-size: 14px;
    padding: 5px 10px;
  }
`;

const EmailContainer = styled.div`
  position: relative;
`;

const EmailButton = styled.button`
  position: absolute;
  right: 19px;
  top: 50%;
  transform: translateY(-50%);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const LogoIcon = styled.img`
  min-width: 56px;
  @media (max-width: 559px) {
    display: none;
  }
`;

const ShopName = styled.div`
  color: #1b5a7d;
  font-size: 34px;
  font-weight: 700;
`;

const SocialMediaLinks = styled.div`
  display: flex;
  gap: 37px;
  color: #1b5a7d;
  margin-top: 16px;
  a {
    &:hover {
      color: #eda415;
    }
  }
`;

const NavigationLinks = styled.div`
  display: flex;
  gap: 40px;
  flex: 1;
  justify-content: space-between;
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 742px) {
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 430px) {
    text-align: center;
  }
`;

const Address = styled.div`
  color: #1b5a7d;
  font-size: 15px;
  margin-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #c8c8c8;
  @media (max-width: 1313px) {
    border-bottom: none;
  }
`;

const FooterNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: space-between;
  @media (max-width: 707px) {
    width: 180px;
    gap: 10px;
  }
`;

const FooterLink = styled.a`
  color: #1b5a7d;
  font-size: 17px;
  position: relative;
  padding-left: 26px;
  &::before {
    content: '';
    position: absolute;
    background: #d9d9d9;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 1428px) {
    font-size: 15px;
  }
  @media (max-width: 707px) {
    padding-left: 0;
    text-align: center;
    &::before {
      display: none;
    }
  }
`;

const LinksTitle = styled.div`
  color: #1b5a7d;
  font-size: 19px;
  font-weight: 600;
  @media (max-width: 707px) {
    text-align: center;
    padding-bottom: 5px;
    border-bottom: 1px solid #1b5a7d;
    width: 110px;
    margin: 0 auto;
  }
`;
