import React, { useEffect, useState } from "react"
import { Box, Container, Popover, Stack, Typography } from "@mui/material"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Favorite } from "@mui/icons-material"
import ProductServiceApi from "../../apiServices/productServiceApi"

//redux
import { Dispatch } from "@reduxjs/toolkit";
import { Product } from "../../types/product";
import { setRandomNewProducts } from "./slice";
import { createSelector } from "reselect";
import { retrieveRandomProducts } from "./selector"
import { useDispatch, useSelector } from "react-redux"
import { serverApi } from "../../../lib/config"

//REDUX Slice
const actionDispatch = (dispatch: Dispatch) => ({
    setRandomNewProducts: (data: Product[]) => dispatch(setRandomNewProducts(data))
})

//REDUX SELECTOR
const randomNewProductsRetriever = createSelector(
    retrieveRandomProducts,
    (randomNewProducts) => ({ randomNewProducts })
)

export const NewProducts = () => {
    //Initializations
    const { setRandomNewProducts } = actionDispatch(useDispatch())
    const { randomNewProducts } = useSelector(randomNewProductsRetriever)
    const [chosenColor, setChosenColor] = useState<string>("");
    const [productIndex, setProductIndex] = useState({ key: "ss", index: 0 })
    //3 circle
    useEffect(() => {
        const productServiceApi = new ProductServiceApi();
        productServiceApi.getTargetProducts({ limit: 10, order: "new", random: true, contractMonth: [] })
            .then(data => setRandomNewProducts(data)).catch(err => {
                console.log(err)
            })
    }, [])

    //Handlers
    function handleSortColor(color: string, key: string, index: number) {
        const newObject = { key: key, index: index }
        setProductIndex(newObject)
        setChosenColor(color)
    }
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
                speed={1000}

                autoplay={
                    { delay: 1000, pauseOnMouseEnter: true }
                }
                modules={[Pagination, Navigation, Autoplay]}
                className="product-swiper cards"
            >
                {randomNewProducts.map((ele: Product, index) => {
                    let image_url_1 = `${serverApi}/${ele.product_images[0]}`,
                        image_url_2 = `${serverApi}/${ele.product_images[1]}`,
                        discount_price = ele.product_price - (ele.product_price * (ele.product_discount / 100))
                    return (
                        <SwiperSlide className="swiper-card">
                            <Box className={"slider-card border-0"} id="card">
                                <div className="card-img product_fade">
                                    <img
                                        src={ele._id == productIndex.key ? `${serverApi}/${ele.product_related_colors[productIndex.index].product_images[0]}` : image_url_1}
                                        alt="phone1"
                                        className="product_img_1"
                                    />
                                    <img
                                        src={ele._id == productIndex.key ? `${serverApi}/${ele.product_related_colors[productIndex.index].product_images[0]}` : image_url_2}
                                        alt="phone1"
                                        className="product_img_2"
                                    />
                                    <Stack className="card-features" gap="5px">
                                        <Box className={"d-flex justify-content-center align-items-center"}><Favorite sx={{ fill: "red" }} /></Box>
                                    </Stack>
                                    <Stack
                                        flexDirection={"row"}
                                        justifyContent={"center"}
                                        alignItems={"center"}
                                        gap={"7px"}
                                        className="product_sort"
                                        flexWrap={"wrap"}
                                    >
                                        {
                                            ele?.product_related_colors?.map((product: any, index: number) => {
                                                let product_color = product.product_color.toLowerCase()
                                                return (
                                                    <div className="color-select">
                                                        <button
                                                            type="button"
                                                            style={chosenColor == `${product_color}${product._id}` ? { border: `2px solid ${product_color === "white" ? "gray" : product_color}` } : {}}
                                                            onClick={() => handleSortColor(`${product_color}${product._id}`, ele._id, index)}
                                                        >
                                                            <img src={`/pictures/products/${product_color}_phone.webp`} alt="" />
                                                        </button>
                                                        <span>
                                                            {product_color}
                                                        </span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Stack>
                                    <div className="bg-danger position-absolute card-img_badge">NEW</div>
                                </div>
                                <Stack flexDirection={"row"} justifyContent={"space-between"} className="mt-3 ps-1 pe-1">
                                    <div className="card-text fs-6 fw-bold text-warning">
                                        {ele.product_name}
                                    </div>
                                    <Stack
                                        flexDirection={"row"}
                                        gap={'5px'}
                                        sx={{ fontSize: "12px" }}
                                        alignItems={"center"}
                                    >
                                        <Stack flexDirection={"row"} gap={'3px'} alignItems={"center"}>
                                            <i className="fa-solid fa-comments"></i>
                                            {ele.product_comments ?? "0"}
                                        </Stack>
                                        |
                                        <Stack flexDirection={"row"} gap={'3px'} alignItems={"center"}>
                                            <i className="fa-solid fa-heart"></i>
                                            {ele.product_likes ?? "0"}
                                        </Stack>
                                        |
                                        <Stack flexDirection={"row"} gap={'3px'} alignItems={"center"}>
                                            <i className="fa-solid fa-eye"></i>
                                            {ele.product_views ?? "0"}
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <div className="card-text mt-3 fw-bold">
                                    {ele.product_discount ? (<div>{discount_price}₩<span className="text-secondary ms-2"><s>{ele.product_price}₩</s></span></div>) : ele.product_price + "₩"}
                                </div>
                            </Box>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Container>
    )
}