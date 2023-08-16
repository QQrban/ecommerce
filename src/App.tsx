import './App.css';
import Header from './components/header';
import { useTranslation } from 'react-i18next';
import Home from './components/home';
import { styled } from 'styled-components';

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <div style={{ position: 'absolute' }}>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ee')}>Eesti</button>
        <button onClick={() => changeLanguage('ru')}>Русский</button>
      </div>
      <Header />
      <MainStyled>
        <Home />
      </MainStyled>
    </>
  );
}

export default App;

const MainStyled = styled.main`
  padding: 20px 60px;
  @media (max-width: 1195px) {
    padding: 20px;
  }
`;
