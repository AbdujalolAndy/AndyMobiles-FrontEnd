import { Box } from "@mui/material"
import { Map, MapMarker } from "react-kakao-maps-sdk"
import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";



const PickUpCenter = (props: any) => {
    //Initializations
    const {
        lat,
        lng,
        title
    } = props
    const appkey = "fd22facbd55798ef6e9cb38685ddf5eb";

    useKakaoLoaderOrigin({
        appkey: `${appkey}`,
        libraries: ["clusterer", "drawing", "services"],
    });
    return (
        <Box>
            <div className="fw-bold fs-3 text-center pt-3 pb-3">Visit Our Self-Pickup Center</div>
            <Map
                zoomable={false}
                center={{ lat: props.lat, lng: props.lng }}
                style={{
                    width: "100%",
                    height: "360px",
                    boxShadow: "0 0 5px black",
                    borderRadius: "20px"
                }}
            >
                <MapMarker position={{ lat, lng }}>
                    <div style={{
                        color: "#000",
                        // backgroundColor: "#282A36",
                        // border: "none",
                        // borderRadius: "10px",
                    }}>{title} Store</div>
                </MapMarker>
            </Map>
        </Box>
    )
}

export default PickUpCenter