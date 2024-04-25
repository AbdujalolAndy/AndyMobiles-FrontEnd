import React, { useContext, useEffect, useRef, useState } from "react";
import { Avatar, Badge, Box, Button, Menu, Stack } from "@mui/material";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { socketContext } from "../Context/socketIo";
import { verifiedMemberData } from "../../apiServices/verified";
import assert from "assert";
import Definer from "../../../lib/Definer";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import CommunityServiceApi from "../../apiServices/communityServiceApi";
import { Message } from "../../types/others";
import "../../css/chattingBadge.css";
import { RippleBadge } from "./ripleBadge";

const Chatting = () => {
    //Initilizations
    const [openChat, setOpenChat] = useState<boolean>(false);
    const socket = useContext(socketContext)
    const [context, setContext] = useState<string>("")
    const [messages, setAllMessages] = useState<Message[]>([]);
    const [onlineUsers, setOnlineUsers] = useState<number>(0);
    const refs: any = useRef([])
    //LifeCircle
    useEffect(() => {
        socket.connect();
        socket?.on("connnect", () => {
        })
        socket?.on("totalUser", (data: any) => {
            console.log(data)
            setOnlineUsers(data.totalUser)
        })
        socket?.on("newMsgApp", (msg: Message) => {
            messages.push(msg)
            setAllMessages([...messages])
        })
        if (verifiedMemberData) {
            const communityServiceApi = new CommunityServiceApi();
            communityServiceApi.getAllMessages().then((data: Message[]) => setAllMessages(data.reverse())).catch((err: any) => console.log(err))
        }
    }, [socket])
    //Handlers
    async function handleSubmitMsg() {
        try {
            assert.ok(context, Definer.input_err1)
            assert.ok(verifiedMemberData, Definer.auth_err1)
            socket?.emit("createMsgApp", {
                mb_id: verifiedMemberData?._id,
                mb_img: verifiedMemberData.mb_image,
                msg_sender: verifiedMemberData?.mb_nick,
                msg_text: context,
            })
            refs.current['text'].value = ''
            setContext("")
        } catch (err: any) {
            handleOpenChat()
            refs.current['text'].value = ''
            setContext("")
            await sweetErrorHandling(err)
        }
    }
    function handleOpenChat() {
        if (!openChat) {
            setOpenChat(true)
        } else {
            setOpenChat(false)
        }

    }
    async function hanleEnterTrigger(e: any) {
        if (e.key === "Enter") {
            await handleSubmitMsg()
        }
    }
    return (
        <Stack
            className={"chattingPage"}
            style={openChat ? { transform: "translateX(0)" } : { transform: "translateX(100%)" }}
        >
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
                        <RippleBadge
                            style={{ margin: "-30px 0 0 20px" }}
                            badgeContent={verifiedMemberData ? onlineUsers : 0}
                        />
                    </div>
                </Stack>
                <div>
                    <Button onClick={handleOpenChat}><i className="fa-solid fa-xmark"></i></Button>
                </div>
            </Stack>
            <Box className="chatting-body">
                {
                    messages && messages[0] ? messages.map((message: Message, index: number) => {
                        if (message.mb_id === verifiedMemberData._id) {
                            return (
                                <Box
                                    flexDirection={"row"}
                                    style={{ display: "flex" }}
                                    alignItems={"flex-end"}
                                    justifyContent={"flex-end"}
                                    sx={{ m: "10px 0px" }}
                                >
                                    <div className={"msg_right"}>{message.msg_text}</div>
                                </Box>
                            )
                        } else {
                            return (
                                <Box
                                    flexDirection={"row"}
                                    style={{ display: "flex" }}
                                    sx={{ m: "10px 0px" }}
                                >
                                    <Avatar
                                        alt={message.msg_sender}
                                        src={message.mb_img}
                                    />
                                    <div className={"msg_left"}>{message.msg_text}</div>
                                </Box>
                            )
                        }
                    }) : (
                        <div
                            className=" text-secondary fw-bold rounded mt-5 fs-6 p-2 text-center"
                            style={{ backgroundColor: "#DBDDEF" }}
                        >
                            Dear <span className="text-dark">{verifiedMemberData?.mb_nick ?? "Guest"}.</span> Wecome to Chat.
                        </div>
                    )
                }
            </Box>
            <Stack
                className="chatting-type"
                direction={"row"}
                gap={"10px"}
                alignItems={"center"}
            >
                <input
                    ref={(ele) => refs.current["text"] = ele}
                    onKeyDown={hanleEnterTrigger}
                    type="text"
                    onChange={(e) => {
                        setContext(e.target.value)
                    }
                    } />
                <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
                    <button className="btn" onClick={handleSubmitMsg}><i className="fa-solid fa-paper-plane"></i></button>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Chatting;