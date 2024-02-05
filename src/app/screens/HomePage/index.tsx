import { Box } from "@mui/material"
import { NewProducts } from "./releasedProducts"
import "../../css/homePage.css"
import "swiper/swiper-bundle.css"
import { AdPhone } from "./advertisementPhone"
import { DealContract } from "./deal_contract"
import SaleProducts from "./products"
import CommunityPosts from "./communityPost"
import Footer from "../../components/footer"
import { OurBrands } from "./ourBrands"

function HomePage() {
    return (
        <Box className="HomePage">
            <NewProducts />
            <DealContract />
            <OurBrands />
            <AdPhone />
            <SaleProducts />
            <CommunityPosts />
            <Footer />
        </Box>
    )
}

export default HomePage