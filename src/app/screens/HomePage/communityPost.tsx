import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import Marquee from "react-fast-marquee";
import Moment from "react-moment"


//REDUX
import { createSelector } from "reselect"
import { Dispatch } from '@reduxjs/toolkit';
import { Blog } from '../../types/blog';
import { setCommunityPost } from "./slice"
import { retrieveCommunityPost } from './selector';
import CommunityServiceApi from '../../apiServices/communityServiceApi';
import { useDispatch, useSelector } from 'react-redux';
import { serverApi } from '../../../lib/config';
import { useHistory } from 'react-router-dom';


//SLICE
const actionDispatch = (dispatch: Dispatch) => ({
    setCommunityPost: (data: Blog[]) => (dispatch(setCommunityPost(data)))
})
//SELECTOR
const communityPostRetriever = createSelector(
    retrieveCommunityPost,
    (communityPost) => ({ communityPost })
)
function CommunityPosts() {
    //Initializations
    const [scrolled, setScrolled] = useState<boolean>(false)
    const { setCommunityPost } = actionDispatch(useDispatch())
    const { communityPost } = useSelector(communityPostRetriever)
    const history = useHistory()
    //three circle Hook
    useEffect(() => {
        const communityServiceApi = new CommunityServiceApi()
        communityServiceApi.getTargetCommunityPost({ limit: 10, filter: "newToOld", page: 1 })
            .then(data => setCommunityPost(data))
            .catch(err => console.log(err))
    }, [])

    //Handlers
    useEffect(() => {
        function scrollHandle() {
            if (window.scrollY > 2700) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", scrollHandle)
        return () => {
            window.removeEventListener("scroll", scrollHandle)
        }
    }, [])

    //handlers
    function handleOpenPost(post: Blog) {
        history.push(`/user-page/other/?mb_id=${post.mb_data._id}&art_id=${post._id}`)
    }

    return (
        <Box className="communityHomePosts">
            <Marquee
                pauseOnHover={true}
                style={{ padding: "20px 0" }}
            >
                {communityPost.map((blog: Blog, index: number) => {
                    const image_url = blog.blog_images[0] ? `${serverApi}/${blog.blog_images[0]}` : "/pictures/community/cute_girl.jpg";
                    const user_image = blog.mb_data.mb_image ? `${serverApi}/${blog.mb_data.mb_image}` : "/pictures/auth/default_user.svg"
                    return (
                        <Box className={"post_card"} onClick={() => handleOpenPost(blog)}>
                            <div className="post_img">
                                <div className="img_wrapper">
                                    <img src={image_url} alt="" className='w-100' />
                                </div>
                                <img src={image_url} alt="" />
                                <div className='post_type'>{blog.blog_category}</div>
                            </div>
                            <div className="post_body">
                                <Stack
                                    direction={"row"}
                                    className="post_info_header"
                                    gap={"20px"}
                                >
                                    <div
                                        style={{
                                            height: "50px",
                                            width: "50px"
                                        }}>
                                        <img
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                history.push(`/user-page/other/?mb_id=${blog.mb_data._id}`)
                                            }}
                                            src={user_image}
                                            alt=""
                                            style={{ width: "80%", borderRadius: "50%" }} />
                                    </div>
                                    <Box >
                                        <div className="author text-warning fw-bold" onClick={(e) => {
                                            e.stopPropagation()
                                            history.push(`/user-page/other/?mb_id=${blog.mb_data._id}`)
                                        }}>
                                            {blog.mb_data.mb_nick}
                                        </div>
                                        <Stack direction={"row"} gap={"5px"}>
                                            <div><i className="fa-solid fa-calendar-days"></i></div>
                                            <Moment format='YYYY-MM-DD'>
                                                {blog.createdAt}
                                            </Moment>
                                        </Stack>
                                    </Box>
                                </Stack>
                                <div className="post_title pt-3 fs-6">
                                    {blog.blog_title}
                                </div>
                            </div>
                        </Box>
                    )
                })}
            </Marquee>
        </Box>
    );
}

export default CommunityPosts;