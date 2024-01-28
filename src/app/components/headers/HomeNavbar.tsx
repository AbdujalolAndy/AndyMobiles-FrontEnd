import React from "react"
import { NavLink } from "react-router-dom"


export const HomeNavbar = () => {
    return (
        <div>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/brands">
                Brands
            </NavLink>
            <NavLink to="/products">
                Products
            </NavLink>
            <NavLink to="/blogs">
                Blog
            </NavLink>
            <NavLink to="/community">
                Community
            </NavLink>
            <NavLink to="/about">
                About us
            </NavLink>
            <NavLink to="/contact">
                Contact us
            </NavLink>
        </div>
    )
}