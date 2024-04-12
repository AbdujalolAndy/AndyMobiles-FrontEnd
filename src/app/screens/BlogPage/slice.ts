import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    targetBlogs: [],
    chosenBlog: null,
}

const blogPageSlice = createSlice({
    name: "BlogPage",
    initialState,
    reducers: {
        setTargetBlogs: (state, action) => {
            state.targetBlogs = action.payload
        }
    }
})


export const { setTargetBlogs} = blogPageSlice.actions

const blogPageReducer = blogPageSlice.reducer;

export default blogPageReducer