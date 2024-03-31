import { Box, Stack } from "@mui/material"
import { locations } from "../../../lib/locations"


const PickUpCenter = (props: any) => {

    let brandLocation=locations.map(ele=>{
        if(ele.name===props.brand_location){
            return ele.location
        }else{
            return "https://www.google.com/maps/place//data=!3m1!4b1?entry=ttu"
        }
    })
    return (
        <Box>
            <div className="fw-bold fs-3 text-center pt-3 pb-3">Visit Our Self-Pickup Center</div>
            <Stack alignItems={"center"} className="pb-4">
                <iframe
                    src={`${brandLocation}`}
                    width="100%"
                    height="450"
                    loading="lazy"
                    style={{ borderRadius: "10px", boxShadow: "0 0 10px black" }}
                ></iframe>
            </Stack>
        </Box>
    )
}

export default PickUpCenter