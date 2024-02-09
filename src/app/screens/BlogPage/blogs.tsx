import { Favorite, RemoveRedEye } from "@mui/icons-material"
import { Box, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export const BlogsPage = (props: any) => {
    const [loaded, setLoaded] = useState<boolean>(false)
    useEffect(() => {
        setLoaded(true)
        return () => {
            setLoaded(false)
        }
    }, [])
    return (
        <Stack className="blogs" flexDirection={"row"} flexWrap={"wrap"} gap={"10px"} justifyContent={"center"}>
            {Array.from({ length: props.blogs }).map((ele, index) => (
                <Box className={loaded ? "blog_card aos-animate" : ""} data-aos="fade-left" data-aos-delay={150 * index}>
                    <div className="blog_img w-100 position-relative">
                        <div className="blog_type position-absolute">Celebrity</div>
                        <img src="/icons/blog_1.jpg" alt="blog_img" />
                    </div>
                    <div className="blog_body m-2">
                        <Stack className="blog_subtitle" flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                            <div className="blog_author">
                                <i className="fa-solid fa-calendar-days me-2"></i>
                                <span>30 Jan 2024</span>
                            </div>
                            <Stack className="statistic" flexDirection={"row"} gap={"15px"}>
                                <div className="d-flex gap-2 align-items-center">
                                    {"2"}
                                    <i className="fa-solid fa-comment"></i>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    {"14"}
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    {"25"}
                                    <i className="fa-solid fa-eye"></i>
                                </div>
                            </Stack>
                        </Stack>
                        <div className="blog_title fs-2 fw-bold">
                            <NavLink to="#">
                                Iphone stock market
                            </NavLink>
                        </div>
                        <div className="blog_text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        </div>
                        <div className="blog_author d-flex align-items-center gap-3 mt-3">
                            <img src="/icons/blog_1.jpg" alt="" />
                            <div className="author_name fw-bold">
                                Roza Salazar
                            </div>
                        </div>
                    </div>
                </Box>
            ))}

        </Stack>
    )
}