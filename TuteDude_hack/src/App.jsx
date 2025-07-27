import React, { useState } from 'react'
import Nabvar from './Components/Nabvar'
import Categories from './Components/Categories'
import HomePage from './WebPages/HomePage'
import ItemsPage from './WebPages/ItemsPage'
import ProfilePage from './WebPages/ProfilePage'
import ItemsList from './WebPages/ItemsList'
import ItemsListPage from './WebPages/ItemsListPage'
import Footer from './WebPages/Footer'
import AuthPage from './Authentication/AuthPage'
import ProfileSupplier from './WebPages/ProfileSupplier'
import CategoryPage from './WebPages/Routes/CategoryPage'
import VendorRegister from './Authentication/Login'





import Cart from './Components/Cart'
// import { useState } from 'react'




const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [hash, setHash] = useState(window.location.hash);
  const [isRegistered, setIsRegistered] = useState(() => {
    return localStorage.getItem('isSupplierRegistered') === 'true';
  });

  React.useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  React.useEffect(() => {
    const onRegister = () => setIsRegistered(true);
    const onLogout = () => setIsRegistered(false);
    window.addEventListener('supplier-registered', onRegister);
    window.addEventListener('supplier-logout', onLogout);
    return () => {
      window.removeEventListener('supplier-registered', onRegister);
      window.removeEventListener('supplier-logout', onLogout);
    };
  }, []);

  const isRegisterRoute = hash === '#/register';
  const isCategoryRoute = hash.startsWith('#/category/');
  let categoryName = null;
  if (isCategoryRoute) {
    categoryName = decodeURIComponent(hash.replace('#/category/', ''));
  }
  return (
    <>
    <div> 
          
   


        <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
        <Nabvar onCartClick={() => setCartOpen(true)} />
        <HomePage />
        <ItemsListPage />
        <CategoryPage />

        <ItemsPage />
        <ProfilePage />
        <ProfileSupplier />
        <Footer />
        {/* <AuthPage/> */}



      </div>
    </>

  )
}

export default App
