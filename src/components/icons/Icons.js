import useIconSelect from "../../hooks/useIconSelect"
import "./Icons.css";

export const Icons = ({ reference, data }) =>
(   
    <div className="cardIcon">
        <div className="icon">
            <img src={useIconSelect(reference)} alt={`img-${reference}`} />
            <h2>{data.weather[0].description}</h2>
        </div>
        <div className="text">
            <h1>{data.main.temp.toFixed(0)}&deg;C</h1>
            <p>Sensación térmica: {data.main.feels_like.toFixed(0)}&deg;C</p>
            <p>Máxima: {data.main.temp_min.toFixed(0)}&deg;</p> 
            <p>Mínima: {data.main.temp_max.toFixed(0)}&deg;</p>
        </div>
    </div>
)
