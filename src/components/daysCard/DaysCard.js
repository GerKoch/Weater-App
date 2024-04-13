import { CardDaysCard } from "./cardDaysCard/CardDaysCard";
import "./DaysCard.css";

export const DaysCard = ({ dataFiveDays }) => {
    return (
        <div className="daysCards">
            {
                dataFiveDays.list.map((dataDays, index) => {
                    if (index >= 0 && index < 5) {
                        return <CardDaysCard data={dataDays} />
                    }
                })
            }

        </div>
    )
}