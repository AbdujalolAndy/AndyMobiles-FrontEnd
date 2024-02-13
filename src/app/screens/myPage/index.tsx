import { Box, Stack, Tab, Tabs } from "@mui/material";
import "../../css/myPage.css"
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import Footer from "../../components/footer";
import { MyAccount } from "./myAccount";
import BankTransition from "./bankTransition";
import WishList from "./wishList";
import Followers from "./follow";
import Follow from "./follow";
import Posts from "./posts";

const MyPage = () => {
    const [value, setValue] = useState<string>("1")
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
                                <Tab value="1" label="User Account" style={value == "1" ? { borderRight: "4px solid black", backgroundColor: "white" } : {}} onClick={() => handleValue("1")} />
                                <Tab value="2" label="Bank cards" style={value == "2" ? { borderRight: "4px solid black", backgroundColor: "white" } : {}} onClick={() => handleValue("2")} />
                                <Tab value="3" label="wish list" style={value == "3" ? { borderRight: "4px solid black", backgroundColor: "white" } : {}} onClick={() => handleValue("3")} />
                                <Tab value="4" label="followers" style={value == "4" ? { borderRight: "4px solid black", backgroundColor: "white" } : {}} onClick={() => handleValue("4")} />
                                <Tab value="5" label="followings" style={value == "5" ? { borderRight: "4px solid black", backgroundColor: "white" } : {}} onClick={() => handleValue("5")} />
                                <Tab value="6" label="posts" style={value == "6" ? { borderRight: "4px solid black", backgroundColor: "white" } : {}} onClick={() => handleValue("6")} />
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
                    </Stack>
                </TabContext>
            </Box>
            <Footer />
        </Box>
    )
}

export default MyPage;