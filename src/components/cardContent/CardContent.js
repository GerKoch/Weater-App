import "./CardContent.css";

export const CardContent = ({ data }) => {
    return (
        <div>
            <div className="titleCard">
                <h2>El tiempo en {data.name}</h2>
                <p>Latitud: {data.coord.lat.toFixed(0)}&deg; | Longitud: {data.coord.lon.toFixed(0)}&deg;</p>
            </div>
            <div className="dataCard">
                <p>{data.main.temp.toFixed(0)}&deg;</p>
                <p>{data.main.temp_min.toFixed(0)}&deg; | {data.main.temp_max.toFixed(0)}&deg;</p>
                <p>Sensacion termica: {data.main.feels_like.toFixed(0)}&deg;</p>
            </div>
        </div>
    )
}