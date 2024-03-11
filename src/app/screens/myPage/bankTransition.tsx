import { Box, Button, Stack } from "@mui/material"

const BankTransition = () => {
    return (
        <Stack alignItems={"center"}>
            <Box className="bank_card">
                <div className="owner_name">
                    Abdujalol Nabijonov
                </div>
                <div className="hide_info_card"></div>
                <div className="card_number">
                    1234 **** **** 1121
                </div>
                <div className="card_expire">
                    12/28
                </div>
                <div className="hide_info"></div>
                <div className="bank_cvc">
                    126
                </div>
            </Box>
            <div className="card_title mt-3 fw-bold fs-3 text-center">
                Bank Deposit Card
            </div>
            <Stack id="card_add" alignItems={"center"}>
                <Box className="card_add">
                    <Box className="card_owner">
                        <label htmlFor="owner fs-5 fw-bold">Card Owner</label>
                        <input type="text" id="owner" />
                    </Box>
                    <Box className="card_number">
                        <label htmlFor="owner fs-5 fw-bold">Card Number</label>
                        <input type="number" id="owner" />
                    </Box>
                    <Stack flexDirection={"row"} justifyContent={"space-between"}>
                        <Box className="card_owner">
                            <label htmlFor="owner fs-5 fw-bold">Expiry Date</label>
                            <input type="text" id="owner" />
                        </Box>
                        <Box className="card_owner">
                            <label htmlFor="owner fs-5 fw-bold">CVC</label>
                            <input type="text" id="owner" />
                        </Box>
                    </Stack>
                    <Stack className="mt-3" alignItems={"center"}>
                        <button className="w-50 btn btn-outline-success">
                            Save
                        </button>
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    )
}

export default BankTransition