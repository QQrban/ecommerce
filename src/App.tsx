import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import './App.css';
import { getAllProducts } from './api/apiService';
import Catalogue from './components/catalogue';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import NewsPage from './components/news';
import SelectedProduct from './components/product';
import Services from './components/services';
import { Product, setProducts } from './redux/stateService';

interface LanguageProducts {
  all_products: Product[];
}

interface TranslatedProducts {
  en: LanguageProducts;
  ee: LanguageProducts;
  ru: LanguageProducts;
}

function App() {
  const [getProducts, setGetProducts] = useState<TranslatedProducts>();
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    getAllProducts().then((data) => {
      setGetProducts(data[0]);
    });
  }, [dispatch]);

  useEffect(() => {
    const currentLanguage = i18n.language;
    console.log(getProducts);
    if (getProducts) {
      switch (currentLanguage) {
        case 'en':
          dispatch(setProducts(getProducts.en.all_products));
          break;
        case 'ee':
          dispatch(setProducts(getProducts.ee.all_products));
          break;
        case 'ru':
          dispatch(setProducts(getProducts.ru.all_products));
          break;
      }
    }
  }, [i18n.language, getProducts, dispatch]);

  return (
    <>
      <Header />
      <MainStyled>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/popo" element={<SelectedProduct />} />
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
