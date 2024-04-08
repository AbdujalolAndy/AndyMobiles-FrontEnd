import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Stack, Tab } from "@mui/material"
import { useEffect, useState } from "react"
import TargetPosts from "./targetPosts"
import { verifiedMemberData } from "../../apiServices/verified"
import CommunityServiceApi from "../../apiServices/communityServiceApi"

//Redux
import { createSelector } from "reselect"
import { Dispatch } from "@reduxjs/toolkit"
import { Blog } from "../../types/blog"
import { setTargetBlogs } from "./slice"
import { useDispatch, useSelector } from "react-redux"
import { targetBlogsRetrieve } from "./selector"

//Slice
const actionDispatch = (dispatch: Dispatch) => ({
    setTargetBlogs: (data: Blog[]) => dispatch(setTargetBlogs(data))
})
//Selector

const retrieveTargetBlogs = createSelector(
    targetBlogsRetrieve,
    (targetBlogs) => ({ targetBlogs })
)


const Posts = () => {
    //Initializations
    const [value, setValue] = useState<string>("1");
    const { setTargetBlogs } = actionDispatch(useDispatch());
    const { targetBlogs } = useSelector(retrieveTargetBlogs)
    const [searchObj, setSearchObj] = useState({
        order: "ALL",
        filter: "newToOld",
        page: 1,
        limit: 5,
        mb_id: verifiedMemberData._id
    })

    //React 3 circle Hook
    useEffect(() => {
        //Calling TargetBlogs
        const communityServiceApi = new CommunityServiceApi();
        communityServiceApi.getTargetBlogs(searchObj).then(data => setTargetBlogs(data)).catch(err => console.log(err))
    }, [searchObj])

    //Handlers
    function handleChangeOrder(e: any, order: string, index:string) {
        setValue(index)
        searchObj.order = order;
        setSearchObj({...searchObj})
    }
    return (
        <Box>
            <TabContext value={value}>
                <Stack alignItems={"end"}>
                    <TabList>
                        <Tab value={"1"} label="All" onClick={(e) => handleChangeOrder(e, "ALL","1")} />
                        <Tab value={"2"} label="CELEBRITY" onClick={(e) => handleChangeOrder(e, "CELEBRITY","2")} />
                        <Tab value={"3"} label="EVALUATION" onClick={(e) => handleChangeOrder(e, "EVALUATION",'3')} />
                        <Tab value={"4"} label="STORIES" onClick={(e) => handleChangeOrder(e, "STORY","4")} />
                    </TabList>
                </Stack>
                <Stack>
                    <TabPanel value={"1"}>
                        <TargetPosts targetBlogs={targetBlogs} setSearchObj={setSearchObj} searchObj={searchObj}/>
                    </TabPanel>
                    <TabPanel value={"2"}>
                        <TargetPosts targetBlogs={targetBlogs} setSearchObj={setSearchObj} searchObj={searchObj}/>
                    </TabPanel>
                    <TabPanel value={"3"}>
                        <TargetPosts targetBlogs={targetBlogs} setSearchObj={setSearchObj} searchObj={searchObj}/>
                    </TabPanel>
                    <TabPanel value={"4"}>
                        <TargetPosts targetBlogs={targetBlogs} setSearchObj={setSearchObj} searchObj={searchObj}/>
                    </TabPanel>
                </Stack>
            </TabContext>
        </Box>
    )
}

export default Posts