import { createSlice } from "@reduxjs/toolkit";
import { ProductPageState } from "../../types/screen";

const initialState: ProductPageState = {
    targetProducts: [],
    chosenProduct: null,
    productReview: [],
    allBrands:[]
}

const productPageSlice = createSlice(
    {
        name: "ProductPage",
        initialState,
        reducers: {
            setTargetProducts: (state, action) => {
                state.targetProducts = action.payload
            },
            setAllBrands:(state,action)=>{
                state.allBrands = action.payload
            },
            setChosenProduct: (state, action) => {
                state.chosenProduct = action.payload
            },
            setProductReview: (state, action) => {
                state.productReview = action.payload
            }
        }
    }
)

export const {
    setChosenProduct, setProductReview, setTargetProducts,setAllBrands
} = productPageSlice.actions
const productPageReducer = productPageSlice.reducer
export default productPageReducer