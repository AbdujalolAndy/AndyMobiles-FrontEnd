import React, { useEffect, useState } from "react"
import { Box, Button, Container, Pagination, PaginationItem, Stack } from "@mui/material"
import { ArrowBack, ArrowForward, Favorite, RemoveRedEye } from "@mui/icons-material"
import "../../css/brandsPage.css"

const BrandPage = () => {
    const [load, setLoad] = useState<boolean>(false);
    const [boxSize, setBoxSize] = useState<string>("23%")
    useEffect(() => {
        setLoad(true)
    }, [])
    function handleBoxSize(size: string) {
        setBoxSize(size)
    }
    return (
        <Box>
            <Box className="brands">
                <Stack className="filter_brands container pt-3" flexDirection={"row"} justifyContent={"space-between"}>
                    <Stack className="grid_filter" flexDirection={"row"} alignItems={"center"} gap={"10px"}>
                        <button className="btn" onClick={() => handleBoxSize("23%")}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M220-160q-25 0-42.5-17.5T160-220q0-25 17.5-42.5T220-280q25 0 42.5 17.5T280-220q0 25-17.5 42.5T220-160Zm173 0q-25 0-42.5-17.5T333-220q0-25 17.5-42.5T393-280q25 0 42.5 17.5T453-220q0 25-17.5 42.5T393-160Zm174 0q-25 0-42.5-17.5T507-220q0-25 17.5-42.5T567-280q25 0 42.5 17.5T627-220q0 25-17.5 42.5T567-160Zm173 0q-25 0-42.5-17.5T680-220q0-25 17.5-42.5T740-280q25 0 42.5 17.5T800-220q0 25-17.5 42.5T740-160ZM220-333q-25 0-42.5-17.5T160-393q0-25 17.5-42.5T220-453q25 0 42.5 17.5T280-393q0 25-17.5 42.5T220-333Zm173 0q-25 0-42.5-17.5T333-393q0-25 17.5-42.5T393-453q25 0 42.5 17.5T453-393q0 25-17.5 42.5T393-333Zm174 0q-25 0-42.5-17.5T507-393q0-25 17.5-42.5T567-453q25 0 42.5 17.5T627-393q0 25-17.5 42.5T567-333Zm173 0q-25 0-42.5-17.5T680-393q0-25 17.5-42.5T740-453q25 0 42.5 17.5T800-393q0 25-17.5 42.5T740-333ZM220-507q-25 0-42.5-17.5T160-567q0-25 17.5-42.5T220-627q25 0 42.5 17.5T280-567q0 25-17.5 42.5T220-507Zm173 0q-25 0-42.5-17.5T333-567q0-25 17.5-42.5T393-627q25 0 42.5 17.5T453-567q0 25-17.5 42.5T393-507Zm174 0q-25 0-42.5-17.5T507-567q0-25 17.5-42.5T567-627q25 0 42.5 17.5T627-567q0 25-17.5 42.5T567-507Zm173 0q-25 0-42.5-17.5T680-567q0-25 17.5-42.5T740-627q25 0 42.5 17.5T800-567q0 25-17.5 42.5T740-507ZM220-680q-25 0-42.5-17.5T160-740q0-25 17.5-42.5T220-800q25 0 42.5 17.5T280-740q0 25-17.5 42.5T220-680Zm173 0q-25 0-42.5-17.5T333-740q0-25 17.5-42.5T393-800q25 0 42.5 17.5T453-740q0 25-17.5 42.5T393-680Zm174 0q-25 0-42.5-17.5T507-740q0-25 17.5-42.5T567-800q25 0 42.5 17.5T627-740q0 25-17.5 42.5T567-680Zm173 0q-25 0-42.5-17.5T680-740q0-25 17.5-42.5T740-800q25 0 42.5 17.5T800-740q0 25-17.5 42.5T740-680Z" /></svg>
                        </button>
                        <button className="btn" onClick={() => handleBoxSize("30%")}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z" /></svg>
                        </button>
                        <button className="btn" onClick={() => handleBoxSize("48%")}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z" /></svg>
                        </button>
                        <button className="btn" onClick={() => handleBoxSize("90%")}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-520q-33 0-56.5-23.5T120-600v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v160q0 33-23.5 56.5T760-520H200Zm0-80h560v-160H200v160Zm0 480q-33 0-56.5-23.5T120-200v-160q0-33 23.5-56.5T200-440h560q33 0 56.5 23.5T840-360v160q0 33-23.5 56.5T760-120H200Zm0-80h560v-160H200v160Zm0-400v-160 160Zm0 400v-160 160Z" /></svg>
                        </button>
                    </Stack>
                    <Stack className="sort_items" flexDirection={"row"} gap={"20px"} alignItems={"center"}>
                        <Box className="show_items">
                            Showing 1 - 12 of 54 results  Show <span className="border ps-3 pe-3 pt-2 pb-2">12</span> per page
                        </Box>
                        <Box className="order_items">
                            <select className="form-select" id="order_item">
                                <option value="">Alphabetically, A-Z</option>
                                <option value="">Alphabetically, Z-A</option>
                                <option value="">Best Selling</option>
                                <option value="">Price, low to high</option>
                                <option value="">Price, high to low</option>
                                <option value="">Date, new to old</option>
                                <option value="">Price, old to new</option>
                            </select>
                        </Box>
                        <Box className="search_input">
                            <input type="text" className="pe-3 ps-3 fs-6" placeholder="Search, Brand" />
                        </Box>
                    </Stack>
                </Stack>
                <hr />
                <Stack className="brands_items container" flexDirection={"row"} flexWrap={"wrap"} gap={"10px"} justifyContent={"center"}>
                    {Array.from({ length: 12 }).map((ele, index) => (
                        <div className={load ? "card aos-animate" : "card"} data-aos="fade-right" data-aos-delay={150 * index} style={{ width: boxSize }}>
                            <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="" />
                            <div className="card-content">
                                <Stack flexDirection={"row"} className="card_title" alignItems={"center"} justifyContent={"space-between"}>
                                    <div className="fw-bold fs-4 brand_name">Apple</div>
                                    <div className="review">
                                        <Button className="text-warning fw-bold">
                                            {25}
                                            <Favorite style={{ fill: "white", marginLeft: "3px" }} />
                                        </Button>
                                        {"|"}
                                        <Button className="text-success fw-bold">
                                            {39}
                                            <RemoveRedEye style={{ fill: "white", marginLeft: "3px" }} />
                                        </Button>

                                    </div>
                                </Stack>
                                <div className="card_description">
                                    <Stack className="adddress mb-3" flexDirection={"row"} gap="10px" alignItems={"center"}>
                                        <i className="fa-solid fa-location-dot text-warning"></i>
                                        <div className="address_name">
                                            Gwangju buk-gu 102
                                        </div>
                                    </Stack>
                                    <Stack className="contact mb-3" flexDirection={"row"} gap="10px" alignItems={"center"}>
                                        <i className="fa-solid fa-address-book text-warning"></i>
                                        <div className="contact_number">
                                            +8210 3201 1222
                                        </div>
                                    </Stack>
                                    <Stack className="email mb-3" flexDirection={"row"} gap="10px" alignItems={"center"}>
                                        <i className="fa-solid fa-envelope text-warning"></i>
                                        <div className="email_address">
                                            example@gmail.com
                                        </div>
                                    </Stack>
                                </div>
                            </div>
                        </div>
                    ))}
                </Stack>
                <Container className="d-flex">
                    <Pagination
                        className="brand_pagination d-flex justify-content-center mt-5"
                        page={1}
                        count={3}
                        renderItem={(item) => (
                            <PaginationItem
                                components={{
                                    previous: ArrowBack,
                                    next: ArrowForward
                                }}
                                {...item}
                                color="secondary"
                            />
                        )}
                    />
                </Container>
            </Box>
        </Box>

    )
}

export default BrandPage