import { TabContext, TabPanel } from "@mui/lab"
import { Box, Stack, Tab, Tabs } from "@mui/material"
import { MyAccount } from "./myAccount"
import BankTransition from "./bankTransition"
import WishList from "./wishList"
import Follow from "./followings"
import Posts from "./posts"
import { TuiEditor } from "../../components/tuiEditor/tuiEditor"
import { useEffect, useState } from "react"
import { verifiedMemberData } from "../../apiServices/verified"
import { sweetErrorHandling, sweetFailureProvider, sweetTopSmallSuccessAlert } from "../../../lib/sweetAlert"
import Definer from "../../../lib/Definer"
import Followers from "./followers"
import Followings from "./followings"

//Redux
import { createSelector } from "reselect";
import { MemberServiceApi } from "../../apiServices/memberServiceApi"
import { Dispatch, createSlice } from "@reduxjs/toolkit"
import { Member } from "../../types/member"
import { setChosenBlog, setChosenMember, setTargetReviews } from "./slice"
import { chosenBlogRetrieve, chosenMemberRetrieve, targetBlogsRetrieve, targetReviewsRetrieve } from "./selector"
import { useDispatch, useSelector } from "react-redux"
import { ViewerPage } from "../../components/tuiEditor/tuiViewer"
import { Blog } from "../../types/blog"
import CommunityServiceApi from "../../apiServices/communityServiceApi"
import { Review } from "../../types/review"
import { serverApi } from "../../../lib/config"
import FollowServiceApi from "../../apiServices/followServiceApi"

//Slice
const actionDispatch = (dispatch: Dispatch) => ({
    setChosenMember: (data: Member) => dispatch(setChosenMember(data)),
    setChosenBlog: (data: Blog) => dispatch(setChosenBlog(data)),
    setTargetReviews: (data: Review[]) => dispatch(setTargetReviews(data))
})
//selector
const retrieveChosenMember = createSelector(
    chosenMemberRetrieve,
    (chosenMember) => ({ chosenMember })
)

const chosenBlogRetriever = createSelector(
    chosenBlogRetrieve,
    (chosenBlog) => ({ chosenBlog })
)
const retrieveTargetReviews = createSelector(
    targetReviewsRetrieve,
    (targetReviews) => ({ targetReviews })
)

