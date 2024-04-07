import React, { useEffect, useRef, } from "react"
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
import { stringSplitterHandler } from "../../components/features/stringSplitter"
import { useHistory, useLocation } from "react-router-dom"
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from "../../../lib/sweetAlert"
import { MemberServiceApi } from "../../apiServices/memberServiceApi"
import Definer from "../../../lib/Definer"

//REDUX Slice
const actionDispatch = (dispatch: Dispatch) => ({
    setRandomNewProducts: (data: Product[]) => dispatch(setRandomNewProducts(data))
})

//REDUX SELECTOR
const randomNewProductsRetriever = createSelector(
    retrieveRandomProducts,
    (randomNewProducts) => ({ randomNewProducts })
)

export const NewProducts = (props: any) => {
    //Initializations
    const { setRandomNewProducts } = actionDispatch(useDispatch())
    const { randomNewProducts } = useSelector(randomNewProductsRetriever)
    const history = useHistory();
    const location = useLocation()
    const refs: any = useRef([])
    //3 circle
    useEffect(() => {
        const productServiceApi = new ProductServiceApi();
        productServiceApi.getTargetProducts(props.searchProducts)
            .then(data => setRandomNewProducts(data)).catch(err => {
                console.log(err)
            })
    }, [])

    //Handlers
    function handleOpenChosenOne(e: any, key: string) {
        if (location.pathname.includes("/products/product/")) {
            history.push(`/products/product/${key}`)
            window.location.reload()
        } else {
            history.push(`/products/product/${key}`)
        }
    }
    async function handleLikeItem(e: any, product: Product) {
        try {
            const memberServiceApi = new MemberServiceApi();
            const result = await memberServiceApi.likenItem(product._id, "PRODUCT", product);
            if (result) {
                e.target.style.fill = "red"
                e.target.classList.add("animate-heart")
                refs.current[product._id].innerHTML++
                await sweetTopSmallSuccessAlert("success", 700, false)
            } else {
                e.target.style.fill = "white"
                e.target.classList.remove("animate-heart")
                refs.current[product._id].innerHTML--
                await sweetTopSmallSuccessAlert("success", 700, false)
            }
            props.setRebuild(new Date())
        } catch (err: any) {
            await sweetErrorHandling({ message: Definer.auth_err1 })
        }
    }
    return (
        <Container className="hot-products mt-5">
            <Box className="text-center  hot-products-title">
                Shop all latest offers
            </Box>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                speed={1000}
                autoplay={
                    { delay: 1000, pauseOnMouseEnter: true }
                }
                modules={[Autoplay]}
                className="product-swiper cards"
                style={{ cursor: "pointer" }}
            >
                {randomNewProducts.map((ele: Product, index) => {
                    let image_url_1 = `${serverApi}/${ele.product_images[0]}`,
                        image_url_2 = `${serverApi}/${ele.product_images[1]}`,
                        discount_price = ele.product_price - (ele.product_price * (ele.product_discount / 100))
                    return (
                        <SwiperSlide
                            className="swiper-card"
                        >
                            <Box className={"slider-card border-0"} id="card">
                                <div className="card-img product_fade">
                                    <img
                                        src={image_url_1}
                                        alt="phone1"
                                        className="product_img_1"
                                    />
                                    <img
                                        src={image_url_2}
                                        alt="phone1"
                                        className="product_img_2"
                                    />
                                    <Stack
                                        className="card-features p-2 rounded"
                                        onClick={(e: any) => { e.stopPropagation(); }}
                                    >
                                        <Favorite style={{ fill: ele?.me_liked && ele?.me_liked[0]?.mb_id ? "red" : "white" }} onClick={(e: any) => { handleLikeItem(e, ele) }} />
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
                                                let image_color = product_color === "silver" ? "white" : product_color
                                                return (
                                                    <div className="color-select">
                                                        <button
                                                            type="button"
                                                            onClick={(e) => handleOpenChosenOne(e, product._id)}
                                                            title={product_color}
                                                        >
                                                            <img src={`/pictures/products/${image_color}_phone.webp`} alt="" />
                                                        </button>
                                                        <span>
                                                            {product_color}
                                                        </span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Stack>
                                    {
                                        ele.product_new_released === "Y" ? (<div className="bg-danger position-absolute card-img_badge">NEW</div>) : (<div className="bg-danger position-absolute card-img_badge opacity-0">NEW</div>)
                                    }
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
                                        <Stack
                                            flexDirection={"row"}
                                            gap={'3px'}
                                            alignItems={"center"}
                                        >
                                            <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                                            <div
                                                ref={(htmlEl) => (refs.current[ele._id] = htmlEl)}
                                            >
                                                {ele.product_likes ?? "0"}
                                            </div>
                                        </Stack>
                                        |
                                        <Stack flexDirection={"row"} gap={'3px'} alignItems={"center"}>
                                            <i className="fa-solid fa-eye"></i>
                                            {ele.product_views ?? "0"}
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <div className="card-text mt-3 fw-bold">
                                    {ele.product_discount ? (<div>{stringSplitterHandler(discount_price, 3, ".")}₩<span className="text-secondary ms-2"><s>{stringSplitterHandler(ele.product_price, 3, ".")}₩</s></span></div>) : stringSplitterHandler(ele.product_price, 3, ".") + "₩"}
                                </div>
                            </Box>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Container>
    )
}