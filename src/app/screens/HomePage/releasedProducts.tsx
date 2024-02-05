import { Box, Button, Container, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Favorite } from "@mui/icons-material"

const phone_list = ["never_settle.jpg", "real_me.jpg", "never_settle.jpg", "real_me.jpg", "never_settle.jpg", "real_me.jpg", "never_settle.jpg", "real_me.jpg", "never_settle.jpg", "real_me.jpg"]
export const NewProducts = () => {
    return (
        <Container className="hot-products mt-5">
            <Box className="text-center  hot-products-title">
                Coming Soon
            </Box>
            <Box className="hot-product-subtitle">
                Hurry up to buy, and experiece ultimate power of SmartPhones
            </Box>
            <Swiper
                slidesPerView={5}
                loop={true}
                autoplay={
                    {
                        delay: 1000,
                        pauseOnMouseEnter: true
                    }
                }
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="product-swiper cards"
            >
                {Array.from({ length: 10 }).map((ele, index) => (
                    <SwiperSlide className="swiper-card">
                        <Box className={"slider-card border-0"} id="card">
                            <div className="card-img">
                                <img src={`/products/${phone_list[index]}`} alt="phone1" />
                                <Stack className="card-features" gap="5px">
                                    <Box><Favorite sx={{ fill: "red" }} /></Box>
                                    <Box><i className="fa-solid fa-search"></i></Box>
                                    <Box><i className="fa-solid fa-wallet text-danger"></i></Box>
                                </Stack>
                                <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"} gap={"10px"} className="product_sort">
                                    <button type="button" data-bs-toggle="top" data-bs-title="Popover title" data-bs-content="Red">
                                        <img src="/icons/phone_green.webp" className="w-100" alt="" />
                                    </button>
                                    <button type="button" data-bs-toggle="top" data-bs-title="Popover title" data-bs-content="Red">
                                        <img src="/icons/blue_phone.webp" className="w-100" alt="" />
                                    </button>
                                    <button type="button" data-bs-toggle="top" data-bs-title="Popover title" data-bs-content="Red">
                                        <img src="/icons/pink_phone.webp" className="w-100" alt="" />
                                    </button>
                                    <button type="button" data-bs-toggle="top" data-bs-title="Popover title" data-bs-content="Red">
                                        <img src="/icons/yellow_phone.webp" className="w-100" alt="" />
                                    </button>
                                    <button type="button" data-bs-toggle="top" data-bs-title="Popover title" data-bs-content="Red">
                                        <img src="/icons/black_phone.webp" className="w-100" alt="" />
                                    </button>
                                </Stack>
                            </div>
                            <div className="card-text mt-3">
                                1. This is so cool phone
                            </div>
                            <div className="card-text mt-3 fw-bold">
                                $110.00 <span className="text-secondary"><s>$130.00</s></span>
                            </div>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}