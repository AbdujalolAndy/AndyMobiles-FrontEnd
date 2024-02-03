import { Box, Container } from "@mui/material"
import { NewProducts } from "./releasedProducts"
import "../../css/homePage.css"
import "swiper/swiper-bundle.css"
import { AdPhone } from "./advertisementPhone"
import { DealContract } from "./deal_contract"
import SaleProducts from "./saleProducts"

function HomePage() {
    return (
        <Box className="HomePage">
            <NewProducts />
            <DealContract />
            <AdPhone />
            <SaleProducts />
        </Box>
    )
}

export default HomePage