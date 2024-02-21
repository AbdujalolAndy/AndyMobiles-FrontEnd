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

const MyPage = () => {
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
                                    style={value == "1" ? { borderLeft: "4px solid black", backgroundColor: "white" } : {}}
                                    onClick={() => handleValue("1")} alignItems={"center"}
                                    sx={{ padding: "0 0 0 10px" }}
                                >
                                    <i className="fa-solid fa-user fs-3"></i>
                                    <Tab value="1" label="User Account" />
                                </Stack>
                                <Stack
                                    flexDirection={"row"}
                                    style={value == "2" ? { borderLeft: "4px solid black", backgroundColor: "white" } : {}}
                                    onClick={() => handleValue("2")}
                                    alignItems={"center"}
                                    sx={{ padding: "0 0 0 10px" }}
                                >
                                    <i className={"fa-solid fa-piggy-bank fs-3"}></i>
                                    <Tab value="2" label="Bank cards" />
                                </Stack>
                                <Stack
                                    flexDirection={"row"}
                                    style={value == "3" ? { borderLeft: "4px solid black", backgroundColor: "white" } : {}}
                                    onClick={() => handleValue("3")}
                                    alignItems={"center"}
                                    sx={{ padding: "0 0 0 10px" }}
                                >
                                    <i className="fa-solid fa-basket-shopping fs-3"></i>
                                    <Tab value="3" label="wish list" />
                                </Stack>
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
                                <Stack
                                    flexDirection={"row"}
                                    style={value == "7" ? { borderLeft: "4px solid black", backgroundColor: "white" } : {}}
                                    onClick={() => handleValue("7")}
                                    alignItems={"center"}
                                    sx={{ padding: "0 0 0 10px" }}
                                >
                                    <i className="fa-solid fa-signature fs-3"></i>
                                    <Tab value="7" label="Write a post" />
                                </Stack>
                            </Tabs>
                        </Stack>
                        <TabPanel value={"1"} className={"account_info"}>
                            <MyAccount />
                        </TabPanel>
                        <TabPanel value={"2"} className={"account_info"}>
                            <BankTransition />
                        </TabPanel>
                        <TabPanel value={"3"} className={"account_info"}>
                            <WishList />
                        </TabPanel>
                        <TabPanel value={"4"} className={"account_info"}>
                            <Follow action_enable={true} />
                        </TabPanel>
                        <TabPanel value={"5"} className={"account_info"}>
                            <Follow action_enable={false} />
                        </TabPanel>
                        <TabPanel value={"6"} className={"account_info"}>
                            <Posts />
                        </TabPanel>
                        <TabPanel value={"7"} className={"account_info"}>
                            <TuiEditor />
                        </TabPanel>
                    </Stack>
                </TabContext>
            </Box>
            <Footer />
        </Box>
    )
}

export default MyPage;

