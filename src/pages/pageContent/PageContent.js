import { useEffect, useState } from "react";
import { CardContent } from "../../components/cardContent/CardContent";
import { Icons } from "../../components/icons/Icons";
import { DaysCard } from "../../components/daysCard/DaysCard";
import "./PageContent.css";

export const PageContent = () => {
    const [value, setValue] = useState("");
    const [search, setSearch] = useState("Argentina");
    const [iconRef, setIconRef] = useState("");
    const [valueFiveDays, setValueFiveDays] = useState("");

    const apiDay = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
    const apiFiveDays = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&lang=es&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

    const getDataDay = async () => {
        await fetch(apiDay)
            .then(res => res.json())
            .then(res => {
                if (res.cod >= 400) {
                    setValue(false)
                } else {
                    console.log("Ger ApiDay: ", res)
                    setValue(res)
                    setIconRef(res.weather[0].main)
                }
            })
            .catch(error => console.log(error))
    }

    const getDataFiveDays = async () => {
        await fetch(apiFiveDays)
            .then(resp => resp.json())
            .then(resp => {
                console.log("Ger ApyFiveDays: ", resp)
                setValueFiveDays(resp)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getDataDay()
    }, [search])

    useEffect(() => {
        getDataFiveDays()
    }, [search])

    // console.log("serese", valueFiveDays)
    const handleSearch = (e) => {
        if (e.key === "Enter") {
            console.log(e.target.value)
            setSearch(e.target.value)
        }
    }

    return (
        <div className="container">
            <div className="containerInput">
                <input
                    placeholder="Search by city or country"
                    onKeyDown={handleSearch}
                    type="text"
                    autoFocus
                />
            </div>
            <div className="card">
                {value ? (
                    <div className="cardCeneter">
                        <div className="cardContent">
                            <Icons
                                key={value.dt}
                                reference={iconRef}
                                data={value}
                            />
                            <CardContent
                                key={value.id}
                                data={value}
                            />
                        </div>
                        {valueFiveDays &&
                            <div className="daysCard">
                                <p>Previsión cada 3hs</p>
                                <DaysCard
                                    dataFiveDays={valueFiveDays}
                                />
                            </div>
                        }
                    </div>
                ) : (
                    <p>{"City not found"}</p>
                )}
            </div>
        </div>
    )
}