import { ArrowBack, ArrowForward } from "@mui/icons-material"
import { Box, Pagination, PaginationItem, Stack } from "@mui/material"

const TargetPosts = () => {
    return (
        <Stack className=" mt-5" alignItems={"center"}>
            <Box className="targetPosts">
                <Stack className="targetPost position-relative" flexDirection={"row"} gap={"20px"}>
                    <div className="post_img">
                        <img src="/icons/galaxy.jpg" alt="image" />
                    </div>
                    <Stack>
                        <div className="post_by">
                            Written by <a href="">Jonny DAEP</a>
                        </div>
                        <div className="post_titile fs-3 mt-3">
                            Almlar
                        </div>
                    </Stack>
                    <div className="read_more position-absolute">
                        READ DETAILS
                    </div>
                </Stack>
            </Box>
            <Pagination
                className="brand_pagination d-flex justify-content-center"
                page={1}
                count={3}
                renderItem={(item) => (
                    <PaginationItem
                        components={{
                            previous: ArrowBack,
                            next: ArrowForward
                        }}
                        {...item}
                        color="secondary"
                    />
                )}
            />
        </Stack>
    )
}

export default TargetPosts