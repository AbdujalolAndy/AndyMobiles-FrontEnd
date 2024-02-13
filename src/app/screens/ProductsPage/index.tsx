import React from "react"
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom"
import { ChosenProduct } from "./chosenProduct"
import AllProducts from "./allProducts"
import { Box } from "@mui/material"
import Footer from "../../components/footer"
import "../../css/productPage.css"



const ProductsPage = () => {
    const location = useRouteMatch().path
    return (
        <Box>
            <Box className="productPage">
                <Switch>
                    <Route path={`${location}/product/:product_id`}>
                        <ChosenProduct />
                    </Route>
                    <Route path={`${location}`}>
                        <AllProducts />
                    </Route>
                </Switch>
            </Box>
            <Footer />
        </Box>
    )
}

export default ProductsPage