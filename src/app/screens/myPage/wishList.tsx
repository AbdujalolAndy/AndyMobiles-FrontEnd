import { Box, Button, Stack, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const WishList = () => {
    return (
        <Box className={"wishList"}>
            <div className="wish_list_title text-center text-warning fw-bold fs-3 mb-4">
                Wishlist Products
            </div>
            <div className="wish_list">
                <Table>
                    <TableHead>
                        <TableRow>
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
                            <TableCell>
                                DELETE
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <img src="/i" alt="image" />
                            </TableCell>
                            <TableCell>
                                Iphone 13 Pro Max
                            </TableCell>
                            <TableCell>
                                $999.00
                            </TableCell>
                            <TableCell>
                                -   2    +
                            </TableCell>
                            <TableCell>
                                $999.00
                            </TableCell>
                            <TableCell>
                                X
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Stack className="mt-4" flexDirection={"row"} justifyContent={"end"} gap={"30px"}>
                    <button className="btn btn-dark">
                        CONTINUE SHOPPING
                    </button>
                    <button className="btn btn-dark">
                        CONTINUE SHOPPING
                    </button>
                    <button className="btn btn-dark">
                        CONTINUE SHOPPING
                    </button>
                </Stack>
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
                                    <b>3</b>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    Total Price
                                </TableCell>
                                <TableCell>
                                    <b>$1358.00</b>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Stack className="terms_check" alignItems={"center"} flexDirection={"row"} gap={"10px"}>
                        <input id="terms" type="checkbox" className="form-check-input"/>
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