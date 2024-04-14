import useIconSelect from "../../../hooks/useIconSelect";
import "./CardDaysCard.css";

export const CardDaysCard = ({ data }) => {
    const showIcon = useIconSelect(data.weather[0].main)

    return (
        <div className="dayBox">
            <p>{data.dt_txt}</p>
            <img src={showIcon} alt={data.weather[0].id} />
            <p>{data.main.temp.toFixed(0)}&deg;C</p>
        </div>
    )

} 