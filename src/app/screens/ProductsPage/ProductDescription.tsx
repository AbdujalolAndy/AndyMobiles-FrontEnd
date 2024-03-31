import { Box } from "@mui/material";

const ProductDescription = (props: any) => {
    return (
        <Box className={"description text-secondary"}>
            <div style={{
                letterSpacing: "1px",
                backgroundColor: "#EAEAEA",
                padding: "10px",
                borderRadius: "10px",
            }}>
                {props.description}
            </div>
        </Box>
    )
}

export default ProductDescription;