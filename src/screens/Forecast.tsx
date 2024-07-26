import { Backpack, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useHref, useLocation, useNavigate } from 'react-router-dom';
import getWeatherEmoji from '../lib/weatherEmo';

export default function Forecast() {
  const [weather, setWeather] = useState({});
  const { state } = useLocation();
  const navigate = useNavigate();
  const now = new Date().getTime() / 1000;
  const [color, setColor] = useState('black');

  // useEffect(() => {
  //   if (state[0].current) {
  //     const sunrise = state[0].current.sunrise;
  //     const sunset = state[0].current.sunset;
  //     if (now > sunrise || now < sunset) {
  //       setColor('black');
  //     }
  //   }
  // }, [state]);

  return (
    <div
      className={`bg-${color} text-${color} w-[280px] p-4 relative`}
      style={{
        backgroundImage: `url(/backImg/${color}.png)`,
      }}
    >
      <div className={`text-center text-xl font-medium opacity-80 `}>
        Weather Forecast
      </div>
      <div className=" py-2"></div>
      <div className={`bg-${color}/5 rounded-xl px-4 py-3.5 grid gap-3.5`}>
        {state.map((element: any) => {
          return <div key={element.dt}>{showDay(element)}</div>;
        })}
      </div>
      <div className="p-2"> </div>
      <div
        className={`bg-${color}/5 rounded-full px-5 py-3 font-semibold text-center text-${color}/65`}
      >
        15-day Weather Forecast
      </div>
      <div className="p-1"> </div>
    </div>
  );
}

function showDay(day: any) {
  return (
    <div className="flex items-center justify-between text-base">
      <div className="flex items-center gap-4 ">
        <div>{getDate(day.dt * 1000)}</div>
        <div>{getDay(day.dt * 1000)}</div>
      </div>
      <div>{getWeatherEmoji(day.weather[0].icon)}</div>
      <div>
        {kelvinToCelsius(day.temp.min)}&deg; / {kelvinToCelsius(day.temp.max)}
        &deg;
      </div>
    </div>
  );
}

function getDate(time: number) {
  const date = new Date(time);
  let day = date.getDate().toString();
  let month = (date.getMonth() + 1).toString();
  if (day.length === 1) {
    day = '0' + day;
  }
  if (month.length === 1) {
    month = '0' + month;
  }
  return day + ' / ' + month;
}

function getDay(time: number) {
  const dayDate = new Date(time);
  const todayDate = new Date();
  if (dayDate.getDate() === todayDate.getDate()) {
    return 'Today';
  }

  return dayDate.toLocaleDateString('en-US', { weekday: 'short' });
}

function kelvinToCelsius(kelvin: number) {
  return Math.round(kelvin - 273.15);
}
