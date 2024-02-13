import { Box, Button, Stack } from "@mui/material"

export const MyAccount = () => {
    return (
        <Box className={"my_account"}>
            <Box className="my_account_header" >
                <Stack flexDirection={"row"} alignItems={"center"} gap={"30px"}>
                    <div className="account_img">
                        <img src="/icons/default_user.svg" alt="acccount image" />
                    </div>
                    <div className="account_info">
                        <div className="account_name fs-3 fw-bold">Andy</div>
                        <p>Update your photo and personal details</p>
                    </div>
                </Stack>
            </Box>
            <div className="my_account_body">
                <Stack className="mb-4" flexDirection={"row"} gap={"70px"}>
                    <Box className={"w-50"}>
                        <label htmlFor="update_name" className="fs-5 text-dark fw-bold">User Name</label>
                        <input type="text" className="form-control ps-3  fs-5 w-100" id="update_name" placeholder="Andy" />
                    </Box>
                    <Box className={"w-50"}>
                        <label htmlFor="update_phone" className="fs-5 text-dark fw-bold">Update Phone Number</label>
                        <input type="text" className="form-control ps-3  fs-5" id="update_name" placeholder="+8291999281" />
                    </Box>
                </Stack>
                <Box className="update_email mt-3">
                    <label htmlFor="update_phone" className="fs-5 text-dark fw-bold">Email Address</label>
                    <input type="text" className="form-control ps-3 fs-5" id="update_name" placeholder="example@gmail.com" />
                </Box>
                <Box className="update_description mt-3">
                    <label htmlFor="update_phone" className="fs-5 text-dark fw-bold">Bio</label>
                    <textarea className="form-control ps-3 fs-6 mt-3" id="update_name" cols={20} rows={10} placeholder="no description">
                    </textarea>
                </Box>
                <Stack alignItems={"end"}>
                    <button className="btn btn-outline-warning mt-5 w-50 fw-bold">
                        Save
                    </button>
                </Stack>
            </div>
        </Box>
    )
}