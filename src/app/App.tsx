import React from 'react'
import { Route, BrowserRouter as Router, Switch, useLocation } from 'react-router-dom'
import HomePage from './screens/HomePage'
import BrandsPage from './screens/BrandPage'
import ProductsPage from './screens/ProductsPage'
import {NavbarOthers} from './components/headers/NavbarOthers'
import {HomeNavbar} from './components/headers/HomeNavbar'
import BlogPage from './screens/BlogPage'
import CommunityPage from './screens/CommunityPage'
import FaqPage from './screens/FaqPage'
import AboutUsPage from './screens/AboutUsPage'
import ContactUsPage from './screens/ContactUsPage'



const App: React.FC = () => {
  const {pathname} =useLocation();
  return (
    <div>
      {pathname == "/" ? (<HomeNavbar/>) :(<NavbarOthers/>)}
        <Switch>
          <Route path="/brands">
            <BrandsPage />
          </Route>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/blogs">
            < BlogPage/>
          </Route>
          <Route path="/community">
            < CommunityPage/>
          </Route>
          <Route path="/faq">
            < FaqPage/>
          </Route>
          <Route path="/about">
            < AboutUsPage/>
          </Route>
          <Route path="/contact">
            < ContactUsPage/>
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
    </div>
  )
}

export default App
