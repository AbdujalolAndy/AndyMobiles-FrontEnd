import React, { useEffect, useState } from "react"
import { Box, Stack } from "@mui/material"
import "../../css/features.css"


export const DownToUpBtn = () => {
    //Initilzaations
    const [scrolled, setScrolled] = useState<boolean>(false)

    //3 circle React Hook
    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 300)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return (
        <Box className={"d-flex justify-content-end down-to-up"}>
            <Box data-aos="fade-up" data-aos-delay={1000} className={scrolled ? "aos-animate" : ""}>
                <a href="#" className="down-to-up_item">
                    <i className="fa-solid fa-angles-up"></i>
                </a>
            </Box>
        </Box>
    )
}