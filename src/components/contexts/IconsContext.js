import { createContext, useState } from "react";

export const iconsCarContext = createContext(null);

export const IconsProvider = ({ children }) => {
    const [iconsCar, setIconsCar] = useState([]);

    return (
        <iconsCarContext.Provider value={[iconsCar, setIconsCar]}>
            {children}
        </iconsCarContext.Provider>
    )
}