import './App.css';
import Header from './components/header';
import Home from './components/home';
import { styled } from 'styled-components';

function App() {
  return (
    <>
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
