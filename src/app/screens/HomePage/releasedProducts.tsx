import React, { useEffect, useState } from "react"
import { Box, Container, Stack } from "@mui/material"
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
    function handleSortColor(color: string, key: string, index: number) {
        const newObject = { key: key, index: index }
        setProductIndex(newObject)
        setChosenColor(color)
    }

    //3 circle
    useEffect(() => {
        const productServiceApi = new ProductServiceApi();
        productServiceApi.getTargetProducts({ limit: 10, order: "new", random: true })
            .then(data => setRandomNewProducts(data)).catch(err => {
                console.log(err)
            })
    }, [])

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
                    let image_url = `${serverApi}/${ele.product_images[0]}`,
                        discount_price = ele.product_price - (ele.product_price * (ele.product_discount / 100))
                    return (
                        <SwiperSlide className="swiper-card">
                            <Box className={"slider-card border-0"} id="card">
                                <div className="card-img" style={{ transition: "2s ease-in-out" }}>
                                    <img src={ele._id == productIndex.key ? `${serverApi}/${ele.product_related_colors[productIndex.index].product_images[0]}` : image_url} alt="phone1" />
                                    <Stack className="card-features" gap="5px">
                                        <Box><Favorite sx={{ fill: "" }} /></Box>
                                        <Box><i className="fa-solid fa-square-up-right"></i></Box>
                                        <Box><i className="fa-solid fa-sack-dollar text-dark fs-5"></i></Box>
                                    </Stack>
                                    <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"} gap={"7px"} className="product_sort" flexWrap={"wrap"}>
                                        {
                                            ele?.product_related_colors?.map((product: any, index: number) => {
                                                let product_color = product.product_color.toLowerCase()
                                                console.log(product_color)
                                                return (
                                                    <button
                                                        type="button"
                                                        style={chosenColor == `${product_color}${product._id}` ? { border: `2px solid ${product_color === "white" ? "gray" : product_color}` } : {}}
                                                        data-bs-toggle="top"
                                                        data-bs-title="Popover title"
                                                        data-bs-content="Red"
                                                        onClick={() => handleSortColor(`${product_color}${product._id}`, ele._id, index)}
                                                    >
                                                        <img src={`/pictures/products/${product_color}_phone.webp`} alt="" />
                                                    </button>
                                                )
                                            })

                                        }
                                    </Stack>
                                    <div className="bg-danger position-absolute ">NEW</div>
                                </div>
                                <div className="card-text mt-3 fs-5">
                                    {ele.product_name}
                                </div>
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