import { Box, Rating, Stack, Tab, Tabs } from "@mui/material"
import { useHistory, useParams } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { TabContext, TabPanel } from "@mui/lab";
import ProductDescription from "./ProductDescription";
import ProductReview from "./productReview";
import ReviewWriting from "./reviewWriting";
import PickUpCenter from "./pickupCenter";
import ChattingClient from "../../components/features/clientChattingModal";
import ProductServiceApi from "../../apiServices/productServiceApi";
import ReactImageMagnify from "react-image-magnify"
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import { stringSplitterHandler } from "../../components/features/stringSplitter"

//REDUX
import { Dispatch } from "@reduxjs/toolkit"
import { createSelector } from "reselect"
import { useDispatch, useSelector } from "react-redux"
import { Product } from "../../types/product";
import { setChosenProduct, setProductReview } from "./slice";
import { chosenProductRetriever, productReviewRetriever } from "./selector";
import { serverApi } from "../../../lib/config";
import { Review } from "../../types/review";
import CommunityServiceApi from "../../apiServices/communityServiceApi";
import { locations } from "../../../lib/locations";
import { NewProducts } from "../HomePage/releasedProducts";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { MemberServiceApi } from "../../apiServices/memberServiceApi";
import { handleViewItem } from "../../components/features/viewItem";

//SLICE
const actionDispatch = (dispatch: Dispatch) => ({
    setChosenProduct: (data: Product) => dispatch(setChosenProduct(data)),
    setProductReview: (data: Review[]) => dispatch(setProductReview(data))
})
//SELECTOR
const chosenProductRetrieve = createSelector(
    chosenProductRetriever,
    (chosenProduct) => ({ chosenProduct })
)

const productReviewRetrieve = createSelector(
    productReviewRetriever,
    (productReview) => ({ productReview })
)

