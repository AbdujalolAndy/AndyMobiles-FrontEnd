import React, { useEffect } from "react"
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom"
import { ChosenProduct } from "./chosenProduct"
import AllProducts from "./allProducts"
import { Box } from "@mui/material"
import "../../css/productPage.css"



const ProductsPage = (props:any) => {
    const location = useRouteMatch().path
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Box>
            <Box className="productPage">
                <Switch>
                    <Route path={`${location}/product/:product_id`}>
                        <ChosenProduct handleSaveBasket={props.handleSaveBasket}/>
                    </Route>
                    <Route path={`${location}/:company_id`}>
                        <AllProducts />
                    </Route>
                    <Route path={`${location}`}>
                        <AllProducts />
                    </Route>
                </Switch>
            </Box>
        </Box>
    )
}

export default ProductsPage