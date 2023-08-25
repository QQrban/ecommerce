import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import './App.css';
import Catalogue from './components/catalogue';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import News from './components/news';
import Services from './components/services';

function App() {
  return (
    <>
      <Header />
      <MainStyled>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </MainStyled>
      <Footer />
    </>
  );
}

export default App;

const MainStyled = styled.main`
  flex: 1 0 auto;
`;
