import React, { useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import HomePage from './screens/HomePage'
import BrandsPage from './screens/BrandPage'
import ProductsPage from './screens/ProductsPage'
import { NavbarOthers } from './components/headers/NavbarOthers'
import { HomeNavbar } from './components/headers/HomeNavbar'
import BlogPage from './screens/BlogPage'
import TrackOrderPage from './screens/TrackOrderPage'
import FaqPage from './screens/FaqPage'
import MyPage from './screens/MyPage'
import Footer from './components/footer'
import { AuthenticationModal } from './components/authModal'
import { Basket } from './components/basket'
import { ProductNavbar } from './components/headers/productNavbar'
import "./css/general.css"
import "./css/navbar.css"
import Chatting from './components/features/chattingModal'




const App: React.FC = () => {
  const { pathname } = useLocation();
  const [openAuth, setOpenAuth] = useState(false)
  const [openBasket, setOpenBasket] = useState(false)
  function handleSignUpClose() { setOpenAuth(false) }
  function handleSignUpOpen() { setOpenAuth(true) }
  function handleBasketOpen() { setOpenBasket(true) }
  function handleBasketClose() { setOpenBasket(false) }
  return (
    <div>
      {pathname == "/" ? <HomeNavbar
        handleSignUpOpen={handleSignUpOpen}
        handleBasketOpen={handleBasketOpen}
      /> :
        (pathname.includes("/brands") ? <NavbarOthers addressTitle="Brands" /> :
          (pathname.includes("/products") ? <ProductNavbar addressTitle="Products" /> :
            pathname.includes("/blogs") ? <NavbarOthers addressTitle="Blogs" /> :
              pathname.includes("/track-order") ? <NavbarOthers addressTitle="Track My Order" /> :
                pathname.includes("/faq") ? <NavbarOthers addressTitle="Faq" /> :
                      pathname.includes("/user-page") ? <NavbarOthers addressTitle="My Page" /> :
                        ""
          ))}
      <Switch>
        <Route path="/brands">
          <BrandsPage />
          <Footer />
        </Route>
        <Route path="/products">
          <ProductsPage />
          <Footer />
        </Route>
        <Route path="/blogs">
          < BlogPage />
          <Footer />
        </Route>
        <Route path="/track-order">
          <TrackOrderPage />
          <Footer />
        </Route>
        <Route path="/user-page">
          < MyPage />
          <Footer />
        </Route>
        <Route path="/faq">
          < FaqPage />
          <Footer />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
      <AuthenticationModal
        openAuth={openAuth}
        handleSignUpClose={handleSignUpClose}
      />
      <Basket
        openBasket={openBasket}
        handleBasketClose={handleBasketClose}
      />
      <Chatting />
    </div>
  )
}

export default App
