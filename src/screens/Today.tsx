import {
  Droplet,
  Dumbbell,
  Moon,
  ShieldPlus,
  Sun,
  Sunrise,
  Sunset,
  Tornado,
  Wind,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import ls from '../lib/saveData';
import API from '../lib/api';
import { useLoaderData, useLocation } from 'react-router-dom';
import getWeatherEmoji from '../lib/weatherEmo';

export default function Today() {
  const { state } = useLocation();
  const time = new Date().getTime();
  const hourly: Array<any> = [];
  const now = new Date().getTime() / 1000;
  const [color, setColor] = useState('white');

  state.hourly.forEach((element: any) => {
    if (element.dt * 1000 > time - 360000 && hourly.length < 5) {
      hourly.push(element);
    }
  });

  console.log(time);
  console.log(state);
  console.log(hourly);

  useEffect(() => {
    if (state.current) {
      const sunrise = state.current.sunrise;
      const sunset = state.current.sunset;
      if (now > sunrise && now < sunset) {
        setColor('white');
      }
    }
  }, []);

  return (
    <div
      className={`bg-${color} text-${color} w-[280px] p-4 `}
      style={{
        backgroundImage: `url(/backImg/${color}.png)`,
      }}
    >
      <div className="text-center text-xl font-medium ">Today</div>
      <div
        className={`my-5 p-2 bg-${color}/5 border border-${color}/5 rounded-xl `}
      >
        <div className="flex items-center justify-between">
          {hourly.map((element: any) => {
            return (
              <div className={`p-2 grid gap-1 text-${color}`} key={element.dt}>
                <div className="">
                  {new Date(element.dt * 1000).getHours()}:00
                </div>
                <div>{getWeatherEmoji(element.weather[0].icon)}</div>
                <div>{kelvinToCelsius(element.temp)}&deg;</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <ShowCurr
          title="UV"
          value={state.current.uvi}
          icon={<ShieldPlus size={20} />}
          color={color}
        />
        <ShowCurr
          title="Wind direction"
          value={state.current.wind_deg + '°'}
          icon={<Wind size={20} />}
          color={color}
        />
        <ShowCurr
          title="Wind speed"
          value={state.current.wind_speed + 'm/s'}
          icon={<Tornado size={20} />}
          color={color}
        />
        <ShowCurr
          title="Due point"
          value={state.current.dew_point + '°'}
          icon={<Droplet size={20} />}
          color={color}
        />
      </div>

      <div
        className={`my-5 bg-${color}/5 p-3 rounded-xl space-y-2 border border-${color}/5`}
      >
        <ShowSun
          time1={new Date(state.current.sunrise * 1000).toLocaleTimeString()}
          time2={new Date(state.current.sunset * 1000).toLocaleTimeString()}
          title1="Sunrise"
          title2="Sunset"
          color={color}
        />
      </div>
    </div>
  );
}

function ShowCurr({
  title,
  value,
  icon,
  color,
}: {
  title?: string;
  value?: string;
  icon?: any;
  color: string;
}) {
  return (
    <div
      className={`flex justify-between items-stretch bg-${color}/5 border border-${color}/5 rounded-xl px-3 py-2`}
    >
      <div className="grid">
        <div className={`text-xs opacity-50 pt-1 text-${color}`}>{title}</div>

        <div className={`text-lg font-medium text-${color}`}>{value}</div>
      </div>
      {icon}
    </div>
  );
}

function kelvinToCelsius(k: number) {
  return Math.round(k - 273.15);
}

function ShowSun({
  title1,
  title2,
  time1,
  time2,
  color,
}: {
  title1: string;
  title2: string;
  time1: string;
  time2: string;
  color: string;
}) {
  return (
    <div className={`space-y-1.5 text-${color}`}>
      <div className="flex justify-between items-center ">
        <div className="flex justify-center items-center flex-col">
          <Sunrise size={20} />
          <div className="text-sm">{title1}</div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <Sunset size={20} />
          <div className="text-sm">{title2}</div>
        </div>
      </div>
      <div>
        <div className={`h-1.5 w-full bg-${color}/50 rounded-full `}></div>
      </div>
      <div className="flex justify-between items-center px-1 ">
        <div>{time1}</div>
        <div>{time2}</div>
      </div>
    </div>
  );
}
