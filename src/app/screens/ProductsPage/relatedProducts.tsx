import { Favorite, RemoveRedEye } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const RelatedProducts = () => {
    const [chosenColor, setChosenColor] = useState<string>("");
    function handleColor(e: any) {
        setChosenColor(e.target.value)
    }
    return (
        <Box className={"container"}>
            <div className="fw-bold fs-3 mb-3 text-center">Recommended Products</div>
            <Swiper
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true
                }}
                slidesPerView={3}
                pagination={true}
                modules={[Pagination, Autoplay]}
            >
                {Array.from({ length: 5 }).map(ele => (
                    <SwiperSlide className="p-3">
                        <Stack className={"product_item mb-3"} flexDirection={"row"}>
                            <div className="product_img position-relative">
                                <button className="position-absolute"><Favorite style={{ fill: "red" }} /></button>
                                <img src="/icons/phone.jpg" alt="phone" className="w-100" />
                            </div>
                            <div className="product_item-info position-relative p-2">
                                <div className="product_name pb-2  fs-5 text-center fw-bold">Apple Iphone 15 Pro Max</div>
                                <div className="select_color">
                                    <select className="form-select" onChange={handleColor}>
                                        <option value="Black">Black</option>
                                        <option value="Blue">Blue</option>
                                        <option value="Gold">Gold</option>
                                        <option value="Green">Green</option>
                                        <option value="Gray">Gray</option>
                                    </select>
                                    <Stack flexDirection={"row"} gap={"3px"}>
                                        <div className="bg-dark" style={{ width: "15px", height: "15px", borderRadius: '50%', border: chosenColor === "Black" ? "2px solid red" : "" }}></div>
                                        <div style={{ width: "15px", height: "15px", borderRadius: '50%', backgroundColor: "blue", border: chosenColor === "Blue" ? "2px solid red" : "" }}></div>
                                        <div className="bg-warning" style={{ width: "15px", height: "15px", borderRadius: '50%', border: chosenColor === "Gold" ? "2px solid red" : "" }}></div>
                                        <div className="bg-success" style={{ width: "15px", height: "15px", borderRadius: '50%', border: chosenColor === "Green" ? "2px solid red" : "" }}></div>
                                        <div className="bg-secondary" style={{ width: "15px", height: "15px", borderRadius: '50%', border: chosenColor === "Gray" ? "2px solid red" : "" }}></div>
                                    </Stack>
                                </div>
                                <div className="product_item-info mt-3">
                                    <Stack className="actual_price" flexDirection={"row"}>
                                        <i className="fa-solid fa-circle-plus p-1 me-2"></i>
                                        <p>Actual Price: <b>$999.00</b></p>
                                    </Stack>
                                    <Stack className="display_info" flexDirection={"row"}>
                                        <i className="fa-solid fa-circle-plus p-1 me-2"></i>
                                        <p>Monthly cost deal over <b>24</b> months: <b>$44.00</b></p>
                                    </Stack>
                                </div>
                                <Stack className="product_statistics" flexDirection={"row"} gap={"15px"}>
                                    <div className="product_review d-flex gap-2">
                                        {"2"}
                                        <i className="fs-5 fa-solid fa-comment"></i>
                                    </div>
                                    <div className="product_likes d-flex gap-2">
                                        {"14"}
                                        <Favorite style={{ fill: "gray" }} />
                                    </div>
                                    <div className="product_views d-flex gap-2">
                                        {"25"}
                                        <RemoveRedEye />
                                    </div>
                                </Stack>
                            </div>
                        </Stack>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>

    )
}

export default RelatedProducts;