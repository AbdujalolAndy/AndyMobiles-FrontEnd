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
export const TuiEditor = (props: any) => {
    /** INITIALIZATIONS */
    const history = useHistory();
    const editorRef = useRef();
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
                        >
                            <MenuItem value="">
                                <span>Categoriyani tanlang</span>
                            </MenuItem>
                            <MenuItem value={"celebrity"}>Mashhurlar</MenuItem>
                            <MenuItem value={"evaluation"}>Restaurant baho</MenuItem>
                            <MenuItem value={"story"}>Mening Hikoyam</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <div className="form_row" style={{ width: "300px" }}>
                    <div className="fs-4">Write a Title</div>
                    <input
                        type="text"
                        style={{ width: "300px", border: "1px solid gray", padding: "3px 10px" }}
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
                    addImageBlobHook: {},
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
                >
                    SUBMIT
                </Button>
            </Stack>
        </Stack>
    );
};
