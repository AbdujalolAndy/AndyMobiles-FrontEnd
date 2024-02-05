import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import "../../css/communityPost.css"


function CommunityPosts() {
    const [scrolled, setScrolled] = useState<boolean>(false)
    useEffect(() => {
        function scrollHandle() {
            if (window.scrollY > 2700) {
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", scrollHandle)
        return()=>{
            window.removeEventListener("scroll", scrollHandle)
        }
    }, [])
    function optionHandle(ele: any) {
        document.querySelectorAll(".option").forEach((ele) => ele.classList.remove("active"))
        ele.target.classList.add("active")
    };
    return (
        <Box className="communityPage">
            <Box className='d-flex justify-content-center position-relative'>
                <div className="option-wrapper position-absolute"></div>
                <div data-aos="fade-right" className={scrolled?"options aos-animate container":""}>
                    <div className={"option active"} onClick={optionHandle} style={{ backgroundImage: "url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg)" }}>
                        <div className="shadow"></div>
                        <div className="label">
                            <div className="icon">
                                <i className="fas fa-walking"></i>
                            </div>
                            <div className="info">
                                <div className="main">Blonkisoaz</div>
                                <div className="sub">Omuke trughte a otufta</div>
                            </div>
                        </div>
                    </div>
                    <div className={"option"} onClick={optionHandle} style={{ backgroundImage: "url(https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg)" }}>
                        <div className="shadow"></div>
                        <div className="label">
                            <div className="icon">
                                <i className="fas fa-snowflake"></i>
                            </div>
                            <div className="info">
                                <div className="main">Oretemauw</div>
                                <div className="sub">Omuke trughte a otufta</div>
                            </div>
                        </div>
                    </div>
                    <div className={"option"} onClick={optionHandle} style={{ backgroundImage: "url(https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg)" }}>
                        <div className="shadow"></div>
                        <div className="label">
                            <div className="icon">
                                <i className="fas fa-tree"></i>
                            </div>
                            <div className="info">
                                <div className="main">Iteresuselle</div>
                                <div className="sub">Omuke trughte a otufta</div>
                            </div>
                        </div>
                    </div>
                    <div className={"option"} onClick={optionHandle} style={{ backgroundImage: "url(https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg)" }}>
                        <div className="shadow"></div>
                        <div className="label">
                            <div className="icon">
                                <i className="fas fa-tint"></i>
                            </div>
                            <div className="info">
                                <div className="main">Idiefe</div>
                                <div className="sub">Omuke trughte a otufta</div>
                            </div>
                        </div>
                    </div>
                    <div className={"option"} onClick={optionHandle} style={{ backgroundImage: "url(https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg)" }}>
                        <div className="shadow"></div>
                        <div className="label">
                            <div className="icon">
                                <i className="fas fa-sun"></i>
                            </div>
                            <div className="info">
                                <div className="main">Inatethi</div>
                                <div className="sub">Omuke trughte a otufta</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
    );
}

export default CommunityPosts;