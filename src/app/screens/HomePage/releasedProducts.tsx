import { Box, Button, Container, Stack } from "@mui/material"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Favorite } from "@mui/icons-material"
import { useState } from "react"

export const NewProducts = () => {
    const [chosenColor, setChosenColor] = useState<string>("");
    function handleSortColor(color: string) { setChosenColor(color) }
    return (
        <Container className="hot-products mt-5">
            <Box className="text-center  hot-products-title">
                Shop all latest offers
            </Box>
            <Swiper
                slidesPerView={5}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="product-swiper cards"
            >
                {Array.from({ length: 10 }).map((ele, index) => (
                    <SwiperSlide className="swiper-card">
                        <Box className={"slider-card border-0"} id="card">
                            <div className="card-img">
                                <img src={`/icons/yellow_phone.webp`} alt="phone1" />
                                <Stack className="card-features" gap="5px">
                                    <Box><Favorite sx={{ fill: "" }} /></Box>
                                    <Box><i className="fa-solid fa-square-up-right"></i></Box>
                                    <Box><i className="fa-solid fa-sack-dollar text-dark fs-5"></i></Box>
                                </Stack>
                                <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"} gap={"7px"} className="product_sort" flexWrap={"wrap"}>
                                    <button
                                        type="button"
                                        style={chosenColor == `red${index}` ? { border: "2px solid red" } : {}}
                                        data-bs-toggle="top"
                                        data-bs-title="Popover title"
                                        data-bs-content="Red"
                                        onClick={() => handleSortColor(`red${index}`)}
                                    >
                                        <img src="/icons/phone_green.webp" alt="" />
                                    </button>
                                    <button
                                        type="button"
                                        style={chosenColor == `blue${index}` ? { border: "2px solid blue" } : {}}
                                        data-bs-toggle="top"
                                        data-bs-title="Popover title"
                                        data-bs-content="Red"
                                        onClick={() => handleSortColor(`blue${index}`)}
                                    >
                                        <img src="/icons/blue_phone.webp" alt="" />
                                    </button>
                                    <button
                                        type="button"
                                        style={chosenColor == `pink${index}` ? { border: "2px solid pink" } : {}}
                                        data-bs-toggle="top"
                                        data-bs-title="Popover title"
                                        data-bs-content="Red"
                                        onClick={() => handleSortColor(`pink${index}`)}
                                    >
                                        <img src="/icons/pink_phone.webp" alt="" />
                                    </button>
                                    <button
                                        type="button"
                                        style={chosenColor == `yellow${index}` ? { border: "2px solid yellow" } : {}}
                                        data-bs-toggle="top"
                                        data-bs-title="Popover title"
                                        data-bs-content="Red"
                                        onClick={() => handleSortColor(`yellow${index}`)}
                                    >
                                        <img src="/icons/yellow_phone.webp" alt="" />
                                    </button>
                                    <button
                                        type="button"
                                        style={chosenColor == `black${index}` ? { border: "2px solid black" } : {}}
                                        data-bs-toggle="top"
                                        data-bs-title="Popover title"
                                        data-bs-content="Red"
                                        onClick={() => handleSortColor(`black${index}`)}
                                    >
                                        <img src="/icons/black_phone.webp" alt="" />
                                    </button>
                                </Stack>
                                <div className="bg-danger position-absolute rounded-pill">NEW</div>
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