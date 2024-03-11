import React, { useEffect, useState } from "react"

export const DeviceDetector = () => {
    const [device, setDevice] = useState<String>("");
    useEffect(() => {
        const handleDeviceDetector = () => {
            const userAgent = navigator.userAgent.toLowerCase();
            const isMobile = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
            const isTablet = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);
            if (isMobile && window.screen.width<600) {
                setDevice("Mobile")
            } else if (isTablet && window.screen.width<768) {
                setDevice("Tablet")
            } else {
                setDevice("Desktop")
            }
        }
        handleDeviceDetector();
        window.addEventListener("resize", handleDeviceDetector)
        return () => {
            window.removeEventListener("resize", handleDeviceDetector)
        }
    }, [])
    return device
}

