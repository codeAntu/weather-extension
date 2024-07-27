import {
  BarChart,
  Droplet,
  Droplets,
  Loader,
  MapPin,
  Moon,
  PenSquare,
  Pencil,
  Sun,
  Thermometer,
  ThermometerSun,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from './components/Button';
import { useNavigate } from 'react-router-dom';
import ls from './lib/saveData';
import API from './lib/api';
import getWeatherEmoji from './lib/weatherEmo';

function App() {
  const navigate = useNavigate();
  const [lon, setLon] = useState(0);
  const [lat, setLat] = useState(0);
  const [weather, setWeather] = useState({} as any);
  const [IsLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState('');
  // const [isDay, setIsDay] = useState(false);
  const now = new Date().getTime() / 1000;
  const [color, setColor] = useState('white');

  useEffect(() => {
    const lsLon = ls.get('lon');
    const lsLat = ls.get('lat');
    const lsCity = ls.get('city');
    if (lsCity) {
      setCity(lsCity);
    }
    if (lsLon && lsLat) {
      setLon(Number(lsLon));
      setLat(Number(lsLat));
    }
  }, []);

  useEffect(() => {
    if (!city) return;
    getWeather();
  }, [lon, lat, city]);

  async function getWeather() {
    try {
      const response = await fetch(API.weather(lon, lat));
      const data = await response.json();
      setWeather(data);
      setIsLoading(false);
      console.log(data);
    } catch {
      console.log('error');
    }
  }

  function kelvinToCelsius(k: number) {
    if (k === undefined) return 0;
    return Math.round((k - 273.15) * 10) / 10;
  }

  useEffect(() => {
    if (weather.current) {
      const sunrise = weather.current.sunrise;
      const sunset = weather.current.sunset;
      if (now > sunrise && now < sunset) {
        setColor('black');
      }
    }
  }, [weather]);

  console.log(color);

  

  if (!city) {
    return (
      <div
        className={`flex min-h-80 w-[280px] flex-col font-poppins items-center justify-center bg-black p-4 pt-10 text-white`}
        style={{
          backgroundImage: `url(/backImg/white.png)`,
        }}
      >
        <MapPin size={40} className='' />
        <div className='p-4 text-center text-xl font-semibold'>Add city</div>
        <div className='pb-6 text-center text-sm opacity-70'>
          <div>Add city to get weather data</div>
          <div>
            Example : <span className='font-semibold'>Bankura</span>
          </div>
        </div>
        <Button
          onClick={() => {
            navigate('/city');
          }}
          color={color}
        >
          {' '}
          Add
        </Button>
      </div>
    );
  }

  console.log(color);

  return (
    <>
      {!IsLoading ? (
        <div
          className={`bg-${color} text-${color} w-[280px] p-4 font-poppins`}
          style={{
            backgroundImage: `url(/backImg/${color}.png)`,
          }}
        >
          <div className={`flex items-center justify-between px-1`}>
            <div className={`text-xl font-semibold`}>{city}</div>
            <PenSquare
              size={19}
              onClick={() => {
                navigate('/city');
              }}
            />
          </div>
          <div className={`pb-2 text-center text-7xl font-semibold pt-5`}>
            <div className=''>{kelvinToCelsius(weather.current.temp)}&deg;</div>
          </div>
          <div className={`mt-4 grid grid-cols-2 gap-2`}>
            <ShowCurr
              title='Humidity'
              value={weather.current.humidity + '%'}
              icon={<Droplets size={24} />}
              color={color}
            />
            <ShowCurr
              title=''
              value={weather.current.weather[0].main}
              icon={getWeatherEmoji(weather.current.weather[0].icon)}
              color={color}
            />
            <ShowCurr
              title='Feels like'
              value={kelvinToCelsius(weather.current.feels_like) + '°'}
              icon={<ThermometerSun size={24} />}
              color={color}
            />
            <ShowCurr
              title='pressure'
              value={weather.current.pressure + 'hPa'}
              icon={<BarChart size={24} />}
              color={color}
            />
          </div>
          <div className={`flex items-center justify-around gap-3 py-2 pt-5`}>
            <Button
              onClick={() => {
                navigate('/today', { state: weather });
                // share hourly data
              }}
              color={color}
            >
              Today
            </Button>
            <Button
              onClick={() => {
                navigate('/forecast', { state: weather.daily });
              }}
              color={color}
            >
              Forecast
            </Button>
          </div>
        </div>
      ) : (
        <div
          className={`bg-${color} text-${color} w-[280px] p-4 font-poppins` }
          style={{
            backgroundImage: `url(/backImg/${color}.png)`,
          }}
        >
          <div className={`flex items-center justify-between px-1`}>
            <div className={`text-xl font-semibold`}>{city}</div>
            <PenSquare
              size={19}
              onClick={() => {
                navigate('/city');
              }}
            />
          </div>
          <div className={`py-3 text-center text-7xl font-semibold`}>
            {/* <div className=''>00.0&deg;</div> */}
            <div className='text-center flex justify-center items-center py-6'>
              <Loader size={30} />
            </div>
          </div>
          <div className={`mt-4 grid grid-cols-2 gap-2`}>
            <ShowCurr title='Humidity' value={'---' } icon={<Droplets size={24} />} color={color} />
            <ShowCurr title='' value={'clouds'} color={color} />
            <ShowCurr title='Feels like' value={'---' } icon={<ThermometerSun size={24} />} color={color} />
            <ShowCurr title='pressure' value={'---'} icon={<BarChart size={24} />} color={color} />
          </div>
          <div className={`flex items-center justify-around gap-3 py-2 pt-5`}>
            <Button>Today</Button>
            <Button color={color}>Forecast</Button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

function ShowCurr({ title, value, icon, color }: { title?: string; value?: string; icon?: any; color?: string }) {
  return (
    <div
      className={`flex items-stretch justify-between text-${color} bg-${color}/5 border border-${color}/5 rounded-xl px-3 py-2`}
    >
      <div className='grid'>
        <div className={`pt-1} text-xs opacity-70`}>{title}</div>
        <div className={`text-lg font-medium`}>{value}</div>
      </div>
      {icon}
    </div>
  );
}
