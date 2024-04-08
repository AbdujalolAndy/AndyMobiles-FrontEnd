import { useRef, useState, useCallback } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

import {
    Box,
    Button,
    FormControl,
    MenuItem,
    Stack,
    Typography,
    Select,
    TextField,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from "../../../lib/sweetAlert";
import CommunityServiceApi from "../../apiServices/communityServiceApi";
import { Blog, BlogCreate } from "../../types/blog";
import { serverApi } from "../../../lib/config";
import assert from "assert";
import Definer from "../../../lib/Definer";
export const TuiEditor = (props: any) => {
    /** INITIALIZATIONS */
    const editorRef = useRef();
    const [blogData, setBlogData] = useState<BlogCreate>({
        blog_category: '',
        blog_context: "",
        blog_title: '',
        blog_images: []
    })
    //Handlers

    function handleGetTitle(e: any) {
        blogData.blog_title = e.target.value
        setBlogData({ ...blogData })
    }

    function hadleGetCategory(e: any) {
        blogData.blog_category = e.target.value
        setBlogData({ ...blogData })
    }

    async function uploadImage(image: any) {
        try {
            const communityServiceApi = new CommunityServiceApi();
            const path = await communityServiceApi.uploadImageData(image);
            blogData.blog_images.push(path)
            setBlogData({ ...blogData });
            const source: string = `${serverApi}/${path}`
            return source
        } catch (err: any) {
            await sweetErrorHandling(err)
        }
    }

    async function handleSubmitBlog() {
        try {
            const editor: any = editorRef.current
            blogData.blog_context = editor?.getInstance().getHTML()
            setBlogData({ ...blogData })
            console.log(blogData)
            assert.ok(
                blogData.blog_category != "" &&
                blogData.blog_context != "" &&
                blogData.blog_title != "",
                Definer.input_err1
            )

            const communityServiceApi = new CommunityServiceApi();
            const result = await communityServiceApi.createBlogData(blogData)
            assert.ok(result, Definer.general_err1);
            await sweetTopSmallSuccessAlert("succeessfully submitted!", 500, false)
            props.setValue("7")
        } catch (err: any) {
            await sweetErrorHandling(err)
        }
    }
    return (
        <Stack>
            <Stack
                direction="row"
                style={{ margin: "40px" }}
                justifyContent="space-evenly"
                alignItems={"center"}
            >
                <Box className={"form_row"} style={{ width: "300px" }}>
                    <div className="fs-4">Select a Category</div>
                    <FormControl sx={{ width: "100%", background: "white" }}>
                        <Select
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                            onChange={hadleGetCategory}
                        >
                            <MenuItem>
                                <span>Choose a category</span>
                            </MenuItem>
                            <MenuItem value={"CELEBRITY"}>Celebrity</MenuItem>
                            <MenuItem value={"EVALUATION"}>Evaluation</MenuItem>
                            <MenuItem value={"STORY"}>Story</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <div className="form_row" style={{ width: "300px" }}>
                    <div className="fs-4">Write a Title</div>
                    <input
                        type="text"
                        style={{ width: "300px", border: "1px solid gray", padding: "3px 10px" }}
                        placeholder="Enter a title"
                        onKeyUp={handleGetTitle}
                    />
                </div>

            </Stack>

            {/*@ts-ignore*/}
            <Editor
                ref={editorRef}
                initialValue="Type here"
                placeholder="Type here"
                previewStyle="vertical"
                height="640px"
                initialEditType="WYSIWYG"
                toolbarItems={[
                    ["heading", "bold", "italic", "strike"],
                    ["image", "table", "link"],
                    ["ul", "ol", "task"],
                ]}
                hooks={{
                    addImageBlobHook: async (image: any, callBack: any) => {
                        const imageUploader = await uploadImage(image)
                        callBack(imageUploader)
                        return false
                    },
                }}
                events={{
                    load: function (param: any) { },
                }}
            />
            <Stack direction="row" justifyContent="center">
                <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: "30px", width: "250px", height: "45px" }}
                    onClick={handleSubmitBlog}
                >
                    SUBMIT
                </Button>
            </Stack>
        </Stack>
    );
};
