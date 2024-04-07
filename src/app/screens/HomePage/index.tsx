import { Box } from "@mui/material"
import { NewProducts } from "./releasedProducts"
import { AdPhone } from "./advertisementPhone"
import { DealContract } from "./deal_contract"
import CommunityPosts from "./communityPost"
import { OurBrands } from "./ourBrands"
import ServiceInfo from "./serviceInfo"
import HomeSortProducts from "./homeSortProducts"
import Footer from "../../components/footer"
import { DownToUpBtn } from "../../components/features/downToUpBtn"
import "../../css/homePage.css"
import "swiper/swiper-bundle.css"
import { useEffect } from "react"


function HomePage(props: any) {
    //three circle Hook
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Box className="HomePage">
            <NewProducts
                searchProducts={{ limit: 10, order: "new", random: true, contractMonth: [] }}
                setRebuild={props.setRebuild}
            />
            <DealContract />
            <OurBrands />
            <AdPhone />
            <HomeSortProducts />
            <ServiceInfo />
            <CommunityPosts />
            <Footer />
            <DownToUpBtn address={"#"} />
        </Box>
    )
}

export default HomePage