export const ChosenProduct = () => {
    //Initilizations
    const { product_id } = useParams<{ product_id: string }>()
    const [chosenColor, setChosenColor] = useState<string>("")
    const [value, setValue] = useState<string>("1");
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [termsAgree, setTermsAgree] = useState<boolean>(false);
    const [openChat, setOpenChat] = useState<boolean>(false);
    const { chosenProduct } = useSelector(chosenProductRetrieve);
    const [quantity, setQuantity] = useState<number>(1);
    const { productReview } = useSelector(productReviewRetrieve)
    const { setChosenProduct, setProductReview } = actionDispatch(useDispatch())
    const [magnifyImg, setMagnifyImg] = useState<string>("")
    const [chosenProductImgIndex, setChosenProductImgIndex] = useState<number>(0)
    const [reBuild, setRebuild] = useState<Date>(new Date);
    const main_img = magnifyImg ? magnifyImg : `${serverApi}/${chosenProduct?.product_images[0]}`;
    const styleColor = {
        borderColor: "#0066AE",
        color: chosenColor,
        borderWidth: "2px"
    }
    const location = useHistory()
    //3 circle React Hook
    useEffect(() => {
        function handleScroll() { setScrolled(window.scrollY > 500) }
        window.addEventListener("scroll", handleScroll);
        //Chosen Product
        const productServiceApi = new ProductServiceApi();
        productServiceApi.getChosenProduct(product_id)
            .then(data => {
                setChosenProduct(data)
                handleViewItem(data._id, "PRODUCT")
            })
            .catch(err => console.log(err))

        //Product related Reviews
        const communityServiceApi = new CommunityServiceApi();
        communityServiceApi.getProductReviews(product_id)
            .then(data => setProductReview(data))
            .catch(err => console.log(err))
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [reBuild])

    //Handlers
    function handleOpenChat() { setOpenChat(true) };
    function handleCloseChat() { setOpenChat(false) };
    function handleValue(order: string) { setValue(order) }
    function handleChosenColor(color: string, id: string) {
        setChosenColor(color)
        window.location.replace(`/products/product/${id}`)
    }
    function hadleTermsUse(e: any) { setTermsAgree(e.target.checked) }
    function handleSelectImage(e: any, img: string, index: number) {
        setMagnifyImg(img)
        setChosenProductImgIndex(index)
    }
    function handleOverallRating(productReview: Review[]) {
        let rating_product: number = 0;
        productReview.map((ele) => (rating_product += ele.review_stars))
        return Math.floor(rating_product / productReview.length)
    }
    return (
        <Box className="chosen_product">
            <ChattingClient openChat={openChat} handleCloseChat={handleCloseChat} />
            <Stack
                onClick={handleOpenChat}
                className={scrolled ? "product_assistant aos-animate" : "product_assistant"}
                direction={"row"}
                gap={"10px"}
                alignItems={"center"}
                data-aos="fade-right"
                data-delay-aos={100}
                style={openChat ? { display: "none" } : {}}
            >

                <div className="assistant_img">
                    <img src="/icons/bot_img.jpg" alt="assitant" width={"60px"} />
                </div>
                <div className="assitant_text">
                    Talk with <b>A smart bot</b>
                </div>
            </Stack>
            <Stack
                className="container"
                flexDirection={"row"}
                gap="50px"
            >
                <Stack
                    className={"product_imgs"}
                    flexDirection={"row"}
                >
                    <Swiper
                        slidesPerView={5}
                        navigation={true}
                        modules={[Navigation]}
                        className="product_swiper pe-3"
                        direction="vertical"
                        key={chosenProduct?._id}
                    >
                        {chosenProduct?.product_images.map((ele: string, index: number) => {
                            const image_url = `${serverApi}/${ele}`
                            return (
                                <SwiperSlide
                                    style={{ marginTop: "30px" }}
                                    className="p-4 mb-4"
                                    onClick={(e) => handleSelectImage(e, image_url, index)}
                                >
                                    <Box

                                        className={chosenProductImgIndex == index ? "product_swiper_item chosen_product_img" : "product_swiper_item"}
                                    >
                                        <img src={image_url} key={index} />
                                    </Box>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <Box className="main_pic_box">
                        <ReactImageMagnify
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                            {...{
                                smallImage: {
                                    alt: "Wristwatch by Ted Baker London",
                                    isFluidWidth: true,
                                    src: main_img
                                },
                                largeImage: {
                                    src: main_img,
                                    width: 1000,
                                    height: 1480,
                                },
                                enlargedImageContainerStyle: {
                                    zIndex: "1500",
                                },
                                enlargedImageContainerDimensions: {
                                    width: !main_img.includes("webp") ? "100%" : "400%",
                                    height: !main_img.includes("webp") ? "100%" : "160%",
                                },
                            }}
                        />
                    </Box>

                </Stack>
                <Stack className="product_info">
                    <div className="product_name fs-3 mb-3 fw-bold">
                        {chosenProduct?.product_name}  <span className="text-secondary fs-4">{chosenProduct?.product_memory === 1 ? `${chosenProduct?.product_memory}TB` : `${chosenProduct?.product_memory}GB`}</span>
                    </div>
                    <Stack className="product_review mb-3" flexDirection={"row"} gap={"10px"}>
                        <Stack flexDirection={"row"} gap={"3px"} alignItems={"center"} className="text-warning">
                            <Rating
                                name="single-controlled"
                                value={handleOverallRating(productReview)}
                                readOnly
                            />
                        </Stack>
                        <div className="review_count text-secondary">
                            {chosenProduct?.product_comments} reviews
                        </div>
                    </Stack>
                    <Stack
                        className="product_price fs-6 mb-4"
                        flexDirection={"row"}
                        gap={"8px"}
                        alignItems={"center"}
                    >
                        <Stack
                            flexDirection={"row"}
                            gap={"10px"}
                        >
                            <div><i className="fa-solid fa-sack-dollar"></i></div>
                            <div className="text-secondary fw-bold">Product Price:</div>
                        </Stack>
                        {chosenProduct?.product_discount ? (
                            <Stack
                                className="fw-bold"
                                flexDirection={"row"}
                                alignItems={"center"}
                                gap={"10px"}
                            >
                                <div>
                                    {
                                        stringSplitterHandler(Math.floor(chosenProduct?.product_price - (chosenProduct?.product_price * (chosenProduct.product_discount / 100))), 3, ".")
                                    }₩
                                </div>
                                <div className="text-secondary"><s>
                                    {
                                        stringSplitterHandler(chosenProduct?.product_price, 3, ".")
                                    }₩
                                </s></div>
                                <span className="btn btn-dark rounded-pill">Save -{chosenProduct.product_discount}%</span>
                            </Stack>
                        ) : (
                            <Stack
                                flexDirection={"row"}
                                className="fw-bold"
                            >

                                <div>
                                    {
                                        stringSplitterHandler(chosenProduct?.product_price || 0, 3, ".")
                                    }₩
                                </div>
                            </Stack>
                        )}

                    </Stack>
                    <Stack className="product_shipping mb-4" flexDirection={"row"} gap={"50px"}>
                        <Stack className="sipping" flexDirection={"row"} gap={"10px"} alignItems={"center"}>
                            <i className="fa-solid fa-truck-fast text-success fs-5"></i>
                            <div className="fw-bold link_inquery" onClick={() => location.push("/track-order")}>Shipping</div>
                        </Stack>
                        <Stack className="ask_about" flexDirection={"row"} gap={"10px"} alignItems={"center"}>
                            <i className="fa-regular fa-envelope fs-5 text-info"></i>
                            <div className="fw-bold link_inquery" onClick={() => location.push("/faq")}>Ask About This Product</div>
                        </Stack>
                    </Stack>
                    <Stack
                        className="mb-4"
                        flexDirection={"row"}
                        gap={"15px"}
                        alignItems={"center"}
                    >
                        <Stack
                            flexDirection={"row"}
                            gap={"10px"}
                        >
                            <div><i className="fa-solid fa-database"></i></div>
                            <div className="text-secondary fw-bold">Memory Size:</div>
                        </Stack>
                        <div className="fw-bold">{chosenProduct?.product_memory === 1 ? `${chosenProduct?.product_memory}TB` : `${chosenProduct?.product_memory}GB`}</div>
                    </Stack>
                    <Stack
                        className="mb-4"
                        flexDirection={"row"}
                        gap={"15px"}
                    >
                        <Stack
                            flexDirection={"row"}
                            gap={"10px"}
                        >
                            <div><i className="fa-solid fa-palette"></i></div>
                            <div className="text-secondary fw-bold">Color:</div>
                        </Stack>
                        <Stack
                            flexDirection={"row"}
                            gap={"10px"}
                        >{
                                chosenProduct?.product_related.map((product: Product) => {
                                    const product_color = product.product_color.toLowerCase()
                                    return (
                                        <Box>
                                            <Box
                                                className="product_color"
                                                style={chosenColor == product_color ? styleColor : {}}
                                                onClick={() => handleChosenColor(product_color, product._id)}
                                            >
                                                <img src={`/pictures/products/${product_color}_phone.webp`} alt="" className="w-50" />
                                            </Box>
                                            <div style={{
                                                fontSize: "12px",
                                                fontWeight: "bold",
                                                textAlign: "center"
                                            }}>
                                                {product.product_color}
                                            </div>
                                        </Box>
                                    )
                                })
                            }
                        </Stack>
                    </Stack>
                    <Stack
                        className="product_quantity mb-4"
                        flexDirection={"row"}
                        gap={"30px"}
                        alignItems={"center"}
                    >
                        <Stack
                            flexDirection={"row"}
                            gap={"10px"}
                        >
                            <div><i className="fa-solid fa-calculator"></i></div>
                            <div className="text-secondary fw-bold">Quantity:</div>
                        </Stack>
                        <Stack
                            flexDirection={"row"}
                            gap={"25px"}
                        >
                            <div
                                onClick={(e) => {
                                }}
                                className="btn btn-outline-secondary fw-bold d-flex justify-content-center align-items-center"
                                style={{
                                    width: "30px",
                                    height: "30px",
                                }}
                            ><RemoveCircle /></div>
                            <div className="fs-5 fw-bold"><u>{quantity}</u></div>
                            <div
                                onClick={(e) => {
                                    setQuantity(quantity + 1)
                                }}
                                className="btn btn-outline-secondary fw-bold d-flex justify-content-center align-items-center"
                                style={{
                                    width: "30px",
                                    height: "30px",
                                }}
                            ><AddCircle /></div>
                        </Stack>
                    </Stack>
                    <Stack
                        className="mb-5"
                        flexDirection={"row"}
                        gap={"5px"}
                        alignItems={"center"}
                    >
                        <select className="form-select w-50" id="">
                            <option>Not Monthly contract</option>
                            {
                                //@ts-ignore
                                Array.from({ length: chosenProduct?.product_contract + 1 }).map((ele, index: number) => {
                                    if (index % 3 == 0 && index != 0) {
                                        return (<option value={index}>{index} months contract</option>)
                                    }
                                })
                            }
                        </select>
                        <button className="btn btn-dark">ADD TO CART</button>
                        <button className="btn btn-light"><i className="fa-regular fa-heart"></i></button>
                    </Stack>
                    <Stack className="buy_terms mb-1" flexDirection={"row"} gap={"10px"}>
                        <input type="checkbox" id="buy_terms" onChange={hadleTermsUse} />
                        <label htmlFor="buy_terms">I agree with the terms and conditions</label>
                    </Stack>
                    <button className={termsAgree ? "btn btn-warning mb-3" : "btn btn-warning mb-3 disabled"} >BUY IT NOW</button>
                    <hr />
                    <Stack direction={"row"} gap={"20px"} className="payment_guarantee ">
                        <div>Guaranteed safe checkout:</div>
                        <img src="https://lezada-demo.myshopify.com/cdn/shop/files/pay_1024x1024.png?v=1613763989" className="w-50" alt="gurantee" />
                    </Stack>
                    <Stack className="product_share mt-3" flexDirection={"row"} gap={"30px"} alignItems={"center"}>
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
                        <ProductDescription description={chosenProduct?.product_description} />
                    </TabPanel>
                    <TabPanel value={"2"}>
                        {
                            productReview[0] ? (
                                <ProductReview
                                    reviews={productReview}
                                    setRebuild={setRebuild}
                                />
                            ) : (
                                <div
                                    className="p-2 rounded text-center fw-bold text-secondary"
                                    style={{ backgroundColor: "#EAEAEA" }}
                                >
                                    This Product has not been reviewed yet. Be First and leave a comment
                                </div>
                            )
                        }
                    </TabPanel>
                    <TabPanel value={"3"}>
                        <ReviewWriting product_id={chosenProduct?._id} title_enabled={true} item_group={"PRODUCT"} />
                    </TabPanel>
                </TabContext>
                <PickUpCenter brand_location={chosenProduct?.company_data.mb_nick} />
                <NewProducts searchProducts={{ limit: 5, order: "createdAt", random: true, contractMonth: [] }} />
            </Box>
        </Box>
    )
}