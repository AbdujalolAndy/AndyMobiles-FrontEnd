import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Pagination, PaginationItem, Stack } from "@mui/material";


const Follow = (props: any) => {
    return (
        <Box>
            <div className="follow_title fs-4 fw-bold">
                {props.action_enable?"FOLLOWERS":"FOLLOWINGS"}
            </div>
            <Stack className="follow" alignItems={"center"}>
                <Stack>
                    <Stack
                        className={"follow_item"}
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Stack flexDirection={"row"} alignItems={"center"} gap="15px">
                            <img src="/icons/default_user.svg" alt="follow_image" />
                            <div className="follow_name fs-3">
                                Andy
                            </div>
                        </Stack>
                        <Box>
                            {props.action_enable ? (
                                <button className="btn btn-danger fw-bold fs-6">

                                    <i className="fa-solid fa-user-plus"></i> Follow Back
                                </button>
                            ) : (
                                <button className="btn btn-success fw-bold fs-6">
                                    <i className="fa-solid fa-user"></i> Following
                                </button>
                            )}

                        </Box>
                    </Stack>
                </Stack>
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
        </Box>
    )
}

export default Follow