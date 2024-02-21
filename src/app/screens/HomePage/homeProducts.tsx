import { Box, Pagination, Stack } from "@mui/material"
import { useEffect, useState } from "react"

export const HomeProducts = (props: any) => {
    const [loaded, setLoaded] = useState<boolean>(false)
    useEffect(() => {
        setLoaded(true)
        return () => {
            setLoaded(false)
        }
    }, [])
    return (
        <Stack className="product_cards" flexDirection={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
            {Array.from({ length: props.products }).map((ele, index) => (
                <Box data-aos="fade-up" data-aos-delay={`${100 * index}`} className={props.scrolled && loaded ? "product_card opacity-1 aos-animate" : "product_card"}>
                    <Stack className="card_img"  alignItems={"center"}>
                        <img src="/icons/yellow_phone.webp" alt="" style={{width:"120px", height:"220px"}} />
                        <div className="product_badge">SALE</div>
                    </Stack>
                    <Box className="card__overlay">
                        <Box className="card__header">
                            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                            <img className="card__thumb" src="/logos/apple_logo.png" alt="" />
                            <div className="card__header-text">
                                <h3 className="card__title">Apple company</h3>
                                <span className="card__status">Iphone 13 Pro Max</span>
                            </div>
                        </Box>
                        <Stack className="card__description">
                            <Stack direction={"row"} gap={"10px"} className="mb-2">
                                <div><i className="fa-solid fa-database"></i></div>
                                <div>Storage:</div>
                                <div className="text-dark">128GB</div>
                            </Stack>
                            <Stack direction={"row"} gap={"10px"} className="mb-2">
                                <div><i className="fa-solid fa-sack-dollar"></i></div>
                                <div>Price:</div>
                                <div className="text-dark">$999.00</div>
                            </Stack>
                            <Stack direction={"row"} gap={"5px"} className="mb-2">
                                <div><i className="fa-regular fa-calendar-check"></i></div>
                                <div>Each Month:</div>
                                <div className="text-dark">$25.00</div>
                            </Stack>
                            <button className="btn btn-warning text-light">Purchase</button>
                        </Stack>
                    </Box>
                </Box>
            ))}
            <Pagination
                page={1}
                count={5}
                className="d-flex justify-content-center bg-transparent mt-2"
                style={{ boxShadow: "none" }}
            />
        </Stack>
    )
}
