import React from "react"
import { Badge, Box, Stack } from "@mui/material"

const Chatting = () => {
    return (
        <Box className={"ChattingPage"}>
            <Stack className="chatting-title">
                <div>
                    <i className="fa-solid fa-paper-plane"></i>
                </div>
                <div>
                    Community Live Chatting
                    <Badge>
                    </Badge>
                </div>
            </Stack>
            <Box className="chatting-body">
                <div className="sender_msg" >

                </div>
                <div className="reciever_msg">

                </div>
            </Box>
            <div className="chatting-type">

            </div>
        </Box>
    )
}

export default Chatting;