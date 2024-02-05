import { Box, Container, Stack } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

export const OurBrands = () => {
    return (
        <Box className="mt-5 ourBrand">
            <div className="bg"></div>
            <Container>
                <h1 className="text-center">Shop by Brands</h1>
                <Stack className="brand_cards" flexDirection={"row"} gap={"20px"} justifyContent={"space-evenly"}>
                    {Array.from({ length: 5 }).map(ele => (
                        <div className="brand_card position-relative">
                            <div className="brand_img">
                                <img src="/icons/apple_logo.jpg" alt="apple" className="w-100" />
                            </div>
                            <div className="brand_title fs-2 text-center">
                                Apple
                            </div>
                        </div>
                    ))}
                </Stack>
            </Container>
        </Box>
    )
}