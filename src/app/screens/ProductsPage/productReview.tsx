import { Box, Rating, Stack } from "@mui/material";
import { Review } from "../../types/review";
import { serverApi } from "../../../lib/config";
import Moment from "react-moment"
import { useEffect, useState } from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MoodBadIcon from "@mui/icons-material/MoodBad";

interface ReviewsProp {
    reviews: Review[];
    setRebuild: any;
    chosenProduct: any
}
const ProductReview = (props: ReviewsProp) => {
    //Three circle Hook
    useEffect(() => {
        props.setRebuild(new Date)
    }, [])
    return (
        <Box className={"poduct_review"}>
            {
                props.reviews.map((review: Review, index: number) => {
                    const image_url = review.member_data.mb_image ? `${serverApi}/${review.member_data.mb_image}` : ""
                    return (
                        <Box className={"poduct_review_item position-relative"}>
                            <Stack
                                flexDirection={"row"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                            >
                                <Stack
                                    className="review_header mb-3"
                                    flexDirection={"row"}
                                    alignItems={"center"}
                                    gap={"10px"}
                                >
                                    <div
                                        style={{
                                            height: "50px",
                                            width: "50px",
                                            borderRadius: "50%"
                                        }}
                                    >
                                        <img src={image_url ? image_url : "/pictures/auth/default_user.svg"} alt="auth" />
                                    </div>
                                    <Box>
                                        <div className="review_title fs-4">
                                            {review.member_data.mb_nick}
                                        </div>
                                        <div className="review_date">
                                            Reviewed by <b><i>{review.member_data.mb_email ?? review.member_data.mb_nick}</i></b> on <b><i>
                                                <Moment format="YYYY-MM-DD">
                                                    {review.createdAt}
                                                </Moment>
                                            </i></b>
                                        </div>
                                    </Box>
                                </Stack>
                                <Box>
                                    <Rating
                                        sx={{ fontSize: "20px" }}
                                        name="review-rating"
                                        value={props.chosenProduct.product_comments ? props.chosenProduct.product_comments : 0}
                                        readOnly />
                                </Box>
                            </Stack>
                            <div className="review_body ps-4">
                                {review.review_context}
                            </div>
                            <Stack
                                className={"position-absolute"}
                                style={{ bottom: "10px", right: "10px" }}
                                flexDirection={"row"}
                                gap={"10px"}
                            >
                                <Stack
                                    flexDirection={"row"}
                                    alignItems={"center"}
                                    gap={"10px"}
                                >
                                    <div
                                        className="p-2 rounded-circle d-inline"
                                        style={{ backgroundColor: "#EAEAEA" }}
                                    >

                                        <EmojiEmotionsIcon style={{ fill: "grey" }} />
                                    </div>
                                    <div><b>{review?.review_likes.toString() ?? "0"}</b></div>
                                </Stack>
                                <Stack
                                    flexDirection={"row"}
                                    alignItems={"center"}
                                    gap={"10px"}
                                >
                                    <div
                                        className="p-2 rounded-circle d-inline"
                                        style={{ backgroundColor: "#EAEAEA" }}
                                    >

                                        <MoodBadIcon style={{ fill: "grey" }} />
                                    </div>
                                    <div><b>{review?.review_dislikes ? review?.review_dislikes.toString() : "0"}</b></div>
                                </Stack>
                            </Stack>
                        </Box>
                    )
                })
            }
        </Box>
    )
}

export default ProductReview;