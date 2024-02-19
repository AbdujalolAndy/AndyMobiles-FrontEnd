import React, { useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import HomePage from './screens/HomePage'
import BrandsPage from './screens/BrandPage'
import ProductsPage from './screens/ProductsPage'
import { NavbarOthers } from './components/headers/NavbarOthers'
import { HomeNavbar } from './components/headers/HomeNavbar'
import BlogPage from './screens/BlogPage'
import CommunityPage from './screens/CommunityPage'
import FaqPage from './screens/FaqPage'
import AboutUsPage from './screens/AboutUsPage'
import ContactUsPage from './screens/ContactUsPage'
import "./css/general.css"
import "./css/navbar.css"
import MyPage from './screens/MyPage'
import Footer from './components/footer'
import { AuthenticationModal } from './components/authModal'
import { Basket } from './components/basket'



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
          (pathname.includes("/products") ? <NavbarOthers addressTitle="Products" /> :
            pathname.includes("/blogs") ? <NavbarOthers addressTitle="Blogs" /> :
              pathname.includes("/community") ? <NavbarOthers addressTitle="Community" /> :
                pathname.includes("/faq") ? <NavbarOthers addressTitle="Faq" /> :
                  pathname.includes("/about") ? <NavbarOthers addressTitle="About" /> :
                    pathname.includes("/contact") ? <NavbarOthers addressTitle="Contact" /> :
                      pathname.includes("/myPage") ? <NavbarOthers addressTitle="My Page" /> :
                        ""
          ))}
      <Switch>
        <Route path="/brands">
          <BrandsPage />
        </Route>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/blogs">
          < BlogPage />
        </Route>
        <Route path="/community">
          < CommunityPage />
        </Route>
        <Route path="/myPage">
          < MyPage />
        </Route>
        <Route path="/faq">
          < FaqPage />
        </Route>
        <Route path="/about">
          < AboutUsPage />
        </Route>
        <Route path="/contact">
          < ContactUsPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
      <Footer />
      <AuthenticationModal
        openAuth={openAuth}
        handleSignUpClose={handleSignUpClose}
      />
      <Basket
        openBasket={openBasket}
        handleBasketClose={handleBasketClose}
      />
    </div>
  )
}

export default App
