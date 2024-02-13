import { Box, Stack } from "@mui/material";

const ProductReview = () => {
    return (
        <Box className={"poduct_review"}>
            {
                Array.from({ length: 3 }).map(ele => (
                    <Box className={"poduct_review_item"}>
                        <div className="review_header mb-3">
                            <Stack className="product_rating text-secandary mb-2" flexDirection={"row"} gap={"5px"}>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </Stack>
                            <div className="review_title fs-4">
                                Good Phone!
                            </div>
                            <div className="review_date">
                                <b><i>Muhammad</i></b> on <b><i>Sep 30, 2023</i></b>
                            </div>
                        </div>
                        <div className="review_body">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                        </div>
                    </Box>
                ))
            }
        </Box>
    )
}

export default ProductReview;