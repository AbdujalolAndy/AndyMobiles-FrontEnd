import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Pagination, PaginationItem, Stack, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import "../../css/trackOrderPage.css"

const TrackOrderPage = (props: any) => {
    //Initilizations
    const [productAmount, setProductAmount] = useState<number>(0)
    const [orderStatus, setOderStatus] = useState<string>("PAUSED")
    const [openAccordionAddress, setOpenAccordionAddress] = useState<boolean>(false)
    const [openAccordionCard, setOpenAccordionCard] = useState<boolean>(true)
    const [completeStages, setCompleteStages] = useState<any>([])
    //Handlers
    function removeProductAmount() {
        if (productAmount > 0) {
            setProductAmount(productAmount - 1)
        }
    }
    function addProductAmount() {
        setProductAmount(productAmount + 1)
    }
    function handleProcess(status: string) {
        setOderStatus(status)
    }
    function handleOpenAccordionAddress(e: any, chosenFeature: string) {
        if (e.target.checked && chosenFeature === "existAddress") {
            setOpenAccordionAddress(false)
        } else if (e.target.checked && chosenFeature === "extraAddress") {
            setOpenAccordionAddress(true)
        }
    }
    function handleOpenAccordionCard(e: any, chosenFeature: string) {
        if (e.target.checked && chosenFeature === "existDepit") {
            setOpenAccordionCard(false)
        } else if (e.target.checked && chosenFeature === "extraDebit") {
            setOpenAccordionCard(true)
        }
    }
    function handleProcessCheckout(stage: number) {
        if (window.confirm("Do you want to process to checkout?")) {
            setCompleteStages(Array.from({ length: stage }).map((ele, index) => index))
        }
        if (stage == 1) { setOderStatus("PROCESS") };
        if (stage == 2) { setOderStatus("FINISHED") };

    }
    function handleRemoveAllPausedProducts() {
        if (window.confirm("Do you want to remove all products?")) {
            alert("yes")
        }
    }
    return (
        <Box className={"trackPage"}>
            <Container>
                <Box className={"track_order"}>
                    <div className="track_title fw-bold fs-2">
                        Track your Order
                    </div>
                    <hr />
                    <div className="track_order_code fw-bold fs-3">
                        Order Code: 365njnioQSws302
                    </div>
                    <div className="Tracker_process mt-3 mb-3">
                        <div className="hh-grayBox">
                            <div className="row justify-content-between">
                                <div className="order-tracking completed">
                                    <span className="is-complete">
                                        <i className="fa-brands fa-shopify text-light fs-2"></i>
                                    </span>
                                    <p>Ordered<br /><span>Mon, June 24</span></p>
                                </div>
                                <div className={completeStages.length >= 1 ? "order-tracking completed" : "order-tracking"}>
                                    <span className="is-complete">
                                        <i className="fa-solid fa-wallet text-light fs-2"></i>
                                    </span>
                                    <p>Shipped<br /><span>Tue, June 25</span></p>
                                </div>
                                <div className={completeStages.length >= 2 ? "order-tracking completed" : "order-tracking"}>
                                    <span className="is-complete">
                                        <i className="fa-solid fa-truck-fast text-light fs-2"></i>
                                    </span>
                                    <p>Delivered<br /><span>Fri, June 28</span></p>
                                </div>
                                <div className="order-tracking">
                                    <span className="is-complete">
                                        <i className="fa-solid fa-clipboard-check text-light fs-2"></i>
                                    </span>
                                    <p>Delivered<br /><span>Fri, June 28</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Box >
                        <Stack
                            className={"order_track_controller"}
                            direction={"row"}
                            justifyContent={"space-between"}
                        >
                            <button className={orderStatus == "PAUSED" ? "btn btn_status" : "btn"} onClick={() => handleProcess("PAUSED")}>Order Checkout</button>
                            <button className={orderStatus == "PROCESS" ? "btn btn_status" : "btn"} onClick={() => handleProcess("PROCESS")}>Process Checkout Details</button>
                            <button className={orderStatus == "FINISHED" ? "btn btn_status" : "btn"} onClick={() => handleProcess("FINISHED")}>Delivered Product Confirmation</button>
                        </Stack>

                    </Box>
                </Box>
                <Box className="processing_body">
                    <Stack
                        direction={"row"}
                        gap={"30px"}
                        style={orderStatus == "PAUSED" ? { transform: "translateX(0)" } : orderStatus == "PROCESS" ? { transform: "translateX(-33%)" } : { transform: "translateX(-67%)" }}
                    >
                        <Box className={"order_checkout"}>
                            <Stack>
                                <Table >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                NO
                                            </TableCell>
                                            <TableCell align="center" colSpan={2}>
                                                PRODUCT
                                            </TableCell>
                                            <TableCell>
                                                PRICE
                                            </TableCell>
                                            <TableCell>
                                                QUANTITY
                                            </TableCell>
                                            <TableCell>
                                                TOTAL
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {Array.from({ length: 4 }).map((ele, index) => (
                                            <TableRow>
                                                <TableCell className="fw-bold fs-5" align="center">
                                                    {index + 1}
                                                </TableCell>
                                                <TableCell >
                                                    <Stack alignItems={"center"}>
                                                        <img src="/icons/yellow_phone.webp" alt="phone" width={"20px"} />
                                                    </Stack>
                                                </TableCell>
                                                <TableCell>
                                                    Iphone 13 Pro Max
                                                </TableCell>
                                                <TableCell>
                                                    $999.00
                                                </TableCell>
                                                <TableCell>
                                                    <Stack direction={"row"} gap={"20px"}>
                                                        <span onClick={removeProductAmount}>
                                                            <i className="fa-solid fa-minus"></i>
                                                        </span>
                                                        <span className="fw-bold">{productAmount}</span>
                                                        <span onClick={addProductAmount}>
                                                            <i className="fa-solid fa-plus"></i>
                                                        </span>
                                                    </Stack>
                                                </TableCell>
                                                <TableCell>
                                                    $999.00
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                <Stack
                                    direction={"row"}
                                    gap={"20px"}
                                    justifyContent={"end"}
                                    className="mt-3"
                                >
                                    <a href="/products" className="btn btn-info" >Continue Shopping</a>
                                    <button className="btn btn-success" onClick={() => handleProcessCheckout(1)}>Process Checkout</button>
                                    <button className="btn btn-danger" onClick={handleRemoveAllPausedProducts}>Remove All</button>
                                </Stack>
                            </Stack>
                        </Box>
                        <Stack
                            className="process_checkout"
                            direction={"row"}
                            gap={"20px"}
                        >
                            <Box className="delivery_details" style={{ width: "40%" }}>
                                <div className="rounded p-3">
                                    <div className="form-check  fs-5">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault1"
                                            style={{ opacity: 1, position: "static" }}
                                            onChange={(e) => handleOpenAccordionAddress(e, "existAddress")}
                                            checked={!openAccordionAddress}
                                        />
                                        <label className="form-check-label text-dark fw-bold" htmlFor="flexRadioDefault1">
                                            Existed Address on Account
                                        </label>
                                    </div>
                                </div>
                                <Accordion expanded={openAccordionAddress} className="address_filling">
                                    <AccordionSummary>
                                        <div className="form-check fs-5">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="modifyAddress"
                                                style={{ opacity: 1, position: "static" }}
                                                onChange={(e) => handleOpenAccordionAddress(e, "extraAddress")}
                                                checked={openAccordionAddress}
                                            />
                                            <label
                                                htmlFor="modifyAddress"
                                                className="text-dark fw-bold form-check-label"
                                            >
                                                Select Different Address
                                            </label>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails className="show">
                                        <div className="form-floating">
                                            <select id="country" className="form-select">
                                                <option value="">South Korea</option>
                                                <option value="">Russia</option>
                                                <option value="">Uzbekistan</option>
                                                <option value="">Palestine</option>
                                            </select>
                                            <label htmlFor="country">Country/Region</label>
                                        </div>
                                        <Stack
                                            direction={"row"}
                                            justifyContent={"space-between"}
                                            gap="30px"
                                        >
                                            <div className="form-floating">
                                                <input type="text" className="form-control p-1" id="last_name" placeholder="Last Name" />
                                                <label htmlFor="last_name">Last Name</label>
                                            </div>
                                            <div className="form-floating">
                                                <input type="text" className="form-control p-1" id="first_name" placeholder="First Name" />
                                                <label htmlFor="first_name">First Name</label>
                                            </div>
                                        </Stack>
                                        <div className="form-floating">
                                            <input type="number" className="form-control p-1" id="postal_code" placeholder="Postal Code" />
                                            <label htmlFor="postal_code">Postal Code</label>
                                        </div>
                                        <Stack
                                            direction={"row"}
                                            justifyContent={"space-between"}
                                            className="mt-3"
                                            gap="30px"
                                        >
                                            <Box className="form-floating">
                                                <select name="" className="form-select province_select" id={"province"}>
                                                    <option value="">Busan</option>
                                                    <option value="">Seoul</option>
                                                    <option value="">Yeosu</option>
                                                    <option value="">Deajon</option>
                                                    <option value="">Chonju</option>
                                                </select>
                                                <label htmlFor="province">Province</label>
                                            </Box>
                                            <Box className="form-floating">
                                                <input type="text" className="form-control" placeholder="City" id="city" />
                                                <label htmlFor="city">City</label>
                                            </Box>
                                        </Stack>
                                        <input type="text" placeholder="Address" className="form-control mt-2" />
                                    </AccordionDetails>
                                </Accordion>
                                <div className="rounded p-3">
                                    <div className="form-check  fs-5">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="debit_card"
                                            id="debit_card"
                                            style={{ opacity: 1, position: "static" }}
                                            onChange={(e) => handleOpenAccordionCard(e, "existDepit")}
                                            checked={!openAccordionCard}
                                        />
                                        <label className="form-check-label text-dark fw-bold" htmlFor="debit_card">
                                            Use Existed Card On Account
                                        </label>
                                    </div>
                                </div>
                                <Accordion expanded={openAccordionCard}>
                                    <AccordionSummary>
                                        <div className="form-check  fs-5">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="debit_card"
                                                id="debit_card_2"
                                                style={{ opacity: 1, position: "static" }}
                                                onChange={(e) => handleOpenAccordionCard(e, "extraDebit")}
                                                checked={openAccordionCard}
                                            />
                                            <label className="form-check-label text-dark fw-bold" htmlFor="debit_card_2">
                                                <Stack direction={"row"} gap={"30px"}>
                                                    <div>Different Debit Card</div>
                                                    <div><img src="/icons/credit_cards.jpg" alt="credits" width={"100px"} /></div>
                                                </Stack>
                                            </label>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Stack direction={"row"} alignItems={"center"}>
                                            <div className="card-number form-floating col-11">
                                                <input type="text" placeholder="card Number" id="cardNumber" className="form-control" />
                                                <label htmlFor="cardNumber">Card Number</label>
                                            </div>
                                            <div className="bg-warning" style={{ padding: "10px" }}>
                                                <i className="fa-regular fa-credit-card"></i>
                                            </div>
                                        </Stack>
                                        <Stack direction={"row"} gap={"20px"}>
                                            <div className="form-floating">
                                                <input type="text" id={"expireCard"} className="form-control" placeholder="Expiration date(MM/YY)" />
                                                <label htmlFor="expireCard">Expiration date(MM/YY)</label>
                                            </div>
                                            <div className="form-floating">
                                                <input type="text" id={"expireCard"} className="form-control" placeholder="Security code" />
                                                <label htmlFor="expireCard">Security code</label>
                                            </div>
                                        </Stack>
                                        <div className="form-floating">
                                            <input type="text" placeholder="Name on card" className="form-control" id="cardName" />
                                            <label htmlFor="cardName">Name on card</label>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                            <Box
                                style={{ width: "60%" }}
                            >
                                <Stack className={"processed_products"}>
                                    {
                                        Array.from({ length: 4 }).map(ele => (
                                            <Stack
                                                direction={"row"}
                                                alignItems={"center"}
                                                gap={"50px"}
                                                className="border-bottom mb-3 pb-2 ps-4"
                                            >
                                                <div className="processed_product_img position-relative">
                                                    <img src="/icons/yellow_phone.webp" alt="product" />
                                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-light fs-6">
                                                        3
                                                    </span>
                                                </div>
                                                <div className="processed_product_info">
                                                    <div>Iphone 13 Pro Max</div>
                                                    <div><span className="pe-2">color: Yellow</span><span>storage: 128GB</span></div>
                                                </div>
                                                <div className="processed_product_price fw-bold">
                                                    $999.00
                                                </div>
                                            </Stack>
                                        ))
                                    }
                                </Stack>
                                <Stack className="fs-4 ps-5 pe-5" direction={"row"} justifyContent={"space-between"}>
                                    <div>Subtotal</div>
                                    <div>$999.00</div>
                                </Stack>
                                <Stack className="fs-2 ps-5 pe-5 fw-bold" direction={"row"} justifyContent={"space-between"}>
                                    <div>Total</div>
                                    <div>$999.00</div>
                                </Stack>
                                <Stack direction={"row"} justifyContent={"center"} gap={"50px"}>
                                    <button className="btn btn-danger">Cancel</button>
                                    <button className="btn btn-dark " onClick={() => handleProcessCheckout(2)}>Proceed Payment</button>
                                </Stack>
                            </Box>
                        </Stack>
                        <Box className="finished_orders">
                            <Stack
                                className={"product_order"}
                                direction={"row"}
                                justifyContent={"space-between"}
                            >
                                <div className="order_info">
                                    <Stack className="order_code" direction={"row"} justifyContent={"space-between"}>
                                        <div className="fw-bold fs-5">Order Code</div>
                                        <div className="fw-bold text-warning fs-6">365njnioQSws302</div>
                                    </Stack>
                                    <Stack className="order_code" direction={"row"} justifyContent={"space-between"}>
                                        <div className="fw-bold fs-5">Subtotal</div>
                                        <div className="fw-bold text-warning fs-6">$1750.00</div>
                                    </Stack>
                                    <Stack className="order_code" direction={"row"} justifyContent={"space-between"}>
                                        <div className="fw-bold fs-5">Total Price</div>
                                        <div className="fw-bold text-warning fs-6">$2476.00</div>
                                    </Stack>
                                    <Stack className="order_code" direction={"row"} justifyContent={"space-between"}>
                                        <div className="fw-bold fs-5">Transaction Owner</div>
                                        <div className="fw-bold text-warning fs-6">Abdujalol</div>
                                    </Stack>
                                    <Stack className="order_code" direction={"row"} justifyContent={"space-between"}>
                                        <div className="fw-bold fs-5">Card Number</div>
                                        <div className="fw-bold text-warning fs-6">2341 **** **** 3425</div>
                                    </Stack>
                                    <Stack className="order_code" direction={"row"} justifyContent={"space-between"}>
                                        <div className="fw-bold fs-5">Transaction Date</div>
                                        <div className="fw-bold text-warning fs-6">12.09.2023 12:34 AM</div>
                                    </Stack>
                                </div>
                                <div className="purchased_products">
                                    <Box className={"processed_products"} style={{ height: "100%", width: "100%" }}>
                                        {
                                            Array.from({ length: 4 }).map(ele => (
                                                <Stack
                                                    direction={"row"}
                                                    alignItems={"center"}
                                                    gap={"40px"}
                                                    className="border-bottom mb-3 pb-2"
                                                >
                                                    <div className="processed_product_img position-relative">
                                                        <img src="/icons/yellow_phone.webp" alt="product" />
                                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-light fs-6">
                                                            3
                                                        </span>
                                                    </div>
                                                    <div className="processed_product_info">
                                                        <div>Iphone 13 Pro Max</div>
                                                        <div><span className="pe-2">color: Yellow</span><span>storage: 128GB</span></div>
                                                    </div>
                                                    <div className="processed_product_price fw-bold">
                                                        $999.00
                                                    </div>
                                                </Stack>
                                            ))
                                        }
                                    </Box>
                                </div>
                            </Stack>

                        </Box>
                    </Stack>
                </Box>
                <Box
                    className={"list_of_orders"}
                >
                    <Box>
                        <div className="fw-bold fs-3">All Orders</div>
                        <hr />
                        <Stack
                            className="order_filter"
                            direction={"row"}
                            justifyContent={"end"}
                            alignItems={"center"}
                            gap={"20px"}
                        >
                            <div>Search</div>
                            <input type="text" />
                        </Stack>
                        <Box>
                            <Table className="table table-striped">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            #
                                        </TableCell>
                                        <TableCell>
                                            Order Code
                                        </TableCell>
                                        <TableCell>
                                            Product Name
                                        </TableCell>
                                        <TableCell>
                                            Qty
                                        </TableCell>
                                        <TableCell>
                                            Price
                                        </TableCell>
                                        <TableCell>
                                            Delivery Status
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Array.from({ length: 3 }).map((ele, index) => (
                                        <TableRow>
                                            <TableCell>
                                                {index + 1}
                                            </TableCell>
                                            <TableCell>
                                                365njnioQSws302
                                            </TableCell>
                                            <TableCell>
                                                Iphone 13 Pro Max
                                            </TableCell>
                                            <TableCell>
                                                2
                                            </TableCell>
                                            <TableCell>
                                                $1999.00
                                            </TableCell>
                                            <TableCell>
                                                Process Checkout
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
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

                                    />
                                )}
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default TrackOrderPage
