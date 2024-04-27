import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { Map, MapMarker } from "react-kakao-maps-sdk"



const KakaoMap = (props: any) => {
    //Initializations
    const { title,coords } = props
    //Handlers
    return (
        <Box>
            <Map
                zoomable={false}
                center={coords}
                style={{
                    width: "100%",
                    height: "360px",
                    boxShadow: "0 0 5px black",
                    borderRadius: "20px"
                }}
            >
                <MapMarker position={coords}>
                    <div style={{
                        color: "#000",
                    }}>{ title} Store</div>
                </MapMarker>
            </Map>
        </Box>
    )
}

export default KakaoMap