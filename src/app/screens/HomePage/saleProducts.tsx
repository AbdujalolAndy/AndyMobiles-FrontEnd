import { Box, Stack } from "@mui/material"

export const SaleProducts = (props: any) => {
    return (
        <Stack className="product_cards" flexDirection={"row"} flexWrap={"wrap"} justifyContent={"center"}>
            {Array.from({ length: 12 }).map((ele, index) => (
                <Box data-aos="fade-up" data-aos-delay={`${100 * index}`} className={props.scrolled ? "product_card opacity-1 aos-animate" : "product_card"}>
                    <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
                    <Box className="card__overlay">
                        <Box className="card__header">
                            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                            <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                            <div className="card__header-text">
                                <h3 className="card__title">Jessica Parker</h3>
                                <span className="card__status">1 hour ago</span>
                            </div>
                        </Box>
                        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                    </Box>
                </Box>
            ))}
        </Stack>
    )
}