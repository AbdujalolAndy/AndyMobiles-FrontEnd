import { AppRootState } from "../../types/screen";
import { createSelector } from "reselect"

const selectProductPage = (state: AppRootState) => state.productPage

export const targetProductsRetriever = createSelector(
    selectProductPage,
    (ProductPage) => ProductPage.targetProducts
)

export const chosenProductRetriever = createSelector(
    selectProductPage,
    (ProductPage) => ProductPage.chosenProduct
)

export const productReviewRetriever = createSelector(
    selectProductPage,
    (ProductPage) => ProductPage.productReview
)
export const allBrandsRetriever = createSelector(
    selectProductPage,
    (ProductPage) => ProductPage.allBrands
)