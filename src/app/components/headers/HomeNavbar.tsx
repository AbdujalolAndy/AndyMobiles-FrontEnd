
import React, { useEffect, useRef } from "react"
import { Box, Stack, Container, Button } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import { NavLink } from "react-router-dom";
import "swiper/css"
import "../../css/general.css"
import "../../css/navbar.css"

export const HomeNavbar = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
        //@ts-ignore
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        //@ts-ignore
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };;
    return (
        <Box className="HomePage">
            <Stack className={"position-relative"} justifyContent={"center"} flexDirection={"row"}>
                <Swiper
                    simulateTouch={true}
                    loop={true}
                    spaceBetween={30}
                    speed={1000}

                    autoplay={{
                        delay: 2500
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="homeSwiper"
                >
                    <SwiperSlide className="slide_image_1">
                        <Container>
                            <div className="slide_info fs-1">
                                <div className="slide-subtitle fs-6">
                                    New Release from sumsung
                                </div>
                                <div className="slide-title">
                                    GALAXY AI, Create yourself
                                </div>
                                <Button className="btn btn-outline-danger">
                                    Shop Now
                                </Button>
                            </div>
                        </Container>
                    </SwiperSlide>
                    <SwiperSlide className="slide_image_1">
                        <Container>
                            <div className="slide_info fs-1">
                                <div className="slide-subtitle fs-6">
                                    New Release from sumsung
                                </div>
                                <div className="slide-title">
                                    GALAXY AI, Create yourself
                                </div>
                                <Button className="btn btn-outline-danger">
                                    Shop Now
                                </Button>
                            </div>
                        </Container>

                    </SwiperSlide>
                    <SwiperSlide className="slide_image_1">
                        <Container>
                            <div className="slide_info fs-1">
                                <div className="slide-subtitle fs-6">
                                    New Release from sumsung
                                </div>
                                <div className="slide-title">
                                    GALAXY AI, Create yourself
                                </div>
                                <Button className="btn btn-outline-danger">
                                    Shop Now
                                </Button>
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
                <Container className="position-absolute top-0 navbar-container">
                    <Box className="navbar" flexDirection={"row"}>
                        <Box className="navbar-brand nav-item">
                            <NavLink to="/" className={"nav-link"}>
                                AndyMobiles
                            </NavLink>
                        </Box>
                        <Stack className="nav navbar" flexDirection={"row"}>
                            <Box className="nav-item">
                                <NavLink to="/" className={"nav-link"} activeClassName="underline">
                                    Home
                                </NavLink>
                            </Box>
                            <Box className="nav-item" >
                                <NavLink to="/brands" className={"nav-link"} activeClassName="underline">
                                    Brands
                                </NavLink>
                            </Box>
                            <Box className="nav-item">
                                <NavLink to="/products" className={"nav-link"} activeClassName="underline">
                                    Products
                                </NavLink>
                            </Box>
                            <Box className="nav-item">
                                <NavLink to="/blogs" className={"nav-link"} activeClassName="underline">
                                    Blog
                                </NavLink>
                            </Box>
                            <Box className="nav-item">
                                <NavLink to="/community" className={"nav-link"} activeClassName="underline">
                                    Community
                                </NavLink>
                            </Box>
                            <Box className="nav-item">
                                <NavLink to="/about" className={"nav-link"} activeClassName="underline">
                                    About us
                                </NavLink>
                            </Box>
                            <Box className="nav-item">
                                <NavLink to="/faq" className={"nav-link"} activeClassName="underline">
                                    Faq
                                </NavLink>
                            </Box>
                            <Box className="nav-item">
                                <NavLink to="/contact" className={"nav-link"} activeClassName="underline">
                                    Contact us
                                </NavLink>
                            </Box>
                        </Stack>
                        <Stack className="nav-features fs-5 gap-4" flexDirection={"row"}>
                            <Box className="nav-item">
                                <NavLink to="/" className="nav-link"><i className="fa-solid fa-search"></i></NavLink>
                            </Box>
                            <Box className="nav-item">
                                <NavLink to="/" className="nav-link"><i className="fa-solid fa-user"></i></NavLink>
                            </Box>
                            <Box className="nav-item">
                                <NavLink to="/" className="position-relative nav-link">
                                    <i className="fa-regular fa-heart"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle bg-danger border border-light rounded-circle nav-badge text-center">
                                        0
                                    </span>
                                </NavLink>
                            </Box>
                            <Box className="nav-item">
                                <NavLink to="/" className="nav-link position-relative">
                                    <i className="fa-brands fa-shopify"></i>
                                    <span className="position-absolute nav-badge top-0 start-100 translate-middle bg-danger border border-light rounded-circle text-center">
                                        0
                                    </span>
                                </NavLink>
                            </Box>
                        </Stack>
                    </Box>
                </Container>
            </Stack>
        </Box>
    )
}