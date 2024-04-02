import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&unit=metric&appid=dc1844232381cb995c0a83c92c7a5464`;

  const getData = async () => {
    await fetch(apiUrl)
      .then(res => res.json())
      .then(res => {
        if (res.cod >= 400) {
          setValue(false)
        } else {
          console.log(res)
          setValue(res)
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
    <>
      <div>
        <h1>Weather Api</h1>
        <input
          onKeyDown={handleSearch}
          type="text"
          autoFocus
        />
      </div>
      <div>
        {value ? (
          <div>
            <h3>{value.name}</h3>
          </div>
        ) : (
          <p>{"City not found"}</p>
        )}
      </div>
    </>
  )
}

export default App;