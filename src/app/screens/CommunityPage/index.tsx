import { Box, Button, Stack, Tab } from "@mui/material"
import "../../css/communityPage.css"
import Footer from "../../components/footer"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { ChattingBoard } from "./chattingBoard"
import { useState } from "react"

const CommunityPage = () => {
    const [value, setValue] = useState<string>("0")
    function handleValue(num:string){
        setValue(num)
    }
    return (
        <Box>
            <Box className="communityPage">
                <TabContext value={value}>
                    <Stack className="container" flexDirection={"row"} gap={"30px"}>
                        <Stack className="my_sellers">
                            <Stack className="my_info" justifyContent={"center"} alignItems={"center"}>
                                <img src="/icons/default_user.svg" alt="my image" />
                                <div className="fs-1 fw-bold mt-2">Andy</div>
                                <p>9 members</p>
                            </Stack>
                            <Stack className="chat_group">
                                <TabList>
                                    <Stack className="w-100">
                                        <Box className="collocutor" onClick={() => handleValue("1")}>
                                            <div className="collocutor_info">
                                                <img src="/icons/default_user.svg" alt="" />
                                                <Tab label="Community" value={"1"} />
                                            </div>
                                        </Box>
                                        {Array.from({ length: 5 }).map((ele, index) => (
                                            <Box className="collocutor"  onClick={() => handleValue((index+1).toString())}>
                                                <div className="collocutor_info">
                                                    <img src="/icons/default_user.svg" alt="" />
                                                    <Tab className="tab" value={(index+1)} label="Jonny" />
                                                </div>
                                            </Box>
                                        ))}
                                    </Stack>
                                </TabList>
                            </Stack>
                        </Stack>
                        <TabPanel value="1">
                            <ChattingBoard name={"Andy"} />
                        </TabPanel>
                    </Stack>
                </TabContext>
            </Box>
            <Footer />
        </Box>
    )
}

export default CommunityPage