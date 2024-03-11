import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Container, Stack, Tab } from "@mui/material"
import Questions from "./questions"
import "../../css/faqPage.css"
import Footer from "../../components/footer"
import { useState } from "react"

const FaqPage = () => {
    const [value, setValue] = useState<string>("1")

    function handleValue(order: string) {
        setValue(order)
    }
    return (
        <Box className="faqPage">
            <Container>
                <TabContext value={value}>
                    <Stack className="faq_header" flexDirection={"row"} justifyContent={"space-between"}>
                        <Box className="faq_title fs-1 fw-bold">
                            Frequently Asked Questions
                        </Box>
                        <Box>
                            <TabList>
                                <Tab value="1" label="General" onClick={() => handleValue("1")} />
                                <Tab value="2" label="Payment" onClick={() => handleValue("2")} />
                                <Tab value="3" label="Services" onClick={() => handleValue("3")} />
                                <Tab value="4" label="Refund" onClick={() => handleValue("4")} />
                                <Tab value="5" label="Contact" onClick={() => handleValue("5")} />
                            </TabList>
                        </Box>

                    </Stack>
                    <div className="faq_body mt-4">
                        <TabPanel value="1">
                            <Questions  />
                        </TabPanel>
                        <TabPanel value="2">
                            <Questions />
                        </TabPanel>
                        <TabPanel value="3">
                            <Questions />
                        </TabPanel>
                        <TabPanel value="4">
                            <Questions />
                        </TabPanel>
                        <TabPanel value="5">
                            <Questions />
                        </TabPanel>
                    </div>
                </TabContext>
            </Container>
        </Box>
    )
}

export default FaqPage