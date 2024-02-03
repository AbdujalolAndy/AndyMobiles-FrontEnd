import { Box, Stack, Container } from "@mui/material"
import { NavLink } from "react-router-dom"

export const DealContract = () => {
    return (
        <Box className="deal-contract">
            <Container className="mt-5">
                <h1 className="text-center pt-5">Shop by Deal Type</h1>
                <Stack className={"fs-3 contract_list"} flexDirection={"row"} justifyContent={"space-evenly"} alignItems={"center"}>
                    <Box className={"nav-item"}>
                        <NavLink className={"nav-link d-flex align-items-center"} to="/">
                            <i className="fa-solid fa-cash-register  p-3 fs-1"></i>
                            <span>Monthly Payment Phones</span>
                        </NavLink>
                    </Box>
                    <Box className={"nav-item"}>
                        <NavLink className={"nav-link d-flex align-items-center"} to="/">
                            <span className="position-relative p-3">
                                <i className="fa-solid fa-mobile-button fs-1"></i>
                                <i className="fa-solid fa-hand-point-up position-absolute top-0 text-warning "></i>
                            </span>
                            <span>Upgrades Deals</span>
                        </NavLink>
                    </Box>
                    <Box className={"nav-item"}>
                        <NavLink className={"nav-link d-flex align-items-center"} to="/">
                            <i className="fa-solid fa-sim-card  p-3 fs-1"></i>
                            <span>With Sim Only Deals</span>
                        </NavLink>
                    </Box>
                    <Box className={"nav-item"}>
                        <NavLink className={"nav-link d-flex align-items-center"} to="/">
                            <i className="fa-solid fa-handshake  p-3 fs-1"></i>
                            <span>Without Sim Deals</span>
                        </NavLink>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}