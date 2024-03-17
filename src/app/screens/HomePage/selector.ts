import {createSelector} from "reselect"
import { AppRootState } from "../../types/screen"


const selectHomePage = (state:AppRootState)=>state.homePage;

export const retrieveTargetProducts = createSelector(
    selectHomePage,
    (HomePage) => HomePage.targetProducts
)

export const retrieveRandomProducts = createSelector(
    selectHomePage,
    (HomePage) => HomePage.randomNewProducts
)

export const retrieveTargetBrands = createSelector(
    selectHomePage,
    (HomePage)=>HomePage.targetBrands
)

export const retrieveCommunityPost = createSelector(
    selectHomePage,
    (HomePage)=>HomePage.communityPost
)