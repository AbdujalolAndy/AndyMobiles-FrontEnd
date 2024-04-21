import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Container, Stack, Tab } from "@mui/material"
import { useEffect, useState } from "react"
import "../../css/faqPage.css"
import Inquiry from "./inquiry"
import { faq } from "./faqs"
import { DownToUpBtn } from "../../components/features/downToUpBtn"

const FaqPage = () => {
    //initializations
    const [value, setValue] = useState<string>("1")
    //React Hook
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    //handler
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
                                <Tab className="fw-bold" value="1" label="General" onClick={() => handleValue("1")} />
                                <Tab className="fw-bold" value="2" label="Payment" onClick={() => handleValue("2")} />
                                <Tab className="fw-bold" value="3" label="Services" onClick={() => handleValue("3")} />
                                <Tab className="fw-bold" value="4" label="Refund" onClick={() => handleValue("4")} />
                                <Tab className="fw-bold" value="5" label="Contact" onClick={() => handleValue("5")} />
                            </TabList>
                        </Box>

                    </Stack>
                    <div className="faq_body mt-4">
                        <TabPanel value="1">
                            <Inquiry inquiries={faq.General} />
                        </TabPanel>
                        <TabPanel value="2">
                            <Inquiry inquiries={faq.Payment} />
                        </TabPanel>
                        <TabPanel value="3">
                            <Inquiry inquiries={faq.Services} />
                        </TabPanel>
                        <TabPanel value="4">
                            <Inquiry inquiries={faq.Refund} />
                        </TabPanel>
                        <TabPanel value="5">
                            <Inquiry inquiries={faq.Contact} />
                        </TabPanel>
                    </div>
                </TabContext>
            </Container>
            <DownToUpBtn address={"#"} />
        </Box>
    )
}

export default FaqPage