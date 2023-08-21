import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import Catalogue from './components/catalogue';

function App() {
  return (
    <>
      <Header />
      <MainStyled>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
        </Routes>
      </MainStyled>
      <Footer />
    </>
  );
}

export default App;

const MainStyled = styled.main`
  padding: 20px 60px;
  flex: 1 0 auto;
  @media (max-width: 1195px) {
    padding: 20px;
  }
`;
