import { ArrowBack, ArrowForward, Comment, Favorite, RemoveRedEye } from "@mui/icons-material"
import { Box, Pagination, PaginationItem, Stack } from "@mui/material"
import { Blog } from "../../types/blog"
import { useEffect, useState } from "react"
import { serverApi } from "../../../lib/config"
import Moment from "react-moment"

const TargetPosts = (props: any) => {
    return (
        <Stack
            className=" mt-5"
            alignItems={"center"}
            alignContent={"start"}
        >
            {
                props.targetBlogs ? (
                    <Stack gap={"20px"}>
                        {props.targetBlogs.map((blog: Blog, index: number) => {
                            //@ts-ignore
                            const blog_image = blog.blog_images[0] ? `${serverApi}/${blog.blog_images[0]}` : "/pictures/community/default_article.svg"
                            const user_url = blog.mb_data.mb_image ? `${serverApi}/${blog.mb_data.mb_image}` : "/pictures/auth/default_user.svg"
                            return (
                                <Stack
                                    className={"targetPost position-relative aos-animate"}
                                    flexDirection={"row"}
                                    gap={"20px"}
                                >
                                    <div
                                        className="position-absolute bg-warning text-light fw-bold p-1"
                                        style={{
                                            right: "-10px",
                                            top: "10px",
                                            borderRadius: "10px 0 0px 10px",
                                        }}
                                    >{blog.blog_category}</div>
                                    <div
                                        className="post_img d-flex justify-content-center align-items-center ps-2"
                                    >
                                        <img src={blog_image} alt="image" className="rounded" />
                                    </div>
                                    <Stack>
                                        <Stack
                                            flexDirection={"row"}
                                            alignItems={"center"}
                                            gap={"20px"}
                                            className="mt-2"
                                        >
                                            <div
                                                style={{
                                                    height: "60px",
                                                    width: "60px",
                                                    borderRadius: "50%",
                                                    boxShadow: "0 0 10px white",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center"
                                                }}
                                            >
                                                <img
                                                    src={user_url}
                                                    alt=""
                                                    style={{ width: "70%" }}
                                                />
                                            </div>
                                            <div
                                                className="post_by text-light fw-bold"
                                            >
                                                <a href="">{blog.mb_data.mb_nick}</a>
                                            </div>
                                        </Stack>
                                        <div className="post_titile fs-5 mt-3 text-light">
                                            {blog.blog_title}
                                        </div>
                                    </Stack>
                                    <Stack
                                        flexDirection={"row"}
                                        justifyContent={"space-between"}
                                        className="w-50 read_more position-absolute"
                                    >
                                        <Moment format="YYYY-MM-DD" className="fw-bold fs-6">
                                            {blog.createdAt}
                                        </Moment>
                                        <Stack
                                            flexDirection={"row"}
                                            gap={"20px"}
                                            className="fw-bold"
                                        >
                                            <div>
                                                <Favorite style={{ fill: "white" }} className="me-2" />
                                                <span>{blog.blog_likes.toString()}</span>
                                            </div>
                                            <div>
                                                <Comment className="me-2" style={{ fill: "white" }} />
                                                <span>{blog.blog_comments.toString()}</span>
                                            </div>
                                            <div>
                                                <RemoveRedEye className="me-2" style={{ fill: "white" }} />
                                                <span>{blog.blog_views.toString()}</span>
                                            </div>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            )
                        })}
                    </Stack>
                )
                    : (<div>
                        There is not Post Yet
                    </div>)
            }
            <Pagination
                className="brand_pagination d-flex justify-content-center"
                page={props.searchObj.page}
                count={props.searchObj.page >= 3 ? props.searchObj.page + 1 : 3}
                onChange={(e: any, newValue) => {
                    props.searchObj.page = newValue
                    props.setSearchObj({ ...props.searchObj })
                }}
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
        </Stack >
    )
}

export default TargetPosts