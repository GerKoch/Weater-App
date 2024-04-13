import { useEffect, useState } from "react";


const useIconSelect = (ref) => {
    const [icon, setIcon] = useState("")
    // console.log("ref", ref)

    const allIcons = {
        Thunderstorm: "icons/thunderstorms-rain.svg",
        Drizzle: "icons/drizzle.svg",
        Rain: "icons/rain.svg",
        Snow: "icons/snow.svg",
        Clear: "icons/clear-day.svg",
        Atmosphere: "icons/weather.svg",
        Clouds: "icons/fog.svg",
        Fog: "icons/fog.svg",
        Haze: "icons/haze.svg",
        Smoke: "icons/smoke.svg",
    }

    useEffect(() => {
        // switch (ref) {
        //     case "Thunderstorm":
        //         setIcon("icons/thunderstorms-rain.svg")
        //         break;
        //     case "Drizzle":
        //         setIcon("icons/drizzle.svg")
        //         break;
        //     case "Rain":
        //         setIcon("icons/rain.svg")
        //         break;
        //     case "Snow":
        //         setIcon("icons/snow.svg")
        //         break;
        //     case "Clear":
        //         setIcon("icons/clear-day.svg")
        //         break;
        //     case "Atmosphere":
        //         setIcon("icons/weather.svg")
        //         break;
        //     case "Clouds":
        //         setIcon( "icons/fog.svg")
        //         break;
        //     case "Fog":
        //         setIcon("icons/fog.svg")
        //         break;
        //     case "Haze":
        //         setIcon("icons/haze.svg")
        //         break;
        //     case "Smoke":
        //         setIcon("icons/smoke.svg")
        //         break;
        //     default:
        //         setIcon( "icons/clear-day.svg")
        //         break;
        // }
        setIcon(allIcons[ref] || "icons/clear-day.svg")
    }, [ref])
    return icon;
}       
export default useIconSelect;