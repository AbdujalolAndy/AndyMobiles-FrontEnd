import React, { useState } from "react"
import { Box, Button, Stack } from "@mui/material"


export const MyAccount = () => {
    //initilizationss
    const [movePosition, setMovePosition] = useState<string>("left")
    const [userImg, setUserImg] = useState<any>("/icons/default_user.svg")
    //React 3 circles hook

    //Handlers
    function handleSetting(position: string) { setMovePosition(position) }
    function handleUser(e: any) {
        const file = e.target.files[0]
        let reader = new FileReader();
        reader.onload = function () {
            setUserImg(reader.result)
        }
        reader.readAsDataURL(file)
    }
    return (
        <Box className={"my_account position-relative"}>
            <Box className="my_account_header" >
                <Stack
                    flexDirection={"row"}
                    alignItems={"center"}
                >
                    <div className="account_img">
                        <img src={userImg} alt="acccount image" />
                    </div>
                    <div className="account_info ps-2">
                        <div className="account_name fs-3 fw-bold">Andy</div>
                        <div className="mt-3 fs-5">Update your photo and personal details</div>
                    </div>
                    <button className={"update_pic_btn"}>
                        <input type="file" onChange={handleUser} accept="image/*" />
                        <i className="fa-solid fa-camera-retro"></i>
                    </button>
                </Stack>
            </Box>
            <Stack
                direction={"row"}
                className={'setting_controller'}
                gap={"30px"}
            >
                <button
                    className="btn text-warning"
                    style={movePosition === "left" ? { borderBottom: "1px solid black" } : {}}
                    onClick={() => handleSetting("left")}>Profile Settings</button>
                <button
                    className="btn text-warning"
                    style={movePosition === "right" ? { borderBottom: "1px solid black" } : {}}
                    onClick={() => handleSetting("right")}>Password Reset</button>
            </Stack>
            <Stack
                className="my_account_body "
                direction={"row"}
                gap={"30px"}
            >
                <Box
                    style={movePosition == "left" ? { transform: "translateX(0%)" } : { transform: "translateX(-130%)" }}

                >
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
                </Box>
                <Box
                    style={movePosition == "right" ? { transform: "translateX(-105%)" } : { transform: "translateX(0%)" }}
                >
                    <Box className="update_email mb-3">
                        <label htmlFor="update_phone" className="fs-5 text-dark fw-bold">Old Password</label>
                        <input type="text" className="form-control ps-3 fs-5" id="update_name" placeholder="Please, enter a previous password" />
                    </Box>
                    <Stack className="mt-4" flexDirection={"row"} gap={"70px"}>
                        <Box className={"w-50"}>
                            <label htmlFor="update_name" className="fs-5 text-dark fw-bold">New User Password</label>
                            <input type="text" className="form-control ps-3  fs-5 w-100" id="update_name" placeholder="new password" />
                        </Box>
                        <Box className={"w-50"}>
                            <label htmlFor="update_phone" className="fs-5 text-dark fw-bold">ReEnter New Password</label>
                            <input type="text" className="form-control ps-3  fs-5" id="update_name" placeholder="repeat new password" />
                        </Box>
                    </Stack>
                    <Stack alignItems={"end"}>
                        <button className="btn btn-outline-warning mt-5 w-50 fw-bold">
                            Save
                        </button>
                    </Stack>
                </Box>

            </Stack>
        </Box>
    )
}