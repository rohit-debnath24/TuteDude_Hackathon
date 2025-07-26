import React from 'react'
import Nabvar from './Components/Nabvar'
import Categories from './Components/Categories'
import HomePage from './WebPages/HomePage'
import ItemsPage from './WebPages/ItemsPage'
import ProfilePage from './WebPages/ProfilePage'
import ItemsList from './WebPages/ItemsList'
import ItemsListPage from './WebPages/ItemsListPage'
import Footer from './WebPages/Footer'

const App = () => {
  return (
    <>
    <div className='bg-[linear-gradient(1deg,rgba(218,227,230,1)_0%,rgba(143,216,227,1)_73%,rgba(83,237,237,1)_100%)]'> 
          <Nabvar/>
   <HomePage/>
   <ItemsListPage/>
   
   
   <ItemsPage/>
   <ProfilePage/>
   <Footer/>


    </div>

    
    </>

  )
}

export default App
