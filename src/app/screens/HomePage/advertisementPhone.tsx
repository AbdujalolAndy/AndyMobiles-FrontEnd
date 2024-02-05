import { Box } from "@mui/material"

export const AdPhone = () => {
    return (
        <Box className="ads_phone">
            <video
                loop
                muted
                playsInline={true}
                autoPlay
                src="/vid/ads_media.mp4"
                className="w-100"
            >
            </video>
        </Box>
    )
}