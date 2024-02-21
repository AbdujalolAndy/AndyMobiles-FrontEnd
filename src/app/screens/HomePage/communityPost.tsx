import React, { useEffect, useState } from 'react';
import { Box, Container, Stack } from '@mui/material';
import Marquee from "react-fast-marquee"
function CommunityPosts() {
    const [scrolled, setScrolled] = useState<boolean>(false)
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

    return (
        <Box className="communityHomePosts">
            <Marquee
                pauseOnHover={true}
                style={{ padding: "20px 0" }}
            >
                {Array.from({ length: 10 }).map((ele, index) => (
                    <>
                        <Box className={"post_card"}>
                            <img src="/icons/blog_1.jpg" alt="" />
                            <div className="post_body">
                                <Stack direction={"row"} className="post_info_header" gap={"10px"}>
                                    <Stack direction={"row"} gap={"5px"}>
                                        <div><i className="fa-solid fa-calendar-days"></i></div>
                                        <div>2024.01.30</div>
                                    </Stack>
                                    <span>|</span>
                                    <div className="author text-warning fw-bold">
                                        Shon
                                    </div>
                                </Stack>
                                <div className="post_title pt-3">
                                    Power of every smartphone is amazing
                                </div>
                                <div className="post_text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </div>
                            </div>
                        </Box>
                    </>
                ))}
            </Marquee>
        </Box>
    );
}

export default CommunityPosts;