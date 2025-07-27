import SupplierList from './WebPages/SupplierList';
// ...existing code...
import React, { useState } from 'react'
import Nabvar from './Components/Nabvar'
import { SearchProvider } from './Utilities/SearchContext';
import Categories from './Components/Categories'
import HomePage from './WebPages/HomePage'
import ItemsPage from './WebPages/ItemsPage'
import ProfilePage from './WebPages/ProfilePage'
import ItemsList from './WebPages/ItemsList'
import ItemsListPage from './WebPages/ItemsListPage'
import Footer from './WebPages/Footer'
import AuthPage from './Authentication/AuthPage'
// import ProfileSupplier from './WebPages/ProfileSupplier'
import CategoryPage from './WebPages/Routes/CategoryPage'
import Register from './Authentication/Register'





import Cart from './Components/Cart'
import HomeItemsPage from './WebPages/HomeItemsPage';




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
  const isItemsRoute = hash.startsWith('#/items/');
  const isItemsListRoute = hash === '#/itemslist';
  const isProfileRoute = hash === '#/profile';
  const isSuppliersRoute = hash === '#/suppliers';
  let categoryName = null;
  let itemName = null;
  if (isCategoryRoute) {
    categoryName = decodeURIComponent(hash.replace('#/category/', ''));
  }
  if (isItemsRoute) {
    itemName = decodeURIComponent(hash.replace('#/items/', ''));
  }

  return (
    <SearchProvider>
      <div>
        {isRegisterRoute ? (
          <Register />
        ) : isSuppliersRoute ? (
          <>
            <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
            <Nabvar onCartClick={() => setCartOpen(true)} />
            <SupplierList />
          </>
        ) : isItemsRoute ? (
          <>
            <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
            <Nabvar onCartClick={() => setCartOpen(true)} />
            <ItemsPage itemName={itemName} />
          </>
        ) : isItemsListRoute ? (
          <>
            <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
            <Nabvar onCartClick={() => setCartOpen(true)} />
            <ItemsListPage />
          </>
        ) : isCategoryRoute ? (
          <>
            <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
            <Nabvar onCartClick={() => setCartOpen(true)} />
            <CategoryPage category={categoryName} />
          </>
        ) : isProfileRoute ? (
          <>
            <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
            <Nabvar onCartClick={() => setCartOpen(true)} />
            <ProfilePage />
          </>
        ) : (
          <>
            <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
            <Nabvar onCartClick={() => setCartOpen(true)} />
            <HomePage />
            <HomeItemsPage/>
            <Footer />
          </>
        )}
      </div>
    </SearchProvider>
  )
}

export default App
