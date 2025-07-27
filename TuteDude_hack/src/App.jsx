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
// import AuthPage from './Authentication/AuthPage'




const App = () => {
  return (
    <>
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
   


    </div>

    
    </>

  )
}

export default App
