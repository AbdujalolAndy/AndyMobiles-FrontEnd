import React, { useEffect, useState } from "react"
import { Box, Container, Stack } from "@mui/material"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Brand } from "../../types/member"


//Redux
import { Dispatch } from "@reduxjs/toolkit"
import { setTargetBrands } from "./slice"
import { retrieveTargetBrands } from "./selector"
import BrandsServiceApi from "../../apiServices/brandsServiceApi"
import { createSelector } from "reselect"
import { useDispatch, useSelector } from "react-redux"
import { serverApi } from "../../../lib/config"

//Slice
const actionDispatch = (dispatch: Dispatch) => ({
    setTargetBrands: (data: Brand[]) => dispatch(setTargetBrands(data))
})
//Selector
const targetBrandRetriever = createSelector(
    retrieveTargetBrands,
    (targetBrands) => ({ targetBrands })
)
export const OurBrands = () => {
    //Initializations
    const logo_Colors = ["#BCE7F0", "#F9CADA", "#1B448B", "#FBE285", "#F0F0F0", "#858DFA"];
    const { setTargetBrands } = actionDispatch(useDispatch())
    const { targetBrands } = useSelector(targetBrandRetriever)
    const [scroll, setScroll] = useState<boolean>(false)

    //Three circle Hook
    useEffect(() => {
        function handlerScroll() {
            if (window.scrollY > 1300) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }
        window.addEventListener("scroll", handlerScroll)
        const brandsServiceApi = new BrandsServiceApi()
        brandsServiceApi.getTargetBrands({ random: true, limit: 10 })
            .then(data => setTargetBrands(data))
            .catch(err => console.log(err))
        return () => {
            window.removeEventListener("scroll", handlerScroll)
        }
    }, [])
    return (
        <Box className="mt-5 ourBrand mb-5">
            <div className="bg"></div>
            <Container>
                <h1 className="text-center fw-bold">Shop by Brands</h1>
                <Swiper
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
                    modules={[Autoplay, Pagination]}
                    data-aos="fade-left"
                    data-aos-delay={500}
                    className={scroll ? "aos-animate" : ""}
                    style={{ transition: "all .3s ease-in-out" }}
                >
                    <Stack className="brand_cards" flexDirection={"row"} justifyContent={"space-evenly"}>
                        {targetBrands.map((brand: Brand, index: number) => {
                            const image_url = `${serverApi}/${brand.mb_image}`
                            return (
                                <SwiperSlide>
                                    <Stack className="brand_card" style={{ backgroundColor: logo_Colors[index] }} alignItems={"center"}>
                                        <div className="brand_img">
                                            <img src={image_url} alt="apple" className="brand_logo" />
                                        </div>
                                        <div className="brand_title fs-2 text-center fw-bold">
                                            {brand.mb_nick}
                                        </div>
                                    </Stack>
                                </SwiperSlide>
                            )
                        })}
                    </Stack>

                </Swiper>

            </Container>
        </Box>
    )
}