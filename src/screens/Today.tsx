import { ChevronLeft, Droplet, ShieldPlus, Sunrise, Sunset, Tornado, Wind } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import getWeatherEmoji from '../lib/weatherEmo';

export default function Today() {
  const { state } = useLocation();
  const time = new Date().getTime();
  const hourly: Array<any> = [];
  const [color, setColor] = useState('white');
  const navigate = useNavigate();

  state.hourly.forEach((element: any) => {
    if (element.dt * 1000 > time - 360000 && hourly.length < 5) {
      hourly.push(element);
    }
  });

  return (
    <div
      className={`bg-${color} text-${color} w-[280px] p-2 py-5`}
      style={{
        backgroundImage: `url(/backImg/${color}.png)`,
      }}
    >
      <div className='flex items-center gap-2'>
        <ChevronLeft
          className='cursor-pointer rounded-lg bg-white/0 p-1 duration-200 hover:bg-white/5'
          size={30}
          onClick={() => navigate('/')}
        />
        <div className='text-center font-rubik text-base font-medium'> Today</div>
      </div>
      <div className='flex flex-col gap-2.5 px-2 py-2 pt-3'>
        <div className={`p-2 bg-${color}/5 border border-${color}/5 rounded-xl`}>
          <div className='flex items-center justify-between'>
            {hourly.map((element: any) => {
              return (
                <div className={`flex flex-col items-center justify-center gap-1 p-2 text-${color}`} key={element.dt}>
                  <div className=''>{new Date(element.dt * 1000).getHours()}:00</div>
                  <div>{getWeatherEmoji(element.weather[0].icon)}</div>
                  <div>{kelvinToCelsius(element.temp)}&deg;</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <ShowCurr title='UV' value={state.current.uvi} icon={<ShieldPlus size={20} />} color={color} />
          <ShowCurr
            title='Wind direction'
            value={state.current.wind_deg + '°'}
            icon={<Wind size={20} />}
            color={color}
          />
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <ShowCurr
            title='Wind speed'
            value={state.current.wind_speed + 'm/s'}
            icon={<Tornado size={20} />}
            color={color}
          />
          <ShowCurr
            title='Due point'
            value={state.current.dew_point + '°'}
            icon={<Droplet size={20} />}
            color={color}
          />
        </div>
        <div className={`bg-${color}/5 space-y-2 rounded-xl border p-3 border-${color}/5`}>
          <ShowSun
            time1={new Date(state.current.sunrise * 1000).toLocaleTimeString()}
            time2={new Date(state.current.sunset * 1000).toLocaleTimeString()}
            title1='Sunrise'
            title2='Sunset'
            color={color}
          />
        </div>
      </div>
    </div>
  );
}

function ShowCurr({ title, value, icon, color }: { title?: string; value?: string; icon?: any; color: string }) {
  return (
    <div className={`flex items-stretch justify-between bg-${color}/5 border border-${color}/5 rounded-xl px-3 py-2`}>
      <div className='grid'>
        <div className={`pt-1 text-xs opacity-50 text-${color}`}>{title}</div>

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
      <div className='flex items-center justify-between'>
        <div className='flex flex-col items-center justify-center'>
          <Sunrise size={20} />
          <div className='text-sm'>{title1}</div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Sunset size={20} />
          <div className='text-sm'>{title2}</div>
        </div>
      </div>
      <div>
        <div className={`h-1.5 w-full bg-${color}/50 rounded-full`}></div>
      </div>
      <div className='flex items-center justify-between px-1'>
        <div>{time1}</div>
        <div>{time2}</div>
      </div>
    </div>
  );
}
