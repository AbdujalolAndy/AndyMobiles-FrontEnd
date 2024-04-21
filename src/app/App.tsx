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
import Footer from './components/footer'
import { AuthenticationModal } from './components/authModal'
import { Basket } from './components/basket'
import { ProductNavbar } from './components/headers/productNavbar'
import Chatting from './components/features/chattingModal'
import { DeviceDetector } from './components/features/deviceDetector'
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from '../lib/sweetAlert'
import { MemberServiceApi } from './apiServices/memberServiceApi'
import MemberPage from './screens/MyPage'
import "./css/general.css"
import "./css/navbar.css"

//REDUX
import { Dispatch } from '@reduxjs/toolkit'
import { WishListItem } from './types/others'
import { setWishListItems } from './screens/MyPage/slice'
import { useDispatch } from 'react-redux'
import { verifiedMemberData } from './apiServices/verified'
import { Product } from './types/product'
import { BasketItem, OrderItem } from './types/order'


const actionDispatch = (dispatch: Dispatch) => ({
  setWishListItems: (data: WishListItem[]) => dispatch(setWishListItems(data))
})

const App: React.FC = () => {

  //Initilizations
  const device = DeviceDetector();
  const { pathname } = useLocation();
  const [openAuth, setOpenAuth] = useState(false);
  const [openBasket, setOpenBasket] = useState(false);
  const [likedItemAmount, setLikedItemAmount] = useState<number>(0)
  const { setWishListItems } = actionDispatch(useDispatch());
  const [reBuild, setRebuild] = useState<Date>(new Date())
  const listJson: any = localStorage.getItem("basket_items")
  const current_items = JSON.parse(listJson) ?? [];
  const [addItem, setAddItem] = useState(current_items);
  const [ordersAmount, setOrdersAmount] = useState<number>(current_items.length)
  //React Hook
  useEffect(() => {
    //calling wishListItems
    const memberServiceApi = new MemberServiceApi()
    memberServiceApi.getWishListItems().then(data => {
      setWishListItems(data)
      if (verifiedMemberData && data[0]) {
        setLikedItemAmount(data.length)
      }
    }
    ).then(err => console.log(err))
  }, [reBuild])

  //Handlers
  function handleSignUpClose() { setOpenAuth(false) }
  function handleSignUpOpen() { setOpenAuth(true) }
  function handleBasketOpen() { setOpenBasket(true) }
  function handleBasketClose() { setOpenBasket(false) }
  async function handleLogOut() {
    try {
      const memberServiceApi = new MemberServiceApi();
      await memberServiceApi.logoutRequest();
      await sweetTopSmallSuccessAlert("Successfully logged out!", 1000,true);
    } catch (err: any) {
      sweetErrorHandling(err).then()
    }
  }

  function handleSaveBasket(basketItem: BasketItem) {
    try {
      const doesExist = addItem.some((ele: OrderItem) => ele.order_id === basketItem._id)
      console.log("basket Item", basketItem)
      if (doesExist) {
        sweetTopSmallSuccessAlert('You have already added!', 500, false);
        return false
      } else {
        const actual_price = basketItem.product_price-(basketItem.product_price*(basketItem.product_discount/100))
        const new_item = {
          item_quantity: basketItem.item_quantity ? basketItem.item_quantity : 1,
          item_price: basketItem.costumize_product_contract>0?basketItem.product_price:actual_price,
          order_id: basketItem._id,
          item_color: basketItem.product_color,
          item_storage: basketItem.product_memory,
          item_name: basketItem.product_name,
          product_image: basketItem.product_images[0],
          product_contract: basketItem.costumize_product_contract ? basketItem.costumize_product_contract: 0
        }
        addItem.push(new_item)
        setAddItem([...addItem])
        localStorage.setItem("basket_items", JSON.stringify(addItem))
      }
      setOrdersAmount(addItem.length)
      sweetTopSmallSuccessAlert("Added to the basket!", 500, false)
    } catch (err) {
      console.log(err)
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
        likedItemAmount={likedItemAmount}
        ordersAmount={ordersAmount}
      /> :
        (pathname.includes("/brands") ?
          <NavbarOthers
            addressTitle="Brands"
            handleSignUpOpen={handleSignUpOpen}
            handleBasketOpen={handleBasketOpen}
            handleLogOut={handleLogOut}
            likedItemAmount={likedItemAmount}
            ordersAmount={ordersAmount}
          /> :
          (pathname.includes("/products") ?
            <ProductNavbar
              addressTitle="Products"
              handleSignUpOpen={handleSignUpOpen}
              handleBasketOpen={handleBasketOpen}
              handleLogOut={handleLogOut}
              likedItemAmount={likedItemAmount}
              ordersAmount={ordersAmount}
            /> :
            pathname.includes("/blogs") ?
              <NavbarOthers
                addressTitle="Blogs"
                handleSignUpOpen={handleSignUpOpen}
                handleBasketOpen={handleBasketOpen}
                handleLogOut={handleLogOut}
                likedItemAmount={likedItemAmount}
                ordersAmount={ordersAmount}
              /> :
              pathname.includes("/track-order") ?
                <NavbarOthers
                  addressTitle="Track My Order"
                  handleSignUpOpen={handleSignUpOpen}
                  handleBasketOpen={handleBasketOpen}
                  handleLogOut={handleLogOut}
                  likedItemAmount={likedItemAmount}
                  ordersAmount={ordersAmount}
                /> :
                pathname.includes("/faq") ?
                  <NavbarOthers
                    addressTitle="Faq"
                    handleSignUpOpen={handleSignUpOpen}
                    handleBasketOpen={handleBasketOpen}
                    handleLogOut={handleLogOut}
                    likedItemAmount={likedItemAmount}
                    ordersAmount={ordersAmount}
                  /> :
                  pathname.includes("/user-page") ?
                    <NavbarOthers
                      addressTitle="My Page"
                      handleSignUpOpen={handleSignUpOpen}
                      handleBasketOpen={handleBasketOpen}
                      handleLogOut={handleLogOut}
                      likedItemAmount={likedItemAmount}
                      ordersAmount={ordersAmount}
                    /> :
                    ""
          ))}
      <Switch>
        <Route path="/brands">
          <BrandsPage />
          <Footer />
        </Route>
        <Route path="/products">
          <ProductsPage handleSaveBasket={handleSaveBasket} />
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
          < MemberPage reBuild={reBuild} setRebuild={setRebuild} handleLogOut={handleLogOut} />
          <Footer />
        </Route>
        <Route path="/faq">
          < FaqPage />
          <Footer />
        </Route>
        <Route path='/'>
          <HomePage
            deviceDetect={device}
            setRebuild={setRebuild}
            handleSaveBasket={handleSaveBasket}
          />
        </Route>
      </Switch>
      <AuthenticationModal
        openAuth={openAuth}
        handleSignUpClose={handleSignUpClose}
      />
      <Basket
        openBasket={openBasket}
        handleBasketClose={handleBasketClose}
        addItems={addItem}
        setAddItem={setAddItem}
        setOrdersAmount={setOrdersAmount}
        ordersAmount={ordersAmount}
      />
      <Chatting />
    </div>
  )
}

export default App
