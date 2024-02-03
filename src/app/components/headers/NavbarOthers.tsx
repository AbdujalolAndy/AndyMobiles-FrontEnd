import React from "react"
import { Box, Stack, Container, Button } from "@mui/material"
import { NavLink } from "react-router-dom";
import "../../css/navbar.css"

export const NavbarOthers = (props: any) => {
    const current_url = `/${props.addressTitle.toLowerCase()}`
    return (
        <Box className="otherNavbar">
            <Container className="navbar-container">
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
            <Box className="navbar-address">
                <Container>
                    <Box className="address-title">
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