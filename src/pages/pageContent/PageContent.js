import { useEffect, useState } from "react";
import { CardContent } from "../../components/cardContent/CardContent";
import { Icons } from "../../components/icons/Icons";
import "./PageContent.css";

export const PageContent = () => {
    const [value, setValue] = useState("");
    const [search, setSearch] = useState("Argentina");
    const [iconRef, setIconRef] = useState("");

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

    const getData = async () => {
        await fetch(apiUrl)
            .then(res => res.json())
            .then(res => {
                if (res.cod >= 400) {
                    setValue(false)
                } else {
                    console.log(res)
                    setValue(res)
                    setIconRef(res.weather[0].main)
                }
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getData()
    }, [search])

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
                    <div className="cardContent">
                        <Icons
                            reference={iconRef}
                        />
                        <CardContent
                            key={value.id}
                            data={value}
                        />
                    </div>
                ) : (
                    <p>{"City not found"}</p>
                )}
            </div>
        </div>
    )
}