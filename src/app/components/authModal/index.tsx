import React from "react";
import { Backdrop, Fade, Modal } from "@material-ui/core"
import { Box, Stack } from "@mui/material"
import "./../../css/authModal.css"

export const AuthenticationModal = (props: any) => {
    //Initilizations
    const [signIn, toggle] = React.useState(true);

    //Handlers

    return (
        <Box>
            <Modal
                aria-labelledby="transition modal-title"
                aria-describedby="transition modal description"
                onClose={props.handleSignUpClose}
                open={props.openAuth}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
            >
                <Fade
                    in={props.openAuth}
                >
                    <Stack className="bg-light" sx={{ width: "800px", height: "400px", position: "absolute", top: "25%", left: "26%", borderRadius: "20px" }}>
                        <Box className="auth_container">
                            <Box className={"auth_signUp"} style={signIn ? {} : { transform: "translateX(100%)", opacity: "1", zIndex: "5" }}>
                                <Box className={"signUp_body"}>
                                    <div className="login_title fw-bold m-0">Create Account</div>
                                    <input type="text" placeholder="Name" />
                                    <input type="email" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <button className={'btn btn-dark'}>Sign Up</button>
                                </Box>
                            </Box>
                            <Box className={"auth_logIn"}>
                                <Box className={"logIn_body"} style={signIn ? {} : { transform: "translateX(100%)" }}>
                                    <div className="signup_title fw-bold m-0">Sign in</div>
                                    <input type="email" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <a className={"auth_anchor"} href="#">Forgot your password?</a>
                                    <button className="btn btn-dark">Sign In</button>
                                </Box>
                            </Box>
                            <Box className={"auth_overlay bg-warning"} style={signIn ? {} : { transform: "translateX(-100%)" }}>
                                <Stack alignItems={"center"} flexDirection={"row"} className={"overlay_body"} style={signIn ? { transform: "translateX(-50%)" } : {}}>
                                    <Box className={"overlay"} style={signIn ? {} : { transform: "translate(0)" }}>
                                        <Box className="overlay_panel text-dark">
                                            <div className="left_overlay_title fs-2 fw-bold">Welcome Back!</div>
                                            <p>
                                                To keep connected with us please login with your personal info
                                            </p>
                                            <button className="ghost_button border-0 btn btn-outline-success" onClick={() => toggle(true)}>
                                                Sign In
                                            </button>
                                        </Box>
                                    </Box>
                                    <Box className={"righ_overlay"} style={signIn ? { transform: "translateX(0)" } : {}}>
                                        <Box className="overlay_panel text-dark">
                                            <div className="right_overlay_title fs-2 fw-bold ">Hello, Friend!</div>
                                            <p>
                                                Enter your personal details and start journey with us
                                            </p>
                                            <button className="ghost_button border-0 btn btn-outline-success" onClick={() => toggle(false)}>
                                                Sign Up
                                            </button>
                                        </Box>
                                    </Box>
                                </Stack>
                            </Box>
                        </Box>
                    </Stack>
                </Fade>
            </Modal>
        </Box >
    )
}