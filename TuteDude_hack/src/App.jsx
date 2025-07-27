import React from 'react'
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
import AuthPage from './Authentication/AuthPage'





import Cart from './Components/Cart'
import { useState } from 'react'




const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
<<<<<<< HEAD
      <div>
=======
    <div> 
          <Nabvar/>
   <HomePage/>
   <ItemsListPage/>
   <CategoryPage/>
   
   
   <ItemsPage/>
   <ProfilePage/>
   <ProfileSupplier/>
   <Footer/>
   {/* <AuthPage/> */}
   
>>>>>>> a83ba2bc5374429ad3cfd3c0678f6b9e822d215b


        <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
        <Nabvar onCartClick={() => setCartOpen(true)} />
        <HomePage />
        <ItemsListPage />
        <CategoryPage />


        <ItemsPage />
        <ProfilePage />
        <Footer />
        {/* <AuthPage/> */}



      </div>


    </>

  )
}

export default App
