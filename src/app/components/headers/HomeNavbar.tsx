
import React, { useEffect, useRef, useState } from "react"
import { Box, Stack, Container, Button, Menu, MenuItem } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules"
import { NavLink } from "react-router-dom";
import "swiper/css"
import "../../css/general.css"
import "../../css/navbar.css"

export const HomeNavbar = (props: any) => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
        //@ts-ignore
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        //@ts-ignore
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };;
    const [scrolled, setScrolled] = useState<Number>(0)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    }, [])
    return (
        <Box className="HomePage">
            <Stack className={"position-relative"} justifyContent={"center"} flexDirection={"row"}>
                <Swiper
                    simulateTouch={true}
                    loop={true}
                    spaceBetween={30}
                    speed={1000}
                    autoplay={{
                        delay: 6000,
                    }}
                    effect="fade"
                    navigation={true}
                    modules={[Autoplay, Navigation, EffectFade]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="homeSwiper"
                >
                    <SwiperSlide className=" slide_item_1 slide_vid position-relative">
                        <video
                            loop
                            muted
                            autoPlay
                            playsInline
                            disableRemotePlayback
                            className="w-100"
                        >
                            <source
                                type="video/mp4"
                                data-src="//images.samsung.com/is/content/samsung/assets/us/home/01172024/HOME_E3_Main-KV_1440x640_pc_LTR.mp4"
                                src="//images.samsung.com/is/content/samsung/assets/us/home/01172024/HOME_E3_Main-KV_1440x640_pc_LTR.mp4"
                            />
                        </video>
                        <Container>
                            <div className="slide_vid_info position-absolute">
                                <div className="vid-subtitle text-secondary">
                                    New
                                </div>
                                <div className="vid-title fs-1 text-secondary fw-bold">
                                    Galaxy S24 ULTRA
                                </div>
                                <button className="btn btn-warning text-light fw-bold">
                                    Purchase
                                </button>
                            </div>
                        </Container>
                    </SwiperSlide>
                    <SwiperSlide className="slide_item_2 ">
                        <Container className=" slide_item_2 d-flex justify-content-center align-items-center">
                            <div className="slide_vid_info">
                                <div className="vid-subtitle text-light">
                                    New
                                </div>
                                <div className="vid-title fs-1 text-secondary fw-bold">
                                    IPHONE 15 Pro
                                </div>
                                <button className="btn btn-warning text-light fw-bold">
                                    Purchase
                                </button>
                            </div>
                            <img src="/icons/apples.jpg" alt="" />
                        </Container>
                    </SwiperSlide>
                    <SwiperSlide className="slide_vid position-relative">
                        <video
                            loop
                            muted
                            autoPlay
                            playsInline
                            disableRemotePlayback
                            className="w-100"
                        >
                            <source
                                type="video/mp4"
                                data-src="//images.samsung.com/is/content/samsung/assets/us/home/01172024/HOME_E3_Main-KV_1440x640_pc_LTR.mp4"
                                src="//images.samsung.com/is/content/samsung/assets/us/home/01172024/HOME_E3_Main-KV_1440x640_pc_LTR.mp4"
                            />
                        </video>
                        <Container>
                            <div className="slide_vid_info position-absolute">
                                <div className="vid-subtitle text-secondary">
                                    New
                                </div>
                                <div className="vid-title fs-1 text-secondary fw-bold">
                                    Galaxy S24 ULTRA
                                </div>
                                <button className="btn btn-warning">
                                    Purchase
                                </button>
                            </div>
                        </Container>
                    </SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="14"></circle>
                        </svg>
                        <span ref={progressContent}>=</span>
                    </div>
                </Swiper>
                <Box className={scrolled ? "bg-light navbar-container" : 'navbar-container container'}>
                    <Box className={scrolled ? "navbar container" : "navbar"} flexDirection={"row"}>
                        <Box className="navbar-brand nav-item">
                            <NavLink to="/" className={"nav-link"}>
                                <span className="text-secondary">Andy</span><span className="text-warning">Mobiles</span>
                            </NavLink>
                        </Box>
                        <Stack className="nav navbar" flexDirection={"row"}>
                            <Box className="nav-item">
                                <NavLink to="/" className={scrolled ? "nav-link text-dark" : "nav-link text-secondary"} activeClassName="underline">
                                    Home
                                </NavLink>
                            </Box>
                            <Box className="nav-item" >
                                <NavLink to="/brands" className={scrolled ? "nav-link text-dark" : "nav-link text-secondary"} activeClassName="underline">
                                    Brands
                                </NavLink>
                            </Box>
                            <Box className="nav-item">
                                <NavLink to="/products" className={scrolled ? "nav-link text-dark" : "nav-link text-secondary"} activeClassName="underline">
                                    Products
                                </NavLink>
                            </Box>
                            <Box className="nav-item">
                                <NavLink to="/blogs" className={scrolled ? "nav-link text-dark" : "nav-link text-secondary"} activeClassName="underline">
                                    Blog
                                </NavLink>
                            </Box>
                            <Box className="nav-item">
                                <NavLink to="/user-page" className={scrolled ? "nav-link text-dark" : "nav-link text-secondary"} activeClassName="underline">
                                    My Page
                                </NavLink>
                            </Box>
                            <Box className="nav-item">
                                <NavLink to="/community" className={scrolled ? "nav-link text-dark" : "nav-link text-secondary"} activeClassName="underline">
                                    Community
                                </NavLink>
                            </Box>
                            <Box className="nav-item">
                                <NavLink to="/faq" className={scrolled ? "nav-link text-dark" : "nav-link text-secondary"} activeClassName="underline">
                                    Faq
                                </NavLink>
                            </Box>
                            <Box className="nav-item">
                                <NavLink to="/contact" className={scrolled ? "nav-link text-dark" : "nav-link text-secondary"} activeClassName="underline">
                                    Contact us
                                </NavLink>
                            </Box>
                        </Stack>
                        <Stack className="nav-features fs-5 gap-4" flexDirection={"row"} alignItems={"center"}>
                            <Box className="nav-item">
                                <NavLink to="/" className={scrolled ? "nav-link text-dark" : "nav-link text-secondary"}><i className="fa-solid fa-search"></i></NavLink>
                            </Box>
                            <Box className="nav-item">
                                <NavLink to="/" className={scrolled ? "nav-link text-dark position-relative" : "nav-link text-secondary position-relative"}>
                                    <i className="fa-regular fa-heart"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle bg-danger border border-light rounded-circle nav-badge text-center">
                                        0
                                    </span>
                                </NavLink>
                            </Box>
                            <Box className="nav-item">
                                <button  
                                className={scrolled ? "btn btn-outline-secondary border-0 position-relative" : "btn btn-outline-secondary border-0 position-relative"}
                                onClick={props.handleBasketOpen}
                                >
                                    <i className="fa-brands fa-shopify"></i>
                                    <span className="position-absolute nav-badge top-0 start-100 translate-middle bg-danger border border-light rounded-circle text-center">
                                        0
                                    </span>
                                </button>
                            </Box>
                            <Box className="nav-item auth_user dropdown">
                                <button className="btn btn-outline-secondary border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ boxShadow: "none" }}>
                                    <i className="fa-solid fa-user"></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" onClick={props.handleSignUpOpen}>Register</button></li>
                                    <li><button className="dropdown-item" >Track My Order</button></li>
                                </ul>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}