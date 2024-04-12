import { Box, Stack } from "@mui/material"
import { Viewer } from "@toast-ui/react-editor"
import "@toast-ui/editor/dist/toastui-editor.css"
import {useEffect, useRef} from "react"
import ReviewWriting from "../../screens/ProductsPage/reviewWriting"
import ProductReview from "../../screens/ProductsPage/productReview"



export const ViewerPage = (props: any) => {
    //Initializations
    const refViewer = useRef();
    return (
        <Box
            style={{
                padding: "30px",
                borderRadius: "20px",
                boxShadow: "0 0 10px black",
                width: "800px",
                backgroundColor: "rgb(241, 238, 238)"
            }}
        >
            <div className="fw-bold text-center fs-2">Single Article</div>
            <Stack
                alignItems={"center"}
            >
                <Viewer
                    //@ts-ignore
                    ref={refViewer}
                    initialValue={props.chosenBlog?.blog_context}
                    height="600px"
                />
            </Stack>
            {
                props?.targetReviews[0] ? (
                    <ProductReview
                        reviews={props.targetReviews}
                    />
                ) : (
                    <div
                        className="p-2 rounded text-center fw-bold text-secondary"
                        style={{ backgroundColor: "#EAEAEA" }}
                    >
                        This Product has not been reviewed yet. Be First and leave a comment
                    </div>
                )
            }
            <ReviewWriting title_enabled={false} product_id={props.chosenBlog?._id} />
        </Box>
    )
}