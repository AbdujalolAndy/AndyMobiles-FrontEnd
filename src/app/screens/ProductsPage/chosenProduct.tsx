import { Box, Stack, Tab, Tabs } from "@mui/material"
import { useParams } from "react-router-dom"
import InnerImageZoom from "react-inner-image-zoom";
import 'react-fancybox/lib/fancybox.css'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { TabContext, TabPanel } from "@mui/lab";
import ProductDescription from "./ProductDescription";
import ProductReview from "./productReview";
import ReviewWriting from "./reviewWriting";
import RelatedProducts from "./relatedProducts";

export const ChosenProduct = (props: any) => {
    const { product_id } = useParams<{ product_id: string }>()
    const [chosenFeature, setChosenFeature] = useState<string>("")
    const [quantity, setQuantity] = useState<number>(1);
    const [value, setValue] = useState<string>("1")
    function handleValue(order: string) {
        setValue(order)
    }
    function handleChosenFeature(feature: string) {
        setChosenFeature(feature)
    }
    function addAmount() {
        setQuantity(quantity + 1)
    }
    function removeAmount() {
        setQuantity(quantity - 1)
    }
    return (
        <Box className="chosen_product">
            <Stack className="container" flexDirection={"row"} justifyContent={"center"} gap="50px">
                <Box className={"product_imgs"}>
                    <div className="single_product_img">
                        <InnerImageZoom
                            src="https://images.unsplash.com/photo-1573612664822-d7d347da7b80?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NTQ4MTA4OA&ixlib=rb-1.2.1&q=85&w=1280"
                            zoomSrc="https://images.unsplash.com/photo-1573612664822-d7d347da7b80?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NTQ4MTA4OA&ixlib=rb-1.2.1&q=85&w=1600"
                            zoomType="hover"
                            zoomPreload={true}
                            fadeDuration={700}
                            hasSpacer={true}
                            className="inner_img"
                            fullscreenOnMobile={true}
                            hideHint={true}
                            zoomScale={0.5}
                        />
                        <Swiper
                            slidesPerView={5}
                            navigation={true}
                            modules={[Navigation]}
                            className="product_swiper mt-4"
                        >
                            {Array.from({ length: 10 }).map(ele => (
                                <SwiperSlide className="product_swiper_item">
                                    <img src="https://images.unsplash.com/photo-1573612664822-d7d347da7b80?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NTQ4MTA4OA&ixlib=rb-1.2.1&q=85&w=1280" alt="" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </Box>
                <Stack className="product_info">
                    <div className="product_name fs-3 mb-3 fw-bold">
                        Galaxy AI
                    </div>
                    <Stack className="product_review mb-3" flexDirection={"row"} gap={"10px"}>
                        <Stack flexDirection={"row"} gap={"3px"} alignItems={"center"} className="text-warning">
                            {Array.from({ length: 5 }).map(ele => (
                                <i className="fa-solid fa-star"></i>
                            ))}
                        </Stack>
                        <div className="review_count text-secondary">
                            2 reviews
                        </div>
                    </Stack>
                    <div className="availability mb-3 fs-5" >
                        Availability: <span className="text-danger fw-bold">2 In Stock</span>
                    </div>
                    <Stack className="product_price fw-bold fs-6 mb-4" flexDirection={"row"} gap={"5px"} alignItems={"center"}>
                        <div className="text-secondary"><s>$900.00</s></div>
                        <div>$110.00 </div>
                        <span className="btn btn-dark rounded-pill">Save -15%</span>
                    </Stack>
                    <Stack className="product_shipping mb-4" flexDirection={"row"} gap={"50px"}>
                        <Stack className="sipping" flexDirection={"row"} gap={"10px"} alignItems={"center"}>
                            <i className="fa-solid fa-truck-fast text-success fs-5"></i>
                            <div className="fw-bold">Shipping</div>
                        </Stack>
                        <Stack className="ask_about" flexDirection={"row"} gap={"10px"} alignItems={"center"}>
                            <i className="fa-regular fa-envelope fs-5 text-info"></i>
                            <div className="fw-bold">Ask About This Product</div>
                        </Stack>
                    </Stack>
                    <Stack className="mb-4" flexDirection={"row"} gap={"20px"} alignItems={"center"}>
                        <div className="fs-5">Storage:</div>
                        <Stack flexDirection={"row"} gap={"10px"}>
                            <Box className={"product_storage"} style={chosenFeature == "128" ? { borderColor: "black", color: "black" } : {}} onClick={() => handleChosenFeature("128")}>128 GB</Box>
                            <Box className={"product_storage"} style={chosenFeature == "256" ? { borderColor: "black", color: "black" } : {}} onClick={() => handleChosenFeature("256")}>256 GB</Box>
                            <Box className={"product_storage"} style={chosenFeature == "512" ? { borderColor: "black", color: "black" } : {}} onClick={() => handleChosenFeature("512")}>512 GB</Box>
                            <Box className={"product_storage"} style={chosenFeature == "1" ? { borderColor: "black", color: "black" } : {}} onClick={() => handleChosenFeature("1")}>1 TB</Box>
                        </Stack>
                    </Stack>
                    <Stack className="mb-4" flexDirection={"row"} gap={"40px"}>
                        <div className="fs-5">Color:</div>
                        <Stack flexDirection={"row"} gap={"10px"}>
                            <Box
                                className="product_color"
                                style={chosenFeature == "pink" ? { borderColor: "black", color: "black" } : {}}
                                onClick={() => handleChosenFeature("pink")}>
                                <img src="/icons/pink_phone.webp" alt="" className="w-50" />
                            </Box>
                            <Box
                                className="product_color"
                                style={chosenFeature == "blue" ? { borderColor: "black", color: "black" } : {}}
                                onClick={() => handleChosenFeature("blue")}>
                                <img src="/icons/blue_phone.webp" alt="" className="w-50" />
                            </Box>
                            <Box
                                className="product_color"
                                style={chosenFeature == "yellow" ? { borderColor: "black", color: "black" } : {}}
                                onClick={() => handleChosenFeature("yellow")}>
                                <img src="/icons/yellow_phone.webp" alt="" className="w-50" />
                            </Box>
                            <Box
                                className="product_color"
                                style={chosenFeature == "black" ? { borderColor: "black", color: "black" } : {}}
                                onClick={() => handleChosenFeature("black")}>
                                <img src="/icons/black_phone.webp" alt="" className="w-50" />
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack className="product_quantity mb-4" flexDirection={"row"} gap={"30px"}>
                        <div>Quantity:</div>
                        <Stack className="product_quantity_count" flexDirection={"row"} gap={"25px"}>
                            <div onClick={removeAmount}>-</div>
                            <div>{quantity}</div>
                            <div onClick={addAmount}>+</div>
                        </Stack>
                    </Stack>
                    <Stack className="mb-5" flexDirection={"row"} gap={"15px"}>
                        <button className="btn btn-dark">Monthly Fee</button>
                        <button className="btn btn-dark">ADD TO CART</button>
                        <button className="btn btn-light"><i className="fa-regular fa-heart"></i></button>
                    </Stack>
                    <Stack className="buy_terms mb-1" flexDirection={"row"} gap={"10px"}>
                        <input type="checkbox" id="buy_terms" />
                        <label htmlFor="buy_terms">I agree with the terms and conditions</label>
                    </Stack>
                    <button className="btn btn-warning mb-3">BUY IT NOW</button>
                    <hr />
                    <Box className="payment_guarantee mb-4">
                        <p>Guaranteed safe checkout</p>
                        <img src="https://lezada-demo.myshopify.com/cdn/shop/files/pay_1024x1024.png?v=1613763989" alt="gurantee" />
                    </Box>
                    <Stack className="product_share" flexDirection={"row"} gap={"30px"} alignItems={"center"}>
                        <div className="fs-5">Share via: </div>
                        <Stack flexDirection={"row"} gap={"10px"}>
                            <a href="http://instagram.com" className="nav-link fs-4">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="http://facebook.com" className="nav-link fs-4">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="http://twitter.com" className="nav-link fs-4">
                                <i className="fa-brands fa-square-twitter"></i>
                            </a>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <hr />
            <Box className={"container"}>
                <TabContext value={value}>
                    <Stack alignItems={"center"}>
                        <Tabs className={"mt-5s"}>
                            <Tab value={"1"} className={value == "1" ? "chosen_product_tab text-dark fw-bold" : "chosen_product_tab"} label="Description" onClick={() => handleValue("1")} />
                            <Tab value={"2"} className={value == "2" ? "chosen_product_tab text-dark fw-bold" : "chosen_product_tab"} label="Review" onClick={() => handleValue("2")} />
                            <Tab value={"3"} className={value == "3" ? "chosen_product_tab text-dark fw-bold" : "chosen_product_tab"} label="Leave A REVIEW" onClick={() => handleValue("3")} />
                        </Tabs>
                    </Stack>
                    <TabPanel value={"1"}>
                        <ProductDescription />
                    </TabPanel>
                    <TabPanel value={"2"}>
                        <ProductReview />
                    </TabPanel>
                    <TabPanel value={"3"}>
                        <ReviewWriting />
                    </TabPanel>
                </TabContext>
                <RelatedProducts/>
            </Box>
        </Box>
    )
}