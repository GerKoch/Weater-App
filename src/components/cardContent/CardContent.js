import "./CardContent.css";

export const CardContent = ({ data }) => {

    return (
        <div className="InfoCard">
            <div className="titleCard">
                <h2>El tiempo en {data.city.name}</h2>
                <p>Latitud: {data.city.coord.lat.toFixed(0)}&deg; | Longitud: {data.city.coord.lon.toFixed(0)}&deg;</p>
            </div>
            <div className="dataCard">
                <div className="dCard">
                    <p>Visibillidad: {data.list[0].visibility / 1000}Km</p>
                    <p>Presión: {data.list[0].main.pressure}hPa</p>
                    <p>Humedad: {data.list[0].main.humidity}%</p>
                    <p>Nubosidad: {data.list[0].clouds.all}%</p>
                </div>
                <div className="windCard">
                    <p>Viento: {(data.list[0].wind.speed * (1 / 1000) * (3600 / 1)).toFixed(0)}Km/h</p>
                    <p>{(data.list[0].wind.gust) ? (<p>Ráfagas de viento: {(data.list[0].wind.gust * (1 / 1000) * (3600 / 1)).toFixed(0)}Km/h</p>) : (<p></p>)}</p>
                    <p>Dirección del Viento: {data.list[0].wind.deg}&deg;</p>
                </div>
            </div>
        </div>
    )
}