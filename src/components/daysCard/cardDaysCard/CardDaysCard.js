import useIconSelect from "../../../hooks/useIconSelect";

export const CardDaysCard = ({ data }) => {
    // console.log("lechiguta", data)
    const showIcon = useIconSelect(data.weather[0].main)

    return (
        <div>
            <p>{data.weather[0].main}</p>
            <img src={showIcon} alt={data.weather[0].id} />
        </div>
    )

}