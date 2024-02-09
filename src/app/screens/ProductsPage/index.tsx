import { Box, Button, Stack, Container, Pagination, PaginationItem } from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../../css/productPage.css"
import { ArrowBack, ArrowForward, Favorite, RemoveRedEye } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Footer from "../../components/footer";

const ProductsPage = () => {
    const [chosenColor, setChosenColor] = useState<string>("");
    const [loaded, setLoaded] = useState<boolean>(false)
    useEffect(() => {
        setLoaded(true)
        return () => {
            setLoaded(false)
        }
    }, [])
    function handleColor(e: any) {
        setChosenColor(e.target.value)
    }
    return (
        <Box className="productPage">
            <Container className="products">
                <Stack className="pt-3" flexDirection={"row"} justifyContent={"space-between"}>
                    <Stack className="grid_filter" flexDirection={"row"} alignItems={"center"} gap={"10px"}>
                        <div className="full_grid">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M220-160q-25 0-42.5-17.5T160-220q0-25 17.5-42.5T220-280q25 0 42.5 17.5T280-220q0 25-17.5 42.5T220-160Zm173 0q-25 0-42.5-17.5T333-220q0-25 17.5-42.5T393-280q25 0 42.5 17.5T453-220q0 25-17.5 42.5T393-160Zm174 0q-25 0-42.5-17.5T507-220q0-25 17.5-42.5T567-280q25 0 42.5 17.5T627-220q0 25-17.5 42.5T567-160Zm173 0q-25 0-42.5-17.5T680-220q0-25 17.5-42.5T740-280q25 0 42.5 17.5T800-220q0 25-17.5 42.5T740-160ZM220-333q-25 0-42.5-17.5T160-393q0-25 17.5-42.5T220-453q25 0 42.5 17.5T280-393q0 25-17.5 42.5T220-333Zm173 0q-25 0-42.5-17.5T333-393q0-25 17.5-42.5T393-453q25 0 42.5 17.5T453-393q0 25-17.5 42.5T393-333Zm174 0q-25 0-42.5-17.5T507-393q0-25 17.5-42.5T567-453q25 0 42.5 17.5T627-393q0 25-17.5 42.5T567-333Zm173 0q-25 0-42.5-17.5T680-393q0-25 17.5-42.5T740-453q25 0 42.5 17.5T800-393q0 25-17.5 42.5T740-333ZM220-507q-25 0-42.5-17.5T160-567q0-25 17.5-42.5T220-627q25 0 42.5 17.5T280-567q0 25-17.5 42.5T220-507Zm173 0q-25 0-42.5-17.5T333-567q0-25 17.5-42.5T393-627q25 0 42.5 17.5T453-567q0 25-17.5 42.5T393-507Zm174 0q-25 0-42.5-17.5T507-567q0-25 17.5-42.5T567-627q25 0 42.5 17.5T627-567q0 25-17.5 42.5T567-507Zm173 0q-25 0-42.5-17.5T680-567q0-25 17.5-42.5T740-627q25 0 42.5 17.5T800-567q0 25-17.5 42.5T740-507ZM220-680q-25 0-42.5-17.5T160-740q0-25 17.5-42.5T220-800q25 0 42.5 17.5T280-740q0 25-17.5 42.5T220-680Zm173 0q-25 0-42.5-17.5T333-740q0-25 17.5-42.5T393-800q25 0 42.5 17.5T453-740q0 25-17.5 42.5T393-680Zm174 0q-25 0-42.5-17.5T507-740q0-25 17.5-42.5T567-800q25 0 42.5 17.5T627-740q0 25-17.5 42.5T567-680Zm173 0q-25 0-42.5-17.5T680-740q0-25 17.5-42.5T740-800q25 0 42.5 17.5T800-740q0 25-17.5 42.5T740-680Z" /></svg>
                        </div>
                        <div className="triple_grid">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z" /></svg>
                        </div>
                        <div className="double_grid">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z" /></svg>
                        </div>
                        <div className="single_grid">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-520q-33 0-56.5-23.5T120-600v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v160q0 33-23.5 56.5T760-520H200Zm0-80h560v-160H200v160Zm0 480q-33 0-56.5-23.5T120-200v-160q0-33 23.5-56.5T200-440h560q33 0 56.5 23.5T840-360v160q0 33-23.5 56.5T760-120H200Zm0-80h560v-160H200v160Zm0-400v-160 160Zm0 400v-160 160Z" /></svg>
                        </div>
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
                <Stack flexDirection={"row"}>
                    <Stack className="filter_product">
                        <div className="filter-title fs-2 pb-3">
                            <i className="fa fa-sort-amount-desc me-4"></i>
                            <span>Filter Phones</span>
                        </div>
                        <Box className="actual_cost">
                            <div className="accordion" id="actual_cost">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#actual_cost_list" aria-expanded="true" aria-controls="collapseOne">
                                            Price
                                        </button>
                                    </h2>
                                    <div id="actual_cost_list" className="accordion-collapse collapse show" data-bs-parent="#actual_cost">
                                        <Stack className="accordion-body" flexDirection={"row"} gap={"10px"}>
                                            <input type="range" min={200} max={2000} />
                                        </Stack>
                                    </div>
                                </div>
                            </div>
                        </Box>
                        <Box className="monthly_cost">
                            <div className="accordion" id="monthly_cost">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#monthly_cost_list" aria-expanded="true" aria-controls="collapseOne">
                                            Monthly Price
                                        </button>
                                    </h2>
                                    <div id="monthly_cost_list" className="accordion-collapse collapse show" data-bs-parent="#monthly_cost">
                                        <Stack className="accordion-body" flexDirection={"row"} gap={"10px"}>
                                            <select name="" id="" className="form-select">
                                                <option value="">Min-Any</option>
                                                <option value="">10$</option>
                                                <option value="">20$</option>
                                                <option value="">30$</option>
                                            </select>
                                            <select name="" id="" className="form-select">
                                                <option value="">Min-Any</option>
                                                <option value="">10$</option>
                                                <option value="">20$</option>
                                                <option value="">30$</option>
                                            </select>
                                        </Stack>
                                    </div>
                                </div>
                            </div>
                        </Box>
                        <Box>
                            <div className="accordion" id="brands">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#brands_list" aria-expanded="true" aria-controls="collapseOne">
                                            Brands
                                        </button>
                                    </h2>
                                    <div id="brands_list" className="accordion-collapse collapse show" data-bs-parent="#brands">
                                        <Stack className="accordion-body pb-3 pt-3" flexDirection={"row"} gap={"7px"} flexWrap={"wrap"} justifyContent={"center"}>
                                            {Array.from({ length: 10 }).map(ele => (
                                                <div className="apple_brand border " style={{ width: "40px" }}>
                                                    <img src="/icons/apple_logo.jpg" alt="apple_logo" className="w-100" />
                                                </div>
                                            ))}
                                        </Stack>
                                    </div>
                                </div>
                            </div>
                        </Box>
                        <Stack className="colors">
                            <div className="accordion" id="colors">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#colors_list" aria-expanded="true" aria-controls="collapseOne">
                                            Colors
                                        </button>
                                    </h2>
                                    <div id="colors_list" className="accordion-collapse collapse show" data-bs-parent="#colors">
                                        <Stack className="accordion-body" flexDirection={"row"} flexWrap={"wrap"} gap={"5px"} justifyContent={"center"}>
                                            {Array.from({ length: 12 }).map((ele) => (
                                                <div className="black bg-dark" style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid red" }}></div>
                                            ))}
                                        </Stack>
                                    </div>
                                </div>
                            </div>
                        </Stack>
                        <Stack className="storage">
                            <div className="accordion" id="storage">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#storage_list" aria-expanded="true" aria-controls="collapseOne">
                                            Storage
                                        </button>
                                    </h2>
                                    <div id="storage_list" className="accordion-collapse collapse show" data-bs-parent="#storage">
                                        <Stack className="accordion-body" flexDirection={"row"} flexWrap={"wrap"} gap={"5px"} justifyContent={"center"}>
                                            <div className="text-center p-2" style={{ width: "60px", height: "40px", borderRadius: "10px", border: "1px dashed black" }}>128Gb</div>
                                            <div className="text-center p-2" style={{ width: "60px", height: "40px", borderRadius: "10px", border: "1px dashed black" }}>256Gb</div>
                                            <div className="text-center p-2" style={{ width: "60px", height: "40px", borderRadius: "10px", border: "1px dashed black" }}>512Gb</div>
                                            <div className="text-center p-2" style={{ width: "60px", height: "40px", borderRadius: "10px", border: "1px dashed black" }}>1Tb</div>
                                            <div className="text-center p-2" style={{ width: "60px", height: "40px", borderRadius: "10px", border: "1px dashed black" }}>2Tb</div>
                                        </Stack>
                                    </div>
                                </div>
                            </div>
                        </Stack>
                    </Stack>
                    <Stack className={'products'} flexDirection={"row"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
                        {Array.from({ length: 8 }).map((ele, index) => (
                            <Stack className={loaded ? "product_item mb-3 aos-animate opacity-1" : ""} data-aos="fade-up" data-aos-delay={150 * index} flexDirection={"row"}>
                                <div className="product_img position-relative">
                                    <button className="position-absolute"><Favorite style={{ fill: "red" }} /></button>
                                    <img src="/icons/phone.jpg" alt="phone" className="w-100" />
                                </div>
                                <div className="product_item-info position-relative p-2">
                                    <div className="product_name pb-2  fs-5 text-center fw-bold">Apple Iphone 15 Pro Max</div>
                                    <select name="" id="" className="product_colors form-select" onChange={handleColor}>
                                        <option value="Black">Black</option>
                                        <option value="Blue">Blue</option>
                                        <option value="Gold">Gold</option>
                                        <option value="Green">Green</option>
                                        <option value="Gray">Gray</option>
                                    </select>
                                    <Stack className="product_item-color_list position-absolute" flexDirection={"row"} gap={"3px"}>
                                        <div className="bg-dark" style={{ width: "15px", height: "15px", borderRadius: '50%', border: chosenColor === "Black" ? "2px solid red" : "" }}></div>
                                        <div style={{ width: "15px", height: "15px", borderRadius: '50%', backgroundColor: "blue", border: chosenColor === "Blue" ? "2px solid red" : "" }}></div>
                                        <div className="bg-warning" style={{ width: "15px", height: "15px", borderRadius: '50%', border: chosenColor === "Gold" ? "2px solid red" : "" }}></div>
                                        <div className="bg-success" style={{ width: "15px", height: "15px", borderRadius: '50%', border: chosenColor === "Green" ? "2px solid red" : "" }}></div>
                                        <div className="bg-secondary" style={{ width: "15px", height: "15px", borderRadius: '50%', border: chosenColor === "Gray" ? "2px solid red" : "" }}></div>
                                    </Stack>
                                    <div className="product_item-info mt-3">
                                        <Stack className="actual_price" flexDirection={"row"}>
                                            <i className="fa-solid fa-circle-plus p-1 me-2"></i>
                                            <p>Actual Price: <b>$999.00</b></p>
                                        </Stack>
                                        <Stack className="display_info" flexDirection={"row"}>
                                            <i className="fa-solid fa-circle-plus p-1 me-2"></i>
                                            <p>Monthly cost deal over <b>24</b> months: <b>$44.00</b></p>
                                        </Stack>
                                        <Stack className="display_info" flexDirection={"row"}>
                                            <i className="fa-solid fa-circle-plus p-1 me-2"></i>
                                            <p>6.7" Super Retina XDR display</p>
                                        </Stack>
                                        <Stack className="camera_info" flexDirection={"row"}>
                                            <i className="fa-solid fa-circle-plus p-1 me-2"></i>
                                            <p>48MP Ultra-Wide camera</p>
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
                        ))}
                    </Stack>
                </Stack>
                <Container className="d-flex">
                    <Pagination
                        className="brand_pagination d-flex justify-content-center"
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
            </Container>
            <Footer />
        </Box>
    )
}

export default ProductsPage