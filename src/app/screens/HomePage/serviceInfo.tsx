import { Box, Stack } from "@mui/material"
import { NavLink } from "react-router-dom"

const ServiceInfo = () => {
    return (
        <Box className="serviceInfoPage">
            <Stack className="service-wrapper">
                <Stack className="serviceInfo-body container" flexDirection={"row"} justifyContent={"space-evenly"}>
                    <div className="col-4 text-center container">
                        <div className="title text-light fs-4 fw-bold">
                            Free shipping
                        </div>
                        <div className="service_img">
                            <img src="/icons/deliver_car.gif" alt="" />
                        </div>
                        <p className="text-light fw-bold fs-6 ps-5 pe-5">Safe, contact-free delivery to your home, inside or outside.</p>
                        <a href="/faq">
                            <span className="text-info link_info">
                                LEARN MORE
                            </span>
                            <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
                        </a>
                    </div>
                    <div className="col-4 text-center container">
                        <div className="title text-light fs-4 fw-bold">
                            Free returns
                        </div>
                        <div className="service_img">
                            <img src="/icons/return.png" alt="" />
                        </div>
                        <p className="text-light fw-bold fs-6 ps-5 pe-5">Free returns up to 15 days after delivery of an appliance.</p>
                        <a href="/faq">
                            <a href="/faq" className="text-info link_info">
                                LEARN MORE
                            </a>
                            <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
                        </a>
                    </div>
                    <div className="col-4 text-center container">
                        <div className="title text-light fs-4 fw-bold">
                            Contact Us
                        </div>
                        <img src="/icons/globe.gif" alt="" />
                        <p className="text-light fw-bold fs-6 ps-5 pe-5">Safe, contact-free delivery to your home, inside or outside.</p>
                        <NavLink to="/faq">
                            <span className="text-info link_info">
                                LEARN MORE
                            </span>
                            <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
                        </NavLink>
                    </div>
                </Stack>
            </Stack>
        </Box>
    )
}

export default ServiceInfo