export const OtherPage = (props: any) => {
    //Initilizations
    const [value, setValue] = useState<string>("5");
    const { setChosenMember, setChosenBlog, setTargetReviews } = actionDispatch(useDispatch());
    const { chosenMember } = useSelector(retrieveChosenMember);
    const { chosenBlog } = useSelector(chosenBlogRetriever);
    const { targetReviews } = useSelector(retrieveTargetReviews)
    const [reBuild, setRebuild] = useState<Date>(new Date());
    const [validate, setValidate] = useState<boolean>(false)
    let localValue: any;
    //React Hook
    useEffect(() => {
        const localValueJson: any = localStorage.getItem("value")
        localValue = JSON.parse(localValueJson)
        if (localValue?.value) {
            setValue(localValue.value.toString())
            props.setRebuild(new Date())
        }
        if (!verifiedMemberData) {
            sweetFailureProvider(Definer.auth_err1, false, true)
        }

        //Calling chosenMember
        const memberServiceApi = new MemberServiceApi();
        memberServiceApi.getChosenMember(props.mb_id).then(data => setChosenMember(data)).catch(err => console.log(err))
        return () => {
            localStorage.setItem("value", JSON.stringify(null))
        }
    }, [reBuild])

    async function handleChosenBlogData(id: string) {
        try {
            const communityServiceApi = new CommunityServiceApi()
            const chosenBlog = await communityServiceApi.getChosenBlog(id)
            setChosenBlog(chosenBlog)
            setValue("4")
        } catch (err: any) {
            await sweetErrorHandling(err)
        }
    }

    async function handleTargetReviews(id: string) {
        try {
            const communityServiceApi = new CommunityServiceApi()
            const targetReviews = await communityServiceApi.getProductReviews(id)
            setTargetReviews(targetReviews)
        } catch (err: any) {
            await sweetErrorHandling(err)
        }
    }
    //HANDLERS
    function handleValue(order: string) {
        setValue(order)
    }
    async function handleSubscribe(id: string) {
        try {
            const followServiceApi = new FollowServiceApi();
            await followServiceApi.subscribeMember(id)
            await sweetTopSmallSuccessAlert("Successfully subscribed", 500, false)
            setValidate(true)
        } catch (err: any) {
            await sweetErrorHandling(err)
        }
    }
    async function handleUnSubscribe(id: string) {
        try {
            const followServiceApi = new FollowServiceApi();
            await followServiceApi.unsubscribeMember(id)
            await sweetTopSmallSuccessAlert("Successfully unsubscribed", 500, false)
            setValidate(false)
        } catch (err: any) {
            await sweetErrorHandling(err)
        }
    }
    return (
        <Box>
            <Box className="myPage">
                <TabContext value={value}>
                    <Stack className="container" flexDirection={"row"}>
                        <Stack
                            className="setting_controller"
                            flexDirection={"column"}
                            alignItems={"center"}
                        >
                            <div className="user_info">
                                <div className="user_type text-danger fw-bold">{verifiedMemberData?.mb_type}</div>
                                <button className="user_logout btn"><img src="/icons/exit.png" alt="" /></button>
                                <div className="user_img">
                                    <img
                                        src={chosenMember?.mb_image ? `${serverApi}/${chosenMember?.mb_image}` : "/products/auth/default_user.svg"}
                                        alt="..."
                                        style={{ borderRadius: "50%" }}
                                    />
                                </div>
                            </div>
                            <div className="user_name fs-1 fw-bold">{chosenMember?.mb_nick}</div>
                            <div className=" text-secondary fs-6 fw-bold">{chosenMember?.mb_email}</div>
                            <Stack
                                flexDirection={"row"}
                                justifyContent={"space-between"}
                                gap={"20px"}
                                className="mt-2"
                            >
                                <div className="fw-bold text-dark">
                                    <span className="text-secondary me-1">Followers:</span>
                                    {chosenMember?.mb_followers}
                                </div>
                                <div className="fw-bold text-dark">
                                    <span className="text-secondary me-1">Followings:</span>
                                    {chosenMember?.mb_followings}
                                </div>
                            </Stack>
                            {
                                validate ? (
                                    <Stack
                                        flexDirection={"row"}
                                        gap="10px"
                                        className="btn btn-success mt-2"
                                        alignContent={"center"}
                                        onClick={() => { handleSubscribe(props.mb_id) }}
                                    >
                                        <span><i className="fa-solid fa-user-plus"></i></span>
                                        <span>Follow</span>
                                    </Stack>
                                ) : (

                                    <Stack
                                        flexDirection={"row"}
                                        gap="10px"
                                        className="btn btn-success mt-2"
                                        alignContent={"center"}
                                        onClick={() => { handleUnSubscribe(props.mb_id) }}
                                    >
                                        <span><i className="fa-solid fa-user"></i></span>
                                        <span>UnSubscribe</span>
                                    </Stack>
                                )
                            }
                            <Tabs
                                orientation="vertical"
                                className="settings_items"
                            >
                                <Stack
                                    className={value == "5" ? "chosenSet controller_tab" : "controller_tab"}
                                    flexDirection={"row"}
                                    style={value == "5" ? { borderLeft: "4px solid black", backgroundColor: "white" } : {}}
                                    onClick={() => handleValue("5")}
                                    alignItems={"center"}
                                    sx={{ padding: "0 0 0 10px" }}
                                >
                                    <i className="fa-solid fa-users fs-3"></i>
                                    <Tab value="5" label="followers" />
                                </Stack>
                                <Stack
                                    className={value == "6" ? "chosenSet controller_tab" : "controller_tab"}
                                    flexDirection={"row"}
                                    style={value == "6" ? { borderLeft: "4px solid black", backgroundColor: "white" } : {}}
                                    onClick={() => handleValue("6")}
                                    alignItems={"center"}
                                    sx={{ padding: "0 0 0 10px" }}
                                >
                                    <i className="fa-solid fa-user-plus fs-3"></i>
                                    <Tab value="6" label="followings" />
                                </Stack>
                                <Stack
                                    className={value == "7" ? "chosenSet controller_tab" : "controller_tab"}
                                    flexDirection={"row"}
                                    style={value == "7" ? { borderLeft: "4px solid black", backgroundColor: "white" } : {}}
                                    onClick={() => handleValue("7")}
                                    alignItems={"center"}
                                    sx={{ padding: "0 0 0 10px" }}
                                >
                                    <i className="fa-solid fa-message fs-3"></i>
                                    <Tab value="7" label="posts" />
                                </Stack>
                            </Tabs>
                        </Stack>
                        <TabPanel value="4">
                            <ViewerPage
                                setChosenBlog={setChosenBlog}
                                chosenBlog={chosenBlog}
                                targetReviews={targetReviews}
                            />
                        </TabPanel>
                        <TabPanel value={"5"} className={"account_info"}>
                            <Followers
                                action_enable={true}
                                setRebuild={setRebuild}
                                mb_id={props.mb_id}
                            />
                        </TabPanel>
                        <TabPanel value={"6"} className={"account_info"}>
                            <Followings
                                action_enable={false}
                                setRebuild={setRebuild}
                                mb_id={props.mb_id}
                            />
                        </TabPanel>
                        <TabPanel value={"7"} className={"account_info"}>
                            <Posts
                                mb_id={chosenMember?._id}
                                handleChosenBlogData={handleChosenBlogData}
                                handleTargetReviews={handleTargetReviews}
                            />
                        </TabPanel>
                    </Stack>
                </TabContext>
            </Box>
        </Box>
    )
}