import { Comment, Favorite, RemoveRedEye } from "@mui/icons-material"
import { Box, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { Blog } from "../../types/blog"
import Moment from "react-moment"
import { serverApi } from "../../../lib/config"

export const BlogsPage = (props: any) => {
    const [loaded, setLoaded] = useState<boolean>(false)
    useEffect(() => {
        setLoaded(true)
        return () => {
            setLoaded(false)
        }
    }, [])
    return (
        <Stack
            className="blogs"
            flexDirection={"row"}
            flexWrap={"wrap"}
            justifyContent={"start"}
        >
            {props.blogs.map((blog: Blog, index: number) => {
                const image_url = blog.mb_data.mb_image ? `${serverApi}/${blog.mb_data.mb_image}` : "/pictures/auth/default_user.svg"
                return (
                    <Box className={loaded ? "blog_card aos-animate" : ""} data-aos="fade-left" data-aos-delay={150 * index}>
                        <div className="blog_img w-100 position-relative">
                            <div className="blog_type position-absolute">{blog.blog_category}</div>
                            <img src={blog.blog_image ?? "/icons/blog_1.jpg"} alt="blog_img" />
                        </div>
                        <div className="blog_body">
                            <div className="me-2 ms-2">
                                <Stack className="blog_subtitle p-2" flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                    <div className="blog_author">
                                        <i className="fa-solid fa-calendar-days me-2"></i>
                                        <span>
                                            <Moment format="YYYY-MM-DD">
                                                {blog.createdAt}
                                            </Moment>
                                        </span>
                                    </div>
                                    <Stack className="statistic" flexDirection={"row"} gap={"15px"}>
                                        <div className="d-flex gap-2 align-items-center">
                                            {blog.blog_comments.toString()}
                                            <Comment />
                                        </div>
                                        <div className="d-flex gap-2 align-items-center">
                                            {blog.blog_likes.toString()}
                                            <Favorite />
                                        </div>
                                        <div className="d-flex gap-2 align-items-center">
                                            {blog.blog_views.toString()}
                                            <RemoveRedEye />
                                        </div>
                                    </Stack>
                                </Stack>
                                <div className="blog_title fs-2 fw-bold">
                                    <NavLink to="#">
                                        {blog.blog_title}
                                    </NavLink>
                                </div>
                                <div className="blog_text">
                                    {blog.blog_context}
                                </div>
                                <div className="blog_author d-flex align-items-center gap-3 mt-3 mb-1">
                                    <img src={image_url} alt="" />
                                    <a
                                        className="author_name fw-bold"
                                        href="/"
                                    >
                                        {blog.mb_data.mb_nick}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Box>
                )
            })}

        </Stack>
    )
}