import useIconSelect from "../../hooks/useIconSelect"
import "./Icons.css";

export const Icons = ({ reference, data }) =>
(
    <div className="cardIcon">
        <div className="icon">
            <img src={useIconSelect(reference)} alt={`img-${reference}`} />
            <h2>{data.list[0].weather[0].description}</h2>
            {/* <p>{(data.rain[`1h`])?(<p>Volumen de lluvia (1h): {data.rain[`1h`]}</p>):(<></>)}</p> */}
        </div>
        <div className="text">
            <h1>{data.list[0].main.temp.toFixed(0)}&deg;C</h1>
            <p>Sensación térmica: {data.list[0].main.feels_like.toFixed(0)}&deg;C</p>
            <p>Máxima: {data.list[0].main.temp_min.toFixed(0)}&deg;</p> 
            <p>Mínima: {data.list[0].main.temp_max.toFixed(0)}&deg;</p>
        </div>
    </div>
)
