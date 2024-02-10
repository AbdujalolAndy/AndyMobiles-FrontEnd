import { Box, Container, Stack } from "@mui/material"
import "../../css/contactPage.css"
import Footer from "../../components/footer"
const ContactUsPage = () => {
    return (
        <Box className={"contactPage"}>
            <Container>
                <Stack alignItems={"center"}>
                    <div className="fs-1 text-center fw-bold">Get In Touch</div>
                    <Box className="contact_data mb-5">
                        <Stack className={"contact_data_one mb-4"} flexDirection={"row"} justifyContent={"space-between"} gap={"50px"}>
                            <div className="contact_name">
                                <input type="text" placeholder="Name *" />
                            </div>
                            <div className="contact_email">
                                <input type="text" placeholder="Email *" />
                            </div>
                        </Stack>
                        <Box className={"mb-4"}>
                            <input type="text" placeholder="Subject *" />
                        </Box>
                        <Box className={""}>
                            <textarea name="" id="" cols={30} rows={20} placeholder="Messages *"></textarea>
                        </Box>
                    </Box>
                </Stack>
                <Stack className="Box" alignItems={"center"}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.3869006115756!2d127.70083591185833!3d34.77103407636234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356ddf42129203b7%3A0x76e8617e3e2070be!2s707-3%20Mipyeong-dong%2C%20Yeosu%2C%20Jeollanam-do!5e0!3m2!1sen!2skr!4v1707523400326!5m2!1sen!2skr"
                        width="800"
                        height="450"
                        style={{border:"0", borderRadius:"20px", marginBottom:"100px"}}
                    ></iframe>
                </Stack>
            </Container>
            <Footer />
        </Box>
    )
}

export default ContactUsPage