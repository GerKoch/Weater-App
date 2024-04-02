export const CardContent = ({data}) => {
    return (
        <div>
            <h3>{data.name}</h3>            
            <p>{data.main.temp.toFixed(0)}&deg;</p>
            <p>{data.main.temp_min.toFixed(0)}&deg; | {data.main.temp_max.toFixed(0)}&deg;</p>
          </div>
    )
}