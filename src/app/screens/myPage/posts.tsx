import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Stack, Tab } from "@mui/material"
import { useState } from "react"
import TargetPosts from "./targetPosts"

const Posts = () => {
    const [value, setValue] = useState<string>("1")
    return (
        <Box>
            <TabContext value={value}>
                <Stack alignItems={"end"}>
                    <TabList>
                        <Tab value={"1"} label="All" />
                        <Tab value={"2"} label="CELEBRATION" />
                        <Tab value={"3"} label="EVALUATION" />
                        <Tab value={"4"} label="STORIES" />
                    </TabList>
                </Stack>
                <Stack>
                    <TabPanel value={"1"}>
                        <TargetPosts />
                    </TabPanel>
                </Stack>
            </TabContext>
        </Box>
    )
}

export default Posts