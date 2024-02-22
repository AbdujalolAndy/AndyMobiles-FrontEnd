import { ArrowBack, ArrowForward, Favorite, RemoveRedEye } from "@mui/icons-material";
import { Box, Container, Pagination, PaginationItem, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { useEffect, useState } from "react";

const AllProducts = () => {
    //Hook intilizations 
    const [chosenColor, setChosenColor] = useState<string>("");
    const [loaded, setLoaded] = useState<boolean>(false);
    const [boxSize, setBoxSize] = useState<string>("45%");
    const [priceRange, setPriceRange] = useState<number[]>([599, 999]);
    const [chosenBrand, setChosenBrand] = useState<string>("");
    const [filterChosenColor, setFilterChosenColor] = useState<string>("")
    const [chosenStorage, setChosenStorage] = useState<number>()
    //React Hook 
    useEffect(() => {
        setLoaded(true)
        return () => {
            setLoaded(false)
        }
    }, [])

    //Handle 
    function handleColor(e: any) { setChosenColor(e.target.value) }
    function handleBoxSize(size: string) { setBoxSize(size) }
    function handleFilterColor(color: string) { setFilterChosenColor(color) }
    function handleBrand(brand: string) { setChosenBrand(brand) }
    function handleStorage(storage: number) { setChosenStorage(storage) }
    const AirbnbSlider = styled(Slider)(({ theme }) => ({
        color: "#3a8589",
        height: 3,
        padding: "13px 0",
        "& .MuiSlider-thumb": {
            height: 27,
            width: 27,
            backgroundColor: "#fff",
            border: "1px solid currentColor",
            "&:hover": {
                boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
            },
            "& .airbnb-bar": {
                height: 9,
                width: 1,
                backgroundColor: "currentColor",
                marginLeft: 1,
                marginRight: 1,
            },
        },
        "& .MuiSlider-track": {
            height: 3,
        },
        "& .MuiSlider-rail": {
            color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
            opacity: theme.palette.mode === "dark" ? undefined : 1,
            height: 3,
        },
    }));

    interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> { }

    function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
        const { children, ...other } = props;
        return (
            <SliderThumb {...other}>
                {children}
                <span className="airbnb-bar" />
                <span className="airbnb-bar" />
                <span className="airbnb-bar" />
            </SliderThumb>
        );
    }

    return (
        <Box className="allProducts">
            <Container className="products">
                <Stack className="pt-3" flexDirection={"row"} justifyContent={"space-between"}>
                    <Stack className="grid_filter" flexDirection={"row"} alignItems={"center"} gap={"10px"}>
                        <button className="btn" onClick={() => handleBoxSize('45%')}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z" /></svg>
                        </button>
                        <button className="btn" onClick={() => handleBoxSize("85%")}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-520q-33 0-56.5-23.5T120-600v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v160q0 33-23.5 56.5T760-520H200Zm0-80h560v-160H200v160Zm0 480q-33 0-56.5-23.5T120-200v-160q0-33 23.5-56.5T200-440h560q33 0 56.5 23.5T840-360v160q0 33-23.5 56.5T760-120H200Zm0-80h560v-160H200v160Zm0-400v-160 160Zm0 400v-160 160Z" /></svg>
                        </button>
                    </Stack>
                    <Stack className="" flexDirection={"row"} gap={"20px"} alignItems={"center"}>
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
                <Stack flexDirection={"row"} className="products_body">
                    <Stack className="filter_product">
                        <div className="filter-title fs-2 pb-3">
                            <i className="fa fa-sort-amount-desc me-4"></i>
                            <span>Filter Phones</span>
                        </div>
                        <Box className="actual_cost">
                            <div className="accordion" id="actual_cost">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button fw-bold fs-5" data-bs-toggle="collapse" data-bs-target="#actual_cost_list" aria-expanded="true" aria-controls="collapseOne">
                                            Price
                                        </button>
                                    </h2>
                                    <div id="actual_cost_list" className="accordion-collapse collapse " data-bs-parent="#actual_cost">
                                        <Stack className="accordion-body" flexDirection={"row"} gap={"10px"}>
                                            <AirbnbSlider
                                                valueLabelDisplay="auto"
                                                max={2999}
                                                min={599}
                                                slots={{ thumb: AirbnbThumbComponent }}
                                                getAriaLabel={(index) =>
                                                    index === 0 ? "Minimum price" : "Maximum price"
                                                }
                                                defaultValue={priceRange}
                                                // value={priceRange}
                                                onChangeCommitted={(event, newValue) => {
                                                    const newPriceRange = newValue as number[];
                                                    setPriceRange(newPriceRange);
                                                }}
                                                sx={{
                                                    mt: "10px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    width: "90%",
                                                    color: "#969696", // Bu yordamida track va thumb rangini o'zgartirish mumkin
                                                    "& .MuiSlider-thumb": {
                                                        backgroundColor: "#555555", // Thumb ning ichki rangini o'zgartiradi
                                                    },
                                                    "& .MuiSlider-track": {
                                                        backgroundColor: "#555555", // Trackning rangini o'zgartiradi
                                                    },
                                                }}
                                            />
                                        </Stack>
                                        <Stack
                                            flexDirection={"row"}
                                            justifyContent={"space-between"}
                                            className="ps-3 pe-3"
                                        >
                                            <div>Starting Price: <span><b>{priceRange[0]}</b></span></div>
                                            <div>Max Price: <span><b>{priceRange[1]}</b></span></div>
                                        </Stack>
                                    </div>
                                </div>
                            </div>
                        </Box>
                        <Box className="monthly_cost">
                            <div className="accordion" id="monthly_cost">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button fw-bold fs-5" data-bs-toggle="collapse" data-bs-target="#monthly_cost_list" aria-expanded="true" aria-controls="collapseOne">
                                            Monthly Price
                                        </button>
                                    </h2>
                                    <div id="monthly_cost_list" className="accordion-collapse collapse" data-bs-parent="#monthly_cost">
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
                                        <button className="accordion-button fw-bold fs-5" data-bs-toggle="collapse" data-bs-target="#brands_list" aria-expanded="true" aria-controls="collapseOne">
                                            Brands
                                        </button>
                                    </h2>
                                    <div id="brands_list" className="accordion-collapse collapse" data-bs-parent="#brands">
                                        <Stack className="accordion-body pb-3 pt-3" flexDirection={"row"} gap={"7px"} flexWrap={"wrap"} justifyContent={"center"} alignItems={"satrt"}>
                                            {Array.from({ length: 10 }).map((ele, index) => (
                                                <div
                                                    className="apple_brand rounded"
                                                    style={chosenBrand == index.toString() ? { width: "40px", border: "2px solid blue" } : { width: "40px" }}
                                                    onClick={() => handleBrand(index.toString())}
                                                >
                                                    <img src="/icons/apple_logo.jpg" alt="apple_logo" className="w-100 rounded" />
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
                                        <button className="accordion-button fw-bold fs-5" data-bs-toggle="collapse" data-bs-target="#colors_list" aria-expanded="true" aria-controls="collapseOne">
                                            Colors
                                        </button>
                                    </h2>
                                    <div id="colors_list" className="accordion-collapse collapse colors_list" data-bs-parent="#colors" >
                                        <Stack
                                            className="accordion-body"
                                            flexDirection={"row"}
                                            flexWrap={"wrap"}
                                            gap={"5px"}
                                            justifyContent={"start"}
                                        >
                                            {Array.from({ length: 12 }).map((ele, index) => (
                                                <div
                                                    className="bg-dark"
                                                    style={filterChosenColor === index.toString() ? { border: "2px solid red" } : {}}
                                                    onClick={() => handleFilterColor(index.toString())}
                                                >
                                                </div>
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
                                        <button className="accordion-button fw-bold fs-5" data-bs-toggle="collapse" data-bs-target="#storage_list" aria-expanded="true" aria-controls="collapseOne">
                                            Storage
                                        </button>
                                    </h2>
                                    <div id="storage_list" className="accordion-collapse collapse" data-bs-parent="#storage">
                                        <Stack
                                            className="accordion-body"
                                            flexDirection={"row"}
                                            flexWrap={"wrap"}
                                            gap={"5px"}
                                            justifyContent={"start"}
                                        >
                                            <div
                                                style={chosenStorage == 128 ? { backgroundColor: 'pink' } : {}}
                                                onClick={() => handleStorage(128)}
                                            >128Gb</div>
                                            <div
                                                style={chosenStorage == 256 ? { backgroundColor: 'pink' } : {}}
                                                onClick={() => handleStorage(256)}
                                            >256Gb</div>
                                            <div
                                                style={chosenStorage == 512 ? { backgroundColor: 'pink' } : {}}
                                                onClick={() => handleStorage(512)}
                                            >512Gb</div>
                                            <div
                                                style={chosenStorage == 1 ? { backgroundColor: 'pink' } : {}}
                                                onClick={() => handleStorage(1)}
                                            >1Tb</div>
                                            <div
                                                style={chosenStorage == 2 ? { backgroundColor: 'pink' } : {}}
                                                onClick={() => handleStorage(2)}
                                            >2Tb</div>
                                        </Stack>
                                    </div>
                                </div>
                            </div>
                        </Stack>
                    </Stack>
                    <Stack
                        flexDirection={"row"}
                        flexWrap={"wrap"}
                        justifyContent={"center"}
                        gap={"10px"}
                        className="products"
                    >
                        {Array.from({ length: 8 }).map((ele, index) => (
                            <Stack className={loaded ? "product_item mb-3 aos-animate opacity-1" : ""} data-aos="fade-up" data-aos-delay={150 * index} flexDirection={"row"} style={{ width: boxSize }}>
                                <div className="product_img position-relative" style={boxSize == "45%" ? { width: "190px" } : { width: '240px' }}>
                                    <button className="position-absolute"><Favorite style={{ fill: "red" }} /></button>
                                    <img src="/icons/phone.jpg" alt="phone" className="w-100" />
                                </div>
                                <div className="product_item-info p-2">
                                    <div className="product_name pb-2  fs-5 text-center fw-bold">Apple Iphone 15 Pro Max</div>
                                    <div className="select_color">
                                        <select className="product_colors form-select" onChange={handleColor}>
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
                                        <Stack flexDirection={"row"} alignItems={"center"}>
                                            <div><i className="fa-solid fa-circle-plus p-1 me-2"></i></div>
                                            <div>Actual Price: <b>$999.00</b></div>
                                        </Stack>
                                        <Stack flexDirection={"row"} alignItems={'center'}>
                                            <div>
                                                <i className="fa-solid fa-circle-plus p-1 me-2"></i>
                                            </div>
                                            <div>Monthly cost deal over <b>24</b> months: <b>$44.00</b></div>
                                        </Stack>
                                        <Stack flexDirection={"row"} alignItems={"center"}>
                                            <div><i className="fa-solid fa-circle-plus p-1 me-2"></i></div>
                                            <div>6.7" Super Retina XDR display</div>
                                        </Stack>
                                        <Stack flexDirection={"row"} alignItems={"center"}>
                                            <div><i className="fa-solid fa-circle-plus p-1 me-2"></i></div>
                                            <div>48MP Ultra-Wide camera</div>
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
        </Box>
    )
}
export default AllProducts;