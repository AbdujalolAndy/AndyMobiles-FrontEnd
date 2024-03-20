import React from "react";
import { Box, Stack, Container } from "@mui/material";
import { useEffect, useRef } from "react";
import Typed from "typed.js"

export const DealContract = () => {
    // Initilizations
    const textRef = useRef<any>()

    //3circle React Hook
    useEffect(() => {
        const options = {
            strings: ["ow, You can even pay monthly."],
            startDelay: 300,
            typeSpeed: 70,
            backSpeed: 50,
            backDelay: 150,
            smartBackspace: true,
            showCursor: false,
            loop: true,
        }
        const typed = new Typed(textRef.current, options)
    }, [])
    return (
        <Box className="deal-contract">
            <Container className="mt-5">
                <Stack flexDirection={"row"} justifyContent={"center"} gap={"100px"} alignItems={"center"}>
                    <div className="deal_img">
                        <img src="/icons/monthly_payment.jpg" alt="" />
                    </div>
                    <div className="deal_info">
                        <div
                            className="deal_title fs-1 fw-bold"
                            style={{ width: "572px" }}
                        >
                            N<span ref={textRef}></span>
                        </div>
                        <p className="text-secondary fs-6">We offer to our trustfull clients to buy product for monthly payment.</p>
                        <Stack flexDirection={"row"} alignItems={"center"} gap={"20px"}>
                            <div className="deal_learn">
                                <a href="/faq"> <span>LEARN MORE</span><i className="fa-solid ms-1 fa-arrow-up-right-from-square"></i></a>
                            </div>
                            <a href="/products" className="btn btn-outline-secondary rounded-pill ps-5 pe-5">Buy Now</a>
                        </Stack>
                        <div className="guarantee_img">
                            <img src="/logos/guarantee.png" alt="" />
                        </div>
                    </div>
                </Stack>
            </Container>
        </Box>
    )
}