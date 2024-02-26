import { Box, Container, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


export const ProductNavbar = (props: any) => {
    const current_url = `/${props.addressTitle.toLowerCase()}`
    const [scrolled, setScrolled] = useState<boolean>(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }

        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    }, [])
    return (
        <Box className="productNavbar position-relative">
            
            <Stack 
            style={scrolled?{}:{zIndex:"9", position:"relative"}}
            className={scrolled ? "bg-light navbar-container" : ' bg-light container'}>
                <Box className={scrolled ? "navbar container" : " text-light navbar container position-absolute "} flexDirection={"row"}>
                    <Box className="navbar-brand nav-item">
                        <NavLink to="/" className={"nav-link text-light"}>
                            <span className={scrolled ? "text-dark" : "text-light"}>Andy</span><span className="text-warning">Mobiles</span>
                        </NavLink>
                    </Box>
                    <Stack className="nav navbar" flexDirection={"row"}>
                        <Box className="nav-item">
                            <NavLink to="/" className={scrolled ? "nav-link" : "nav-link text-light"} >
                                Home
                            </NavLink>
                        </Box>
                        <Box className="nav-item" >
                            <NavLink to="/brands" className={scrolled ? "nav-link" : "nav-link text-light"} activeClassName="underline">
                                Brands
                            </NavLink>
                        </Box>
                        <Box className="nav-item">
                            <NavLink to="/products" className={scrolled ? "nav-link" : "nav-link text-light"} activeClassName="underline">
                                Products
                            </NavLink>
                        </Box>
                        <Box className="nav-item">
                            <NavLink to="/blogs" className={scrolled ? "nav-link" : "nav-link text-light"} activeClassName="underline">
                                Blog
                            </NavLink>
                        </Box>
                        <Box className="nav-item">
                            <NavLink to="/user-page" className={scrolled ? "nav-link" : "nav-link text-light"} activeClassName="underline">
                                My Page
                            </NavLink>
                        </Box>
                        <Box className="nav-item">
                            <NavLink to="/track-order" className={scrolled ? "nav-link" : "nav-link text-light"} activeClassName="underline">
                                Track Order
                            </NavLink>
                        </Box>
                        <Box className="nav-item">
                            <NavLink to="/faq" className={scrolled ? "nav-link" : "nav-link text-light"} activeClassName="underline">
                                Faq
                            </NavLink>
                        </Box>
                        <Box className="nav-item">
                            <NavLink to="/contact" className={scrolled ? "nav-link" : "nav-link text-light"} activeClassName="underline">
                                Contact us
                            </NavLink>
                        </Box>
                    </Stack>
                    <Stack className="nav-features fs-5 gap-4" flexDirection={"row"}>
                        <Box className="nav-item">
                            <NavLink to="/" className={scrolled ? "nav-link" : "nav-link text-light"}><i className="fa-solid fa-search"></i></NavLink>
                        </Box>
                        <Box className="nav-item">
                            <NavLink to="/" className={scrolled ? "nav-link" : "nav-link text-light"}><i className="fa-solid fa-user"></i></NavLink>
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
            </Stack>
            <Box className="navbar-address">
                <Container>
                    <Box className="address-title text-warning">
                        {props.addressTitle}
                    </Box>
                    <Box className="address-link">
                        <NavLink to='/' className={"text-light"}>
                            Home{" "}
                        </NavLink>
                        <NavLink to={current_url}>
                            / {props.addressTitle}
                        </NavLink>
                    </Box>
                </Container>
            </Box>
            <Swiper
            centeredSlides={true}
                effect="fade"
                autoplay={
                    { delay: 6000 }
                }
                modules={[Autoplay, EffectFade]}
                className="product_ads_swiper"
            >
                <SwiperSlide>
                    <video
                        loop
                        muted
                        playsInline={true}
                        autoPlay
                    >
                        <source
                            src="https://www.apple.com/105/media/kr/iphone-15-pro/2023/2f337511-a940-4b57-b89c-1512b7507777/anim/hero/medium_2x.mp4"
                            type="video/mp4"
                            data-src="https://www.apple.com/105/media/kr/iphone-15-pro/2023/2f337511-a940-4b57-b89c-1512b7507777/anim/hero/medium_2x.mp4"
                        />
                    </video>
                </SwiperSlide>
                <SwiperSlide>
                    <video
                        loop
                        muted
                        playsInline={true}
                        autoPlay
                        className="w-100"
                    >
                        <source
                            type="video/mp4"
                            data-src="//images.samsung.com/is/content/samsung/assets/us/home/01172024/HOME_E3_Main-KV_1440x640_pc_LTR.mp4"
                            src="//images.samsung.com/is/content/samsung/assets/us/home/01172024/HOME_E3_Main-KV_1440x640_pc_LTR.mp4"
                        />
                    </video>
                </SwiperSlide>
            </Swiper>
        </Box>
    )
}