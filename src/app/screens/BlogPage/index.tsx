import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Container, Pagination, PaginationItem, Stack, Tab } from "@mui/material"
import { BlogsPage } from "./blogs"
import { useEffect, useState } from "react"
import { ArrowBack, ArrowForward } from "@mui/icons-material"
import { Route, Switch, useRouteMatch } from "react-router-dom"
import { ViewerPage } from "../../components/tuiEditor/tuiViewer"
import "../../css/blogPage.css"

const BlogPage = () => {
    //Initilizations
    const blogPath = useRouteMatch().path;
    const [value, setValue] = useState<string>("1");

    //3 circle React Hook 
    useEffect(() => {

    }, [])

    //Handlers
    function handleValue(num: string) {
        setValue(num)
    }
    return (
        <Box className="blogPage mt-3">
            <Container>
                <Switch>
                    <Route path={`${blogPath}/:id`}>
                        <ViewerPage />
                    </Route>
                    <Route path={blogPath}>
                        <TabContext value={value}>
                            <Stack
                                style={{ position: "relative", zIndex: '2' }}
                                flexDirection={"row"}
                                justifyContent={"space-between"}
                            >
                                <TabList >
                                    <Tab className="blog_tab" value={"1"} label="All" onClick={() => handleValue("1")} />
                                    <Tab className="blog_tab" value={"2"} label="Celebrities" onClick={() => handleValue("2")} />
                                    <Tab className="blog_tab" value={"3"} label="Evaluation" onClick={() => handleValue("3")} />
                                    <Tab className="blog_tab" value={"4"} label="Stories" onClick={() => handleValue("4")} />
                                </TabList>
                                <Stack className="blog_sorting" flexDirection={"row"} alignItems={"center"}>
                                    <div>Sort by: </div>
                                    <select className="form-select fw-bold ">
                                        <option value="newest">Date, new to old</option>
                                        <option value="newest">Date, old to new</option>
                                        <option value="newest">Alphabet A-z</option>
                                        <option value="newest">Alphabet Z-a</option>
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
        </Box>
    )
}

export default BlogPage