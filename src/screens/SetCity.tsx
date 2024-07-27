import { ChevronLeft, DumbbellIcon } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import ls from '../lib/saveData';

export default function SetCity() {
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(state);

  function setCity() {
    ls.set('city', state.EnglishName);
    ls.set('lat', state.GeoPosition.Latitude);
    ls.set('lon', state.GeoPosition.Longitude);
    navigate('/');
  }

  return (
    <div
      className='min-h-96 w-[280px] bg-black px-2.5 text-white '
      style={{
        backgroundImage: `url(/backImg/white.png)`,
      }}
    >
      <div className='flex items-center gap-2 py-4'>
        <ChevronLeft
          className='cursor-pointer rounded-lg bg-white/0 p-1 duration-200 hover:bg-white/5'
          size={30}
          onClick={() => navigate('/city')}
        />
        <div className='text-center text-base font-medium'> {state.EnglishName}</div>
      </div>
      <div className='p-2.5 flex flex-col gap-2' >
        <div className='mb-2 flex justify-around rounded-xl border border-white/5 bg-white/5'>
          <div className='p-2'>Lan : {state.GeoPosition.Latitude}</div>
          <div className='h-10 w-0.5 bg-white/5'></div>
          <div className='p-2'>Lon : {state.GeoPosition.Longitude}</div>
        </div>
        <div className='mb-5 rounded-xl border border-white/5 bg-white/5 px-3 py-2'>
          {showData('State', state.AdministrativeArea.EnglishName)}
          {showData('Country', state.Country.EnglishName)}
          {showData('Region', state.Region.EnglishName)}
          {showData('GMT offSet', state.TimeZone.GmtOffset)}
        </div>
        <div></div>
        <div>
          <Button
            onClick={() => {
              setCity();
            }}
          >
            {' '}
            Set This City
          </Button>
        </div>
      </div>
    </div>
  );
}

function showData(title: string, value: string) {
  return (
    <div className='flex gap-3'>
      <div>{title}</div>
      <div>:</div>
      <div>{value}</div>
    </div>
  );
}
