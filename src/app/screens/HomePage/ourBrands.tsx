import { Box, Container, Stack } from "@mui/material"
import { delay } from "@reduxjs/toolkit/dist/utils"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export const OurBrands = () => {
    const logo_Colors = ["#BCE7F0", "#F9CADA", "#1B448B", "#FBE285", "#F0F0F0", "#858DFA"];
    const logos = []
    return (
        <Box className="mt-5 ourBrand mb-5">
            <div className="bg"></div>
            <Container>
                <h1 className="text-center fw-bold">Shop by Brands</h1>
                <Swiper
                    slidesPerView={4}
                    pagination={{clickable:true}}
                    autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
                    modules={[Autoplay, Pagination]}
                >
                    <Stack className="brand_cards" flexDirection={"row"} justifyContent={"space-evenly"}>
                        {Array.from({ length: 5 }).map((ele, index) => (
                            <SwiperSlide>
                                <Stack className="brand_card" style={{ backgroundColor: logo_Colors[index] }} alignItems={"center"}>
                                    <div className="brand_img">
                                        <img src="/logos/apple_logo.png" alt="apple" className="brand_logo" />
                                    </div>
                                    <div className="brand_title fs-2 text-center fw-bold">
                                        Apple
                                    </div>
                                </Stack>
                            </SwiperSlide>
                        ))}
                    </Stack>

                </Swiper>

            </Container>
        </Box>
    )
}