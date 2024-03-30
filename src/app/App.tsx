import React, { useEffect, useState } from 'react'
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
import { DeviceDetector } from './components/features/deviceDetector'
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from '../lib/sweetAlert'
import { MemberServiceApi } from './apiServices/memberServiceApi'




const App: React.FC = () => {

  //Initilizations
  const device = DeviceDetector()
  const { pathname } = useLocation();
  const [openAuth, setOpenAuth] = useState(false)
  const [openBasket, setOpenBasket] = useState(false)

  //Handlers
  function handleSignUpClose() { setOpenAuth(false) }
  function handleSignUpOpen() { setOpenAuth(true) }
  function handleBasketOpen() { setOpenBasket(true) }
  function handleBasketClose() { setOpenBasket(false) }
  async function handleLogOut() {
    try {
      const memberServiceApi = new MemberServiceApi();
      await memberServiceApi.logoutRequest();
      await sweetTopSmallSuccessAlert("Successfully logged out!", 2000);
      window.location.reload()
    } catch (err: any) {
      sweetErrorHandling(err).then()
    }
  }
  return (
    <div>
      {pathname == "/" ? <HomeNavbar
        handleSignUpOpen={handleSignUpOpen}
        handleBasketOpen={handleBasketOpen}
        handleLogOut={handleLogOut}
        device={device}
      /> :
        (pathname.includes("/brands") ?
          <NavbarOthers
            addressTitle="Brands"
            handleSignUpOpen={handleSignUpOpen}
            handleBasketOpen={handleBasketOpen}
            handleLogOut={handleLogOut}
          /> :
          (pathname.includes("/products") ?
            <ProductNavbar
              addressTitle="Products"
              handleSignUpOpen={handleSignUpOpen}
              handleBasketOpen={handleBasketOpen}
              handleLogOut={handleLogOut}
            /> :
            pathname.includes("/blogs") ?
              <NavbarOthers
                addressTitle="Blogs"
                handleSignUpOpen={handleSignUpOpen}
                handleBasketOpen={handleBasketOpen}
                handleLogOut={handleLogOut}
              /> :
              pathname.includes("/track-order") ?
                <NavbarOthers
                  addressTitle="Track My Order"
                  handleSignUpOpen={handleSignUpOpen}
                  handleBasketOpen={handleBasketOpen}
                  handleLogOut={handleLogOut}
                /> :
                pathname.includes("/faq") ?
                  <NavbarOthers
                    addressTitle="Faq"
                    handleSignUpOpen={handleSignUpOpen}
                    handleBasketOpen={handleBasketOpen}
                    handleLogOut={handleLogOut}
                  /> :
                  pathname.includes("/user-page") ?
                    <NavbarOthers
                      addressTitle="My Page"
                      handleSignUpOpen={handleSignUpOpen}
                      handleBasketOpen={handleBasketOpen}
                      handleLogOut={handleLogOut}
                    /> :
                    ""
          ))}
      <Switch>
        <Route path="/brands">
          <BrandsPage />
          <Footer />
        </Route>
        <Route path="/products">
          <ProductsPage  />
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
          <HomePage deviceDetect={device} />
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
