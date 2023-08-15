import './App.css';
import Header from './components/header';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      {/* <div style={{ position: 'absolute' }}>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ee')}>Eesti</button>
        <button onClick={() => changeLanguage('ru')}>Русский</button>
      </div> */}
      <Header />
    </>
  );
}

export default App;
