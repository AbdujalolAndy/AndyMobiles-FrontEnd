import { Box, Stack } from "@mui/material";
import { useState } from "react";

const ReviewWriting = () => {
    const [ratedStar, setRatedStar] = useState([])
    const [characters, setCharacters] = useState<number>(1500)
    function handleStarts(ratedStarIndex: number) {
        setRatedStar(Array.from({ length: ratedStarIndex }))
    }
    function handleCharacterLimit(e: any) {
        setCharacters(1500 - e.target.value.length)
    }

    return (
        <Box className={"reviewPage"}>
            <div className="review_rating mb-3">
                <div className="text-secondary fs-4 mb-2">Rating</div>
                <Stack className="fs-5" flexDirection={"row"} gap={"5px"} alignItems={"center"}>
                    <i className={ratedStar.some((ele, index) => index == 0) ? "fa-solid fa-star" : "fa-regular fa-star"} onClick={() => handleStarts(1)}></i>
                    <i className={ratedStar.some((ele, index) => index == 1) ? "fa-solid fa-star" : "fa-regular fa-star"} onClick={() => handleStarts(2)}></i>
                    <i className={ratedStar.some((ele, index) => index == 2) ? "fa-solid fa-star" : "fa-regular fa-star"} onClick={() => handleStarts(3)}></i>
                    <i className={ratedStar.some((ele, index) => index == 3) ? "fa-solid fa-star" : "fa-regular fa-star"} onClick={() => handleStarts(4)}></i>
                    <i className={ratedStar.some((ele, index) => index == 4) ? "fa-solid fa-star" : "fa-regular fa-star"} onClick={() => handleStarts(5)}></i>
                </Stack>
            </div>
            <div className="review_title">
                <div className="fs-4 text-secondary mb-2" >Review Title</div>
                <input type="text" placeholder="Give your review a title" />
            </div>
            <div className="review_body">
                <span className="fs-4 text-secondary">Body of Review </span><span className="fs-5">({characters})</span>
                <textarea cols={40} placeholder="Write your comments here" onChange={handleCharacterLimit}></textarea>
            </div>
            <Stack alignItems={"end mb-3"}>
                <button className="btn btn-dark rounded-0">SUBMIT REVIEW</button>
            </Stack>
        </Box>
    )
}

export default ReviewWriting;