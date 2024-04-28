import { Stack } from "@mui/material"
import { NavLink } from "react-router-dom"
import { verifiedMemberData } from "../../apiServices/verified"

export const MobileNav = () => {
    return (
        <Stack
            className="bottom_nav d-none"
            flexDirection={"row"}
            justifyContent={"space-evenly"}
        >
            <NavLink to="/brands" activeClassName="selected_nav">
                <Stack alignItems={"center"}>
                    <div><i className="fa-solid fa-shop"></i></div>
                    <div className="bottom_nav_text">BRANDS</div>
                </Stack>
            </NavLink>
            <NavLink to="/products" activeClassName="selected_nav">
                <Stack alignItems={"center"}>
                    <div><i className="fa-solid fa-mobile-screen"></i></div>
                    <div className="bottom_nav_text">PRODUCTS</div>
                </Stack>
            </NavLink>
            <NavLink to="/blogs" activeClassName="selected_nav">
                <Stack alignItems={"center"}>
                    <div><i className="fa-solid fa-comment-dots"></i></div>
                    <div className="bottom_nav_text">BLOG</div>
                </Stack>
            </NavLink>
            <NavLink to="/" activeClassName="selected_nav">
                <Stack alignItems={"center"} >
                    <div>
                        <i className="fa-solid fa-house"></i>
                    </div>
                    <div className="bottom_nav_text">HOME</div>
                </Stack>
            </NavLink>
            {
                verifiedMemberData ? (<div>
                    <NavLink to="/user-page" activeClassName="selected_nav">
                        <Stack alignItems={"center"}>
                            <div><i className="fa-solid fa-user"></i></div>
                            <div className="bottom_nav_text">MY PAGE</div>
                        </Stack>
                    </NavLink>
                    <NavLink to="/track-order" activeClassName="selected_nav">
                        <Stack alignItems={"center"}>
                            <div><i className="fa-solid fa-truck-fast"></i></div>
                            <div className="bottom_nav_text">TRACK ORDER</div>
                        </Stack>
                    </NavLink>
                </div>
                ) : null
            }
            <NavLink to="/faq" activeClassName="selected_nav">
                <Stack alignItems={"center"}>
                    <div><i className="fa-solid fa-question"></i></div>
                    <div className="bottom_nav_text">FAQ</div>
                </Stack>
            </NavLink>
        </Stack>
    )
}