import React, { useState } from "react";
import { Badge, Box, Button, Menu, Stack } from "@mui/material";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import "../../css/chattingBadge.css";

const Chatting = () => {
    //Initilizations
    const [openChat, setOpenChat] = useState<boolean>(false);
    //Handlers
    function handleOpenChat() {
        if (!openChat) {
            setOpenChat(true)
        } else {
            setOpenChat(false)
        }

    }
    return (
        <Stack className={"chattingPage"} style={openChat ? { transform: "translateX(0)" } : { transform: "translateX(100%)" }}>
            <Menu
                keepMounted
                open={false}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                PaperProps={{
                    style: {
                        padding: "0",
                        boxShadow: "none",
                    },
                }}
            >

                <Picker
                    data={data}
                    emojiSize={20}
                    emojiButtonSize={28}
                    onEmojiSelect={console.log}
                    maxFrequentRows={0}
                />
            </Menu>
            <Box className={"chatting_open"} onClick={handleOpenChat}>Community Chatting</Box>
            <Stack direction={"row"} justifyContent={"space-between"} className="chatting-header">
                <Stack
                    className="chatting-title"
                    direction={"row"}
                    gap={"10px"}
                    alignItems={"center"}
                >
                    <div>
                        <i className="fa-solid fa-paper-plane"></i>
                    </div>
                    <div>
                        Community Live Chatting
                        <Badge>
                        </Badge>
                    </div>
                </Stack>
                <div>
                    <Button onClick={handleOpenChat}><i className="fa-solid fa-xmark"></i></Button>
                </div>
            </Stack>
            <Box className="chatting-body">
                <div className="sender_msg" >
                </div>
                <div className="reciever_msg">

                </div>
            </Box>
            <Stack
                className="chatting-type"
                direction={"row"}
                gap={"10px"}
                alignItems={"center"}
            >
                <input type="text" />
                <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
                    <button className="btn"><i className="fa-regular fa-face-smile-beam"></i></button>
                    <button className="btn"><i className="fa-solid fa-paper-plane"></i></button>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Chatting;