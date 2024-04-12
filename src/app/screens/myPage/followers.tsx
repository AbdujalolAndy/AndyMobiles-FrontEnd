import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Pagination, PaginationItem, Stack } from "@mui/material";
import { Dispatch } from "@reduxjs/toolkit";
import { FollowInterface } from "../../types/member";
import { serverApi } from "../../../lib/config";
import { sweetErrorHandling, sweetTopSuccessAlert } from "../../../lib/sweetAlert";
import FollowServiceApi from "../../apiServices/followServiceApi";
import { useEffect, useState } from "react";

//Redux
import { createSelector } from "reselect"
import { setFollowers, setFollowings } from "./slice";
import { followersRetrieve, followingsRetrieve } from "./selector";
import { useDispatch, useSelector } from "react-redux";
import { verifiedMemberData } from "../../apiServices/verified";

//Slice
const actionDispatch = (dispatch: Dispatch) => ({
    setFollowers: (data: FollowInterface[]) => dispatch(setFollowers(data)),
})
//Selector
const retrieveFollowers = createSelector(
    followersRetrieve,
    (followers) => ({ followers })
)
const Followers = (props: any) => {
    //Initializations
    const { setFollowers } = actionDispatch(useDispatch())
    const { followers } = useSelector(retrieveFollowers)
    const { mb_id } = props
    const [objSearch, setObjSearch] = useState({
        mb_id: mb_id ? mb_id : "",
        limit: 5,
        page: 1
    })
    const [reBuild, setRebuild] = useState<Date>(new Date())

    //React Hook
    useEffect(() => {
        //Calling followers
        const followServiceApi = new FollowServiceApi();
        followServiceApi.getFollowers(objSearch).then((data: FollowInterface[]) => {
            setFollowers(data)
        }).catch(err => console.log(err))
    }, [reBuild])

    //Handlers
    async function handleSubscribeMember(follower: FollowInterface) {
        try {
            const followServiceApi = new FollowServiceApi();
            await followServiceApi.subscribeMember(follower.member_data._id);
            await sweetTopSuccessAlert(`Subscribed ${follower.member_data.mb_nick}`, 500, false)
            setRebuild(new Date())
            props.setRebuild(new Date())
        } catch (err: any) {
            await sweetErrorHandling(err)
        }
    }
    async function handleUnsubscribeMember(follower: FollowInterface) {
        try {
            const followServiceApi = new FollowServiceApi();
            await followServiceApi.unsubscribeMember(verifiedMemberData._id, follower.member_data._id,);
            await sweetTopSuccessAlert(`Unsubscribed ${follower.member_data.mb_nick}`, 500, false);
            setRebuild(new Date())
            props.setRebuild(new Date())
        } catch (err: any) {
            await sweetErrorHandling(err)
        }
    }
    return (
        <Box>
            <div className="follow_title fs-4 fw-bold">
                {props.action_enable ? "FOLLOWERS" : "FOLLOWINGS"}
            </div>
            <Stack className="follow" alignItems={"center"}>
                <Stack gap="20px">
                    {followers[0] ?
                        followers.map((follower: FollowInterface) => {
                            const image_url = follower.member_data.mb_image ? `${serverApi}/${follower.member_data.mb_image}` : "/pictures/auth/default_user.svg"
                            return (
                                <Stack
                                    className={"follow_item"}
                                    flexDirection={"row"}
                                    justifyContent={"space-between"}
                                    alignItems={"center"}
                                >
                                    <Stack
                                        flexDirection={"row"}
                                        alignItems={"center"}
                                        gap="15px"
                                    >
                                        <img
                                            src={image_url}
                                            alt="follow_image"
                                            style={{ borderRadius: "0 10px 0 10px", width: "auto", height: "100px" }}
                                        />
                                        <div className="follow_name fs-3 text-light fw-bold">
                                            {follower.member_data.mb_nick}
                                        </div>
                                    </Stack>
                                    <Box>
                                        {props.action_enable && follower?.me_following[0]?.me_following ? (
                                            <Stack
                                                flexDirection={"row"}
                                                gap={"10px"}
                                                alignItems={"center"}
                                                className="btn btn-success fw-bold fs-6"
                                            >
                                                <i className="fa-solid fa-user"></i>
                                                <div>Following</div>
                                            </Stack>
                                        ) : (
                                            <Stack flexDirection={"row"} gap={"10px"}>
                                                <button
                                                    className="btn btn-success fw-bold fs-6"
                                                    onClick={() => handleSubscribeMember(follower)}
                                                >
                                                    <Stack
                                                        flexDirection={"row"}
                                                        gap={"10px"}
                                                        alignItems={"center"}
                                                    >
                                                        <i className="fa-solid fa-user-plus"></i>
                                                        <div>Follow Back</div>
                                                    </Stack>
                                                </button>
                                                <button
                                                    className="btn btn-success fw-bold fs-6"
                                                    onClick={() => handleUnsubscribeMember(follower)}
                                                >
                                                    <Stack
                                                        flexDirection={"row"}
                                                        gap={"10px"}
                                                        alignItems={"center"}
                                                    >
                                                        <i className="fa-solid fa-trash-can"></i>
                                                        <div>Delete</div>
                                                    </Stack>
                                                </button>

                                            </Stack>
                                        )}
                                    </Box>
                                </Stack>
                            )
                        }) : (
                            <div
                                className=" text-secondary rounded mb-5 fs-3 p-2"
                                style={{ backgroundColor: "#DBDDEF" }}
                            >
                                You don't have any Follower Memers yet
                            </div>
                        )
                    }
                </Stack>
                <Pagination
                    className="brand_pagination d-flex justify-content-center"
                    page={objSearch.page}
                    count={objSearch.page >= 3 ? objSearch.page + 1 : 3}
                    onChange={(e: any, newValue: number) => {
                        objSearch.page = newValue
                        setObjSearch({ ...objSearch })
                    }}
                    renderItem={(item) => (
                        <PaginationItem
                            components={{
                                previous: ArrowBack,
                                next: ArrowForward
                            }}
                            {...item}
                            color="secondary"
                        />
                    )}
                />
            </Stack>
        </Box>
    )
}

export default Followers