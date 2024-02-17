import { Box } from "@mui/material"
import { Viewer } from "@toast-ui/react-editor"
import "@toast-ui/editor/dist/toastui-editor.css"
import { useRef } from "react"
export const ViewerPage = ()=>{
    const refViewer = useRef();
    return(
        <Box className="viewerPage" style={{paddingBottom:"200px"}}>
            <Viewer
            //@ts-ignore
            ref = {refViewer}
            initialValue="<h1>This is a blog</h1>"
            height="600px"
            />
        </Box>
    )
}