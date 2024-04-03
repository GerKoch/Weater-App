import { useContext } from "react";
import { iconsCarContext } from "../contexts/IconsContext";

export const Icons = (icon) => {
    const [iconsCar, setIconsCar] = useContext(iconsCarContext);

    const addIcon = () => {
        setIconsCar(icon)
    }

       switch (icon) {
        case "Clouds":
            icon="icons/fog.svg"
            console.log("nuves");
            break;
        default:
            icon="icons/clear-day.svg"
            console.log("limpio");
       }
       return (
        
        <div>
            <img src={iconsCar} alt="img"/>
        </div>
       )
}