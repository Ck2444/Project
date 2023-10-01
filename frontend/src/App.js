import './App.css';
import NavMenu from './components/NavMenu/NavMenu';
import MainPage from './components/pages/MainPage/MainPage';
import AllCategoriesPage from './components/pages/AllCategoriesPage/AllCategoriesPage';
import AllProductsPage from './components/pages/AllProductsPage/AllProductsPage';
import ProductsByCategoriesPage from './components/pages/ProductsByCategoriesPage/ProductsByCategoriesPage';
import SingleProductPage from './components/pages/SingleProductPage/SingleProductPage';
import CartPage from './components/pages/CartPage/CartPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import AllSales from './components/pages/AllSales/AllSales';
import { getAllcategories } from './requests/categories_req';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllproducts } from './requests/singleCategory';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllcategories);
    dispatch(getAllproducts)

  }, [dispatch])

  return (
    <div className='main_conainer'>

      <NavMenu />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/categories' element={<AllCategoriesPage />} />
        <Route path='/all_sales' element={<AllSales />} />
        <Route path='/categories/:id' element={<ProductsByCategoriesPage />} />
        <Route path='/products' element={<AllProductsPage />} />
        <Route path='/products/:id' element={<SingleProductPage />} />
        <Route path='/all_sales' element={<AllSales />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
