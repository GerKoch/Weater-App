import "./DaysCard.css";
import useIconSelect from "../../hooks/useIconSelect";


export const DaysCard = ({ dataFiveDays }) => {
   
    return (
        <div className="daysCards">
            {
                dataFiveDays.list.map((dataDays, index) => {
                    if (index >= 0 && index < 5) {
                             // eslint-disable-next-line react-hooks/rules-of-hooks
                        const showIcon = useIconSelect(dataDays.weather[0].main)
                        console.log("gerDayssss: ", dataDays)
                        return (
                            <div>
                                <p>{dataDays.weather[0].main}</p>
                                <img src={showIcon} />
                            </div>
                        )
                    }
                })
            }

        </div>
    )
}