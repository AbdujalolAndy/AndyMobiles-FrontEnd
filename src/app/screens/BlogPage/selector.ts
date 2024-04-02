import { createSelector } from "reselect"
import { AppRootState } from "../../types/screen"

const selectPage = (state: AppRootState) => state.blogPage

export const retrieveTargetBlogs = createSelector(
    selectPage,
    (BlogPage) => BlogPage.targetBlogs
)