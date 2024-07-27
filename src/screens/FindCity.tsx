import { MapPin, Search, Trees } from "lucide-react";
import { useEffect, useState } from "react";
import API from "../lib/api";
import { useNavigate } from "react-router-dom";
import ls from "../lib/saveData";
import Button from "../components/Button";

export default function Find() {
  const loc = {
    coord: {
      lon: 87.0524,
      lat: 23.2256,
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "13d",
      },
    ],
    base: "stations",
    main: {
      temp: 305.21,
      feels_like: 312.21,
      temp_min: 305.21,
      temp_max: 305.21,
      pressure: 1001,
      humidity: 80,
      sea_level: 1001,
      grnd_level: 992,
    },
    visibility: 10000,
    wind: {
      speed: 3.34,
      deg: 165,
      gust: 6.48,
    },
    clouds: {
      all: 91,
    },
    dt: 1694259252,
    sys: {
      type: 1,
      id: 9144,
      country: "IN",
      sunrise: 1694217384,
      sunset: 1694262162,
    },
    timezone: 19800,
    id: 1277264,
    name: "Bānkura",
    cod: 200,
  };

  const [locations, setLocations] = useState(loc);
  const [searchResults, setSearchResults] = useState([]);
  const [city, setCity] = useState("Bankura");
  const navigate = useNavigate();

  useEffect(() => {
    const data = ls.get("city");
    if (data) {
      setCity(data);
    }
  }, []);

  async function getResults(query: string) {
    try {
      const result = await fetch(API.cities(query)).then((res) => res.json());
      setSearchResults(result);
      console.log(searchResults);
    } catch (err) {
      console.log(err);
    }
    // console.log(searchResults);
  }

  // useEffect(() => {
  //   if (city.length <= 2) return;
  //   getResults(city.toLocaleLowerCase());
  // }, [city]);

  console.log(searchResults);

  return (
    <div
      className="bg-black text-white w-[280px] px-4 max-h-96 overflow-auto min-h-96"
      style={{
        backgroundImage: `url(/backImg/white.png)`,
      }}
    >
      <div className="text-xl font-medium text-center py-4">Find Your City</div>

      <div className="flex justify-center items-center gap-2 border border-white/50 rounded-2xl py-1 mx-1">
        <input
          type="text"
          value={city}
          className="bg-transparent border-none outline-none  text-white/80"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <Search
          className=""
          size={20}
          onClick={() => {
            getResults(city.toLocaleLowerCase());
          }}
        />
      </div>
      <div className="p-3"></div>
      <div className="bg-white/0 p-2 rounded-xl grid gap-2">
        {searchResults.map((result: any) => {
          return (
            <div
              key={Math.random()}
              onClick={() => {
                navigate(`/city/${result.EnglishName}`, { state: result });
              }}
              className="bg-white/5 rounded-xl p-2 cursor-pointer hover:bg-white/10 transition"
            >
              <ShowCity city={result} />
            </div>
          );
        })}
      </div>
      <div className="p-4"></div>
    </div>
  );
}

function ShowCity({ city }: any) {
  // console.log(city);

  return (
    <div className="flex justify-between items-center" onClick={() => {}}>
      <div className="line-clamp-1">
        {city.EnglishName} , {city.AdministrativeArea.EnglishName} ,{" "}
        {city.Country.EnglishName}
      </div>
    </div>
  );
}
