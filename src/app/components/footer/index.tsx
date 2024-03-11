import { Box, Stack } from "@mui/material"
import "../../css/footer.css"
const Footer = () => {
    return (
        <div>
            <footer className="footer position-relative">
                <div className="container">
                    <div className="waves">
                        <div className="wave" id="wave1"></div>
                        <div className="wave" id="wave4"></div>
                    </div>
                    <Stack className="row" direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Box className="footer-col">
                            <div className="mb-4"><span className="fw-bold fs-1 text-dark">Andy</span><span className="text-warning fw-bold fs-4">Mobiles.</span></div>
                            <Stack direction={"row"} gap={"70px"}>
                                <ul>
                                    <li><a href="/">HOME</a></li>
                                    <li><a href="/brands">BRANDS</a></li>
                                    <li><a href="/products">PRODUCTS</a></li>
                                    <li><a href="/blogs">BLOG</a></li>
                                    <li><a href="/user-page">MY PAGE</a></li>
                                    <li><a href="/track-order">TRACK ORDER</a></li>
                                </ul>
                                <ul>
                                    <li><a href="/faq">FAQ</a></li>
                                    <li><a href="/user-page">MY SETTINGS</a></li>
                                    <li><a href="/user-page/wishlist">WISHLIST</a></li>
                                    <li><a href="/user-page/posts">MY POSTS</a></li>
                                </ul>
                            </Stack>
                            <Stack className="social-links mt-4" direction={"row"} gap={"30px"}>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </Stack>
                        </Box>
                        <Box className="email-col">
                            <div className="mb-3 text-warning">If you have questions.Feel free contact with us</div>
                            <Stack direction={"row"} className="footer_email">
                                <input type="text" className="border p-2 m-0" placeholder="Your email here" />
                                <button>SUBMIT</button>
                            </Stack>
                            <Box className={"mt-4"}>
                                <div className="mt-2">
                                    <span><i className="fa-solid fa-square-phone me-3 text-warning fs-2"></i></span>
                                    <span className="text-light fs-4 fw-bold">+8210 3201 1222</span>
                                </div>
                                <div className="mt-2">
                                    <span><i className="fa-solid fa-envelope me-3 text-warning fs-2"></i></span>
                                    <span className="text-light fs-4 fw-bold">abdujalolnabijonov20@gmail.com</span>
                                </div>
                                <div className="mt-2">
                                    <span><i className="fa-solid fa-map-location-dot me-3 text-warning fs-2"></i></span>
                                    <span className="text-light fs-4 fw-bold">South Korea, Yeosu-si</span>
                                </div>
                                <div className="mt-2">
                                    <span><i className="fa-solid fa-user-clock me-3 text-warning fs-2"></i></span>
                                    <span className="text-light fs-4 fw-bold">Mon~Fri 24 hours</span>
                                </div>
                            </Box>
                        </Box>
                    </Stack>
                    <hr className="text-light" />
                    <div className="privacies">
                        <Stack direction={"row"} className="fw-bold text-light mt-2" gap={"10px"}>
                            <div>Website Terms</div>
                            <div>|</div>
                            <div>Privacy Policy</div>
                            <div>|</div>
                            <div>Accessibility Statement</div>
                            <div>|</div>
                            <div>Marketing</div>
                            <div>|</div>
                            <div>Do Not Sell</div>
                        </Stack>
                        <div className="mt-2 text-warning">&copy;2024 AndyMobiles. All Rights Reserved.</div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer