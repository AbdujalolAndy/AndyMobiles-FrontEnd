import { Box } from "@mui/material"
import { NewProducts } from "./releasedProducts"
import { AdPhone } from "./advertisementPhone"
import { DealContract } from "./deal_contract"
import CommunityPosts from "./communityPost"
import { OurBrands } from "./ourBrands"
import ServiceInfo from "./serviceInfo"
import HomeSortProducts from "./homeSortProducts"
import "../../css/homePage.css"
import "swiper/swiper-bundle.css"
import Footer from "../../components/footer"
import { DownToUpBtn } from "../../components/features/downToUpBtn"

function HomePage() {
    return (
        <Box className="HomePage">
            <NewProducts />
            <DealContract />
            <OurBrands />
            <AdPhone />
            <HomeSortProducts />
            <ServiceInfo />
            <CommunityPosts />
            <Footer />
            <DownToUpBtn address={"#"}/>
        </Box>
    )
}

export default HomePage