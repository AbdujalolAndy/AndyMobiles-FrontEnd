import { createSlice } from "@reduxjs/toolkit";
import { MemberPageState } from "../../types/screen";

const initialState: MemberPageState = {
    chosenMember: null,
    chosenBankCard: null,
    wishListItems: [],
    followers: [],
    followings: [],
    targetBlogs: [],
}

const memberPageSlice = createSlice(
    {
        name: "MemberPage",
        initialState,
        reducers: {
            setChosenMember: (state, action) => {
                state.chosenMember = action.payload
            },
            setChosenBank: (state, action) => {
                state.chosenBankCard = action.payload
            },
            setWishListItems: (state, action) => {
                state.wishListItems = action.payload
            },
            setFollowers: (state, action) => {
                state.followers = action.payload
            },
            setFollowings: (state, action) => {
                state.followings = action.payload
            },
            setTargetBlogs: (state, action) => {
                state.targetBlogs = action.payload
            }
        }
    }
)

export const {
    setChosenBank,
    setChosenMember,
    setFollowers,
    setFollowings,
    setTargetBlogs,
    setWishListItems
} = memberPageSlice.actions

const memberPageReducer = memberPageSlice.reducer

export default memberPageReducer