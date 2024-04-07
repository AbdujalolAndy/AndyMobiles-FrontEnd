import { Box, Button, Stack, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Dispatch } from "@reduxjs/toolkit";

//REDUX 
import { createSelector } from "reselect"
import { setWishListItems } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { MemberServiceApi } from "../../apiServices/memberServiceApi";
import { serverApi } from "../../../lib/config";
import { stringSplitterHandler } from "../../components/features/stringSplitter";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { WishListItem } from "../../types/others";
import { sweetErrorHandling, sweetTopSmallSuccessAlert, sweetTopSuccessAlert } from "../../../lib/sweetAlert";
import { wishListItemsRetrieve } from "./selector";
import { useHistory } from "react-router-dom";

//SELECTOR
const retrieveWishListItems = createSelector(
    wishListItemsRetrieve,
    (wishListItems) => ({ wishListItems })
)

const WishList = (props: any) => {
    //Initialization
    const { wishListItems } = useSelector(retrieveWishListItems);
    let allPrice: number = 0;
    wishListItems.forEach((ele: WishListItem) => {
        if (ele.product_discount > 1) {
            allPrice += (ele.product_price - (ele.product_price * (ele.product_discount / 100))) * ele.product_qnt
        } else {
            allPrice += (ele.product_price * ele.product_qnt)
        }
    })
    const [totalPrice, setTotalPrice] = useState(allPrice)
    const refs: any = useRef([]);
    const history = useHistory()

    //Handlers
    async function handleChangeQnt(e: any, product: WishListItem, modifier: number) {
        try {
            //fixed_price
            const fixed_price = product.product_discount > 0 ?
                product.product_price - (product.product_price * (product.product_discount / 100)) :
                product.product_price
            //Editing
            const memberServiceApi = new MemberServiceApi();
            await memberServiceApi.editWishListItem({ modifier: modifier, product_id: product.product_id })

            if (modifier < 0 && refs.current[product.product_id].innerHTML == 1) {
                await memberServiceApi.removeWishListItem(product.product_id)
                await memberServiceApi.likenItem(product.product_id, "PRODUCT")
                refs[product.product_name].remove()
            } else if (modifier > 0) {
                refs.current[product.product_id].innerHTML++
                setTotalPrice(totalPrice + fixed_price)
            } else {
                refs.current[product.product_id].innerHTML--
                setTotalPrice(totalPrice - fixed_price)
            }
            refs.current[product.product_image].innerHTML = stringSplitterHandler(refs.current[product.product_id].innerHTML * fixed_price, 3, ".") + "₩"
            props.setRebuild(new Date())
        } catch (err) {
            await sweetErrorHandling(err)
        }
    }
    async function handleRemoveChosenItem(product: WishListItem) {
        try {
            const memberServiceApi = new MemberServiceApi();
            await memberServiceApi.removeWishListItem(product.product_id)
            sweetTopSmallSuccessAlert("successfully Deleted", 300)
        } catch (err: any) {
            await sweetErrorHandling(err)
        }
    }
    async function handleRemoveAll(products: WishListItem[]) {
        try {
            const memberServiceApi = new MemberServiceApi();
            await Promise.all(products.map(ele => memberServiceApi.removeWishListItem(ele.product_id)))
            sweetTopSmallSuccessAlert("Successfully Removed", 300)
        } catch (err) {
            await sweetErrorHandling(err)
        }
    }
    return (
        <Box className={"wishList"}>
            <div className="wish_list_title text-start text-warning fw-bold fs-3 mb-4">
                Wishlist Products
            </div>
            <div className="wish_list mt-5">
                {wishListItems[0] ? (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={2} className="fw-bold">
                                    PRODUCT
                                </TableCell>
                                <TableCell align="center" className="fw-bold">
                                    PRICE
                                </TableCell>
                                <TableCell align="center" className="fw-bold">
                                    QUANTITY
                                </TableCell>
                                <TableCell className="fw-bold">
                                    TOTAL
                                </TableCell>
                                <TableCell className="fw-bold" align="center">
                                    CHOICE
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {wishListItems.map((product: WishListItem, index: number) => {
                                const image_url = `${serverApi}/${product.product_image}`
                                const actual_price: number = product.product_price
                                let fixed_price: any = product.product_discount > 1 ?
                                    product.product_price - (product.product_price * (product.product_discount / 100)) :
                                    0;
                                return (
                                    <TableRow ref={(ele) => refs[product.product_name] = ele}>
                                        <TableCell
                                            align="center"
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center"
                                            }}
                                        >
                                            <img
                                                src={image_url}
                                                alt="image"
                                                style={{ height: "100px", width: "50px" }}
                                            />
                                        </TableCell>
                                        <TableCell align="center" className=" fs-6">
                                            {product.product_name}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            {fixed_price ? (<Stack flexDirection={"row"} gap={"5px"}>
                                                <s className="text-secondary ms-2">{stringSplitterHandler(actual_price, 3, ".")}₩</s>
                                                <span className="fw-bold">{stringSplitterHandler(fixed_price, 3, ".")}₩</span>
                                            </Stack>) : (<span>{actual_price}₩</span>)}
                                        </TableCell>
                                        <TableCell >
                                            <Stack
                                                flexDirection={"row"}
                                                gap={"25px"}
                                            >
                                                <div
                                                    onClick={(e) => handleChangeQnt(e, product, -1)}
                                                    className="btn btn-outline-secondary fw-bold d-flex justify-content-center align-items-center"
                                                    style={{
                                                        width: "30px",
                                                        height: "30px",
                                                    }}
                                                ><RemoveCircle /></div>
                                                <div
                                                    className="fs-5 fw-bold"
                                                    ref={(ele) => (refs.current[product.product_id] = ele)}
                                                >{product.product_qnt}</div>
                                                <div
                                                    onClick={(e) => handleChangeQnt(e, product, 1)}
                                                    className="btn btn-outline-secondary fw-bold d-flex justify-content-center align-items-center"
                                                    style={{
                                                        width: "30px",
                                                        height: "30px",
                                                    }}
                                                ><AddCircle /></div>
                                            </Stack>
                                        </TableCell>
                                        <TableCell
                                            ref={(ele) => refs.current[product.product_image] = ele}
                                            style={{ fontWeight: "bold" }}
                                        >
                                            {fixed_price ?
                                                stringSplitterHandler(fixed_price * product.product_qnt, 3, ".") + "₩" :
                                                stringSplitterHandler(product.product_price * product.product_qnt, 3, ".") + "₩"
                                            }
                                        </TableCell>
                                        <TableCell>
                                            <Stack
                                                flexDirection={"row"}
                                                gap="20px"
                                            >
                                                <div
                                                    className="bg-danger p-2 text-white rounded"
                                                    onClick={(e) => handleRemoveChosenItem(product)}
                                                >
                                                    Remove
                                                </div>
                                                <div className="bg-success p-2 text-white rounded">
                                                    CheckOut
                                                </div>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>) : (
                    <div className="text-secondary fw-bold text-center">There is no Wished Item List</div>
                )}
                {
                    wishListItems[0] ? (
                        <Stack
                            className="mt-4"
                            flexDirection={"row"}
                            justifyContent={"end"}
                            gap={"30px"}
                        >
                            <button
                                className="btn btn-outline-danger fw-bold"
                                onClick={() => { handleRemoveAll(wishListItems) }}
                            >
                                Remove All
                            </button>
                            <button className="btn btn-outline-success fw-bold" onClick={() => { history.push("/products") }}>
                                Continue Shopping
                            </button>
                            <button className="btn btn-outline-secondary fw-bold">
                                CheckOut All
                            </button>
                        </Stack>
                    ) : null
                }
                <hr />
                <Stack className="wishList_amount" alignItems={"center"}>
                    <div className="fs-3 fw-bold text-center mb-3">Cart Totals</div>
                    <Table >
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    Total Products
                                </TableCell>
                                <TableCell>
                                    <b>{wishListItems.length}</b>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    Total Price
                                </TableCell>
                                <TableCell className="fw-bold">
                                    {stringSplitterHandler(totalPrice, 3, ".")}₩
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Stack className="terms_check" alignItems={"center"} flexDirection={"row"} gap={"10px"}>
                        <input id="terms" type="checkbox" className="form-check-input" />
                        <label htmlFor="terms" className=" text-dark ">I agree with the terms and conditions</label>
                    </Stack>
                    <button className="btn btn-danger mt-3">
                        PROCEED TO ChECKOUT
                    </button>
                </Stack>
            </div>
        </Box>
    )
}

export default WishList;