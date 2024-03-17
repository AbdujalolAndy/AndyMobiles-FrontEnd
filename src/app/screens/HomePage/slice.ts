import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../types/screen";


const initialState: HomePageState = {
    targetBrands: [],
    randomNewProducts: [],
    targetProducts: [],
    communityPost: []
}

const HomePageSlice = createSlice({
    name: "Home",
    initialState,
    reducers: {
        setTargetBrands: (state, action) => {
            state.targetBrands = action.payload
        },
        setRandomNewProducts: (state, action) => {
            state.randomNewProducts = action.payload
        },
        setTargetProducts: (state, action) => {
            state.targetProducts = action.payload
        },
        setCommunityPost: (state, action) => {
            state.communityPost = action.payload
        }
    }
})

export const {
    setTargetBrands,
    setCommunityPost,
    setRandomNewProducts,
    setTargetProducts
} = HomePageSlice.actions
const homePageReducer = HomePageSlice.reducer
export default homePageReducer