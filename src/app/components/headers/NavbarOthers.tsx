import React, { useEffect, useState } from "react"
import { Box, Stack, Container, Button } from "@mui/material"
import { NavLink } from "react-router-dom";
import "../../css/navbar.css"

export const NavbarOthers = (props: any) => {
    const wallpapers: any = {
        Brands:"https://beb-consultancy.b-cdn.net/wp-content/uploads/2018/10/Contracts-Agreements.jpg",
        Faq: "https://searchengineland.com/wp-content/seloads/2015/06/question-ask-faq-raise-hand-ss-1920.jpg",
        Community: "https://img.freepik.com/free-vector/people-crowd-diverse-characters-waving-hand_107791-14082.jpg?w=1380&t=st=1707456518~exp=1707457118~hmac=3265d932d404d7892ad0eac511bc5923cddc8e6fa6c8abdf89635bbb25fe940c",
        Blogs: "https://content-writing-india.com/blog/wp-content/uploads/2018/03/1080px.jpg",
        Contact:"https://weddingsathilton.com/wp-content/uploads/2021/04/getintouch.jpg",
        "My Page":"https://m-cdn.phonearena.com/images/article/64576-wide-two_1200/The-Best-Phones-to-buy-in-2024---our-top-10-list.webp?1707223752"
    }
    const image_url = wallpapers[props.addressTitle]
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
        <Box className="otherNavbar position-relative">
            <div className="navbar_wrapper"></div>
            <Stack className={scrolled ? "bg-light navbar-container" : ' bg-light container'}>
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
                            <NavLink to="/community" className={scrolled ? "nav-link" : "nav-link text-light"} activeClassName="underline">
                                Community
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
            <Box className="navbar-address" style={{ backgroundImage: `url(${image_url})` }}>
                <Container>
                    <Box className="address-title text-warning">
                        {props.addressTitle}
                    </Box>
                    <Box className="address-link">
                        <NavLink to='/'>
                            Home{" "}
                        </NavLink>
                        <NavLink to={current_url}>
                            / {props.addressTitle}
                        </NavLink>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}