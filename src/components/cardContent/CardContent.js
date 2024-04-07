import "./CardContent.css";

export const CardContent = ({ data }) => {

    return (
        <div>
            <div className="titleCard">
                <h2>El tiempo en {data.name}</h2>
                <p>Latitud: {data.coord.lat.toFixed(0)}&deg; | Longitud: {data.coord.lon.toFixed(0)}&deg;</p>
            </div>
            <div className="dataCard">
                <div className="dCard">
                    <p>Visibillidad: {data.visibility / 1000}Km</p>
                    <p>Presión: {data.main.pressure}hPa</p>
                    <p>Humedad: {data.main.humidity}%</p>
                    <p>Nubosidad: {data.clouds.all}%</p>
                </div>
                <div className="windCard">
                    <p>Viento: {(data.wind.speed * (1 / 1000) * (3600 / 1)).toFixed(0)}Km/h</p>
                    <p>{(data.wind.gust) ? (<p>Ráfagas de viento: {(data.wind.gust * (1 / 1000) * (3600 / 1)).toFixed(0)}Km/h</p>) : (<p></p>)}</p>
                    <p>Dirección del Viento: {data.wind.deg}&deg;</p>
                </div>
            </div>
        </div>
    )
}