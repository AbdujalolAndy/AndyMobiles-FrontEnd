import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Container, Pagination, PaginationItem, Stack, Tab } from "@mui/material"
import { BlogsPage } from "./blogs"
import "../../css/blogPage.css"
import { useEffect, useState } from "react"
import { ArrowBack, ArrowForward } from "@mui/icons-material"
import Footer from "../../components/footer"
import { Route, Switch, useRouteMatch } from "react-router-dom"
import { ViewerPage } from "../../components/tuiEditor/tuiViewer"

const BlogPage = () => {
    const blogPath = useRouteMatch().path;
    const [value, setValue] = useState<string>("1")
    useEffect(() => {

    }, [])
    function handleValue(num: string) {
        setValue(num)
    }
    return (
        <Box className="blogPage mt-3">
            <Container>
                <Switch>
                    <Route path={`${blogPath}/:id`}>
                        <ViewerPage/>
                    </Route>
                    <Route path={blogPath}>
                        <TabContext value={value}>
                            <Stack flexDirection={"row"} justifyContent={"space-between"}>
                                <TabList >
                                    <Tab className="fw-bold" value={"1"} label="All" onClick={() => handleValue("1")} />
                                    <Tab className="fw-bold" value={"2"} label="Celebrities" onClick={() => handleValue("2")} />
                                    <Tab className="fw-bold" value={"3"} label="Evaluation" onClick={() => handleValue("3")} />
                                    <Tab className="fw-bold" value={"4"} label="Stories" onClick={() => handleValue("4")} />
                                </TabList>
                                <Stack className="blog_sorting" flexDirection={"row"} alignItems={"center"}>
                                    <p className="pt-2" style={{ width: "100px" }}>Sort by: </p>
                                    <select className="form-select fw-bold">
                                        <option value="newest">Newest</option>
                                    </select>
                                </Stack>
                            </Stack>
                            <TabPanel value={"1"}>
                                <BlogsPage blogs={6} />
                            </TabPanel>
                            <TabPanel value={"2"}>
                                <BlogsPage blogs={4} />
                            </TabPanel>
                            <TabPanel value={"3"}>
                                <BlogsPage blogs={3} />
                            </TabPanel>
                            <TabPanel value={"4"}>
                                <BlogsPage blogs={5} />
                            </TabPanel>
                        </TabContext>
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
                    </Route>
                </Switch>
            </Container>
            <Footer />
        </Box>
    )
}

export default BlogPage