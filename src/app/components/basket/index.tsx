import { Fade, Modal } from "@material-ui/core"
import { Backdrop, Box, Stack } from "@mui/material"
import { useState } from "react"

export const Basket = (props: any) => {
    const [checkout, setCheckout] = useState<boolean>(false)
    function handleCheckout(e: any) { setCheckout(e.target.checked) }
    return (
        <Box>
            <Modal
                open={props.openBasket}
                onClose={props.handleBasketClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}

            >
                <Stack
                    className={"bg-light basket_modal"}
                    sx={props.openBasket ? { transform: "translateX(0%)" } : {}}
                >
                    <Stack className="basket_title" justifyContent={"space-between"} flexDirection={"row"} alignItems={"center"}>
                        <div className="fs-3">Cart</div>
                        <div className="close_toggle" onClick={props.handleBasketClose}><i className="fa-solid fa-xmark"></i></div>
                    </Stack>
                    <hr />
                    <Stack className="basket_products" justifyContent={"center"}>
                        {Array.from({ length: 3 }).map((ele,index) => (
                            <Stack
                                direction={"row"}
                                justifyContent={"space-between"}
                                style={{ padding: "20px 10px", borderBottom: "1px solid Black" }}
                            >
                                <div className="product_img">
                                    <img src="/icons/yellow_phone.webp" style={{ width: "40px" }} alt="" />
                                </div>
                                <Stack className="product_info ms-4" flexDirection={"row"}>
                                    <Stack className="product_price" flexDirection={"column"} gap="10px">
                                        <div className="product_name fs-5">
                                            Iphone 15 Pro Max
                                        </div>
                                        <Stack className="mt-4" flexDirection={"row"} alignItems={"center"}>
                                            <Stack
                                                flexDirection={"row"}
                                                className="product_price fs-5"
                                                gap={"10px"}
                                                style={{ borderBottom: "1px solid black", width: "70px",cursor:'pointer' }}
                                                justifyContent={"space-between"}
                                            >
                                                <div className="add_product">-</div>
                                                <div className="product_amount">{index+1}</div>
                                                <div className="add_product " >+</div>
                                            </Stack>
                                            <div>
                                                <div><i className="fa-solid fs-6 fa-xmark ms-2 me-2"></i></div>
                                            </div>
                                            <div className="acctual_price fs-6 fw-bold">
                                                $999.00
                                            </div>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <div className="ms-4 product_remove_btn">
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                            </Stack>
                        ))}
                    </Stack>

                    <div className="mt-4">
                        <hr />
                        <Stack flexDirection={"row"} justifyContent={"space-between"} className="fw-bold">
                            <div>Total:</div>
                            <div>$129.00</div>
                        </Stack>
                        <hr />
                        <Stack className="terms mt-2 mb-4" flexDirection={"row"} gap={'10px'} alignItems={"center"}>
                            <input id={"terms"} type="checkbox" onChange={handleCheckout} />
                            <label htmlFor="terms">I agree with the terms and conditions</label>
                        </Stack>
                        <button className={!checkout ? "btn btn-danger d-block w-100 mb-3 disabled" : "btn btn-danger d-block w-100 mb-3"} disabled={!checkout}>ChECKOUT</button>
                        <button className="btn btn-dark d-block w-100">VIEW CART</button>
                    </div>
                </Stack>
            </Modal>
        </Box>
    )
}