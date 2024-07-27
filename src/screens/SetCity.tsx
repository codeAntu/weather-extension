import { DumbbellIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ls from "../lib/saveData";

export default function SetCity() {
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(state);

  function setCity() {
    ls.set("city", state.EnglishName);
    ls.set("lat", state.GeoPosition.Latitude);
    ls.set("lon", state.GeoPosition.Longitude);
    navigate("/");
  }

  return (
    <div
      className="bg-black text-white w-[280px] p-4 min-h-96"
      style={{
        backgroundImage: `url(/backImg/white.png)`,
      }}
    >
      <div>
        <div className="text-center text-xl font-medium pb-4">
          {state.EnglishName}
        </div>
      </div>
      <div className="flex justify-around bg-white/5 border border-white/5 rounded-xl mb-2">
        <div className="p-2">Lan : {state.GeoPosition.Latitude}</div>
        <div className="h-10 w-0.5 bg-white/5 "></div>
        <div className="p-2">Lon : {state.GeoPosition.Longitude}</div>
      </div>
      <div className="bg-white/5 py-2 px-3 border border-white/5 rounded-xl mb-5">
        {showData("State", state.AdministrativeArea.EnglishName)}
        {showData("Country", state.Country.EnglishName)}
        {showData("Region", state.Region.EnglishName)}
        {showData("GMT offSet", state.TimeZone.GmtOffset)}
      </div>

      <div>
        <Button
          onClick={() => {
            setCity();
          }}
        >
          {" "}
          Set This City
        </Button>
      </div>
      <div className="p-2"></div>
    </div>
  );
}

function showData(title: string, value: string) {
  return (
    <div className="flex gap-3">
      <div>{title}</div>
      <div>:</div>
      <div>{value}</div>
    </div>
  );
}
