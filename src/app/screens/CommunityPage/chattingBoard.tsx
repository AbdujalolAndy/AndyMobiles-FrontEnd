import { Box, Stack } from "@mui/material"

export const ChattingBoard = (props:any) => {
    return (
        <Box className="chat_board position-relative">
            <Stack className="chat_board_title" flexDirection={"row"} gap={"20px"} alignItems={"center"}>
                <img src="/icons/default_user.svg" alt="" />
                <div className="collocutor_name fw-bold fs-3">
                    {props.name}
                </div>
            </Stack>
            <Box className="chat">
                <Box className="messages">
                    <Stack className="chat_sender" flexDirection={"row"} alignItems={"center"} gap={"10px"} justifyContent={"start"}>
                        <img src="/icons/default_user.svg" alt="" />
                        <div className="message">
                            <div className="sender_name">
                                Jonny
                            </div>
                            <div className="sender_msg">
                                Hello these days so hot
                            </div>
                        </div>
                    </Stack>
                    <Stack className="chat_reciever" flexDirection={"row"} alignItems={"center"} gap={"10px"} justifyContent={"end"}>
                        <div className="message">
                            <div className="sender_name text-end ">
                                Jonny
                            </div>
                            <div className="sender_msg">
                                Hello these days so hot
                            </div>
                        </div>
                        <img src="/icons/default_user.svg" alt="" />
                    </Stack>
                </Box>
                <Stack className="type_msg position-relative" flexDirection={"row"}>
                    <input type="text" className="border-0 bg-light p-2" placeholder="Enter, your message" />
                    <button >
                        <i className="fa-solid fa-paper-plane"></i>
                    </button>
                </Stack>
            </Box>

        </Box>
    )
}