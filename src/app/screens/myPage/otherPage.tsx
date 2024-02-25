import { Box, Stack, Tab, Tabs } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { useEffect, useRef, useState } from "react";
import Footer from "../../components/footer";
import { MyAccount } from "./myAccount";
import BankTransition from "./bankTransition";
import WishList from "./wishList";
import Follow from "./follow";
import Posts from "./posts";
import {TuiEditor} from "../../components/tuiEditor/tuiEditor"
import "../../css/myPage.css";

const OtherPage = () => {
    const [value, setValue] = useState<string>("1")

    useEffect(() => {
    }, []);

    function handleValue(order: string) {
        setValue(order)
    }
    return (
        
        <Box >
            <Box className="myPage">
                <TabContext value={value}>
                    <Stack className="container" flexDirection={"row"}>
                        <Stack className="setting_controller" flexDirection={"column"} alignItems={"center"}>
                            <div className="user_info">
                                <div className="user_type">USER</div>
                                <div className="user_img">
                                    <img src="/icons/default_user.svg" alt="..." />
                                </div>
                            </div>
                            <div className="user_name fs-1 fw-bold">Andy</div>
                            <Tabs
                                orientation="vertical"
                                className="settings_items"
                            >
                                <Stack
                                    flexDirection={"row"}
                                    style={value == "4" ? { borderLeft: "4px solid black", backgroundColor: "white" } : {}}
                                    onClick={() => handleValue("4")}
                                    alignItems={"center"}
                                    sx={{ padding: "0 0 0 10px" }}
                                >
                                    <i className="fa-solid fa-users fs-3"></i>
                                    <Tab value="4" label="followers" />
                                </Stack>
                                <Stack
                                    flexDirection={"row"}
                                    style={value == "5" ? { borderLeft: "4px solid black", backgroundColor: "white" } : {}}
                                    onClick={() => handleValue("5")}
                                    alignItems={"center"}
                                    sx={{ padding: "0 0 0 10px" }}
                                >
                                    <i className="fa-solid fa-user-plus fs-3"></i>
                                    <Tab value="5" label="followings" />
                                </Stack>
                                <Stack
                                    flexDirection={"row"}
                                    style={value == "6" ? { borderLeft: "4px solid black", backgroundColor: "white" } : {}}
                                    onClick={() => handleValue("6")}
                                    alignItems={"center"}
                                    sx={{ padding: "0 0 0 10px" }}
                                >
                                    <i className="fa-solid fa-message fs-3"></i>
                                    <Tab value="6" label="posts" />
                                </Stack>
                            </Tabs>
                        </Stack>
                        <TabPanel value={"4"} className={"account_info"}>
                            <Follow action_enable={true} />
                        </TabPanel>
                        <TabPanel value={"5"} className={"account_info"}>
                            <Follow action_enable={false} />
                        </TabPanel>
                        <TabPanel value={"6"} className={"account_info"}>
                            <Posts />
                        </TabPanel>
                    </Stack>
                </TabContext>
            </Box>
            <Footer />
        </Box>
    )
}

export default OtherPage;

