import { ChevronLeft, Divide, MapPin, Search, Trees } from 'lucide-react';
import { useEffect, useState } from 'react';
import API from '../lib/api';
import { useNavigate } from 'react-router-dom';
import ls from '../lib/saveData';
import Button from '../components/Button';

export default function Find() {
  const [locations, setLocations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [city, setCity] = useState( ls.get('searchedCity') || '');
  const [loading, setLoading] = useState(false);
  const [found, setFound] = useState(true);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const data = ls.get('searchedCity')
  //   if (data) {
  //     setCity(data);
  //     console.log(data);
  //   }
  // }, []);

  async function getResults(query: string) {
    setSearchResults([]);
    setLoading(true);
    setFound(true);
    try {
      const result = await fetch(API.cities(query)).then((res) => res.json());

      if (result.length === 0) {
        setFound(false);
        setLoading(false);
        return;
      }

      setSearchResults(result);
      // console.log(searchResults);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (city.length <= 2) return;
    getResults(city.toLocaleLowerCase());
  }, []);

  useEffect(() => {
    setFound(true);
    setSearchResults([]);
  }, [city]);

  // console.log(searchResults);

  // console.log(city);
  // console.log(ls.get('searchedCity'));

  return (
    <div
      className='max-h-96 min-h-96 w-[280px] overflow-auto bg-black px-2.5 pb-2.5 text-white'
      style={{
        backgroundImage: `url(/backImg/white.png)`,
      }}
    >
      <div className='flex items-center gap-10 py-4'>
        <ChevronLeft
          className='cursor-pointer rounded-lg bg-white/0 p-1 duration-200 hover:bg-white/5'
          size={30}
          onClick={() => navigate('/')}
        />
        <div className='text-center text-base font-medium'>Find Your City</div>
      </div>

      <div className='mx-2 flex items-center justify-between gap-2 rounded-xl border border-white/35 px-3 pr-2.5 py-1.5'>
        <input
          type='text'
          value={city}
          className='border-none bg-transparent text-white/80 outline-none text-sm'
          onChange={(e) => {
            setCity(e.target.value);
          }}
          autoFocus
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              getResults(city.toLocaleLowerCase());
            }
          }}
        />
        <Search
          className='cursor-pointer text-white/80'
          size={16}
          onClick={() => {
            getResults(city.toLocaleLowerCase());
          }}
        />
      </div>
      <div className='grid gap-2 rounded-xl bg-white/0 p-2 pt-3'>
        {searchResults.length === 0 && loading == false && (
          <div className='pt-5 text-center text-white/80'>Search for a city</div>
        )}
        {loading && <div className='pt-5 text-center text-white/80'>Loading...</div>}
        {!found && <div className='text-center text-sm text-white/80'>No results found</div>}
        {searchResults.map((result: any) => {
          return (
            <div
              key={Math.random()}
              onClick={() => {
                ls.set('searchedCity', result.EnglishName);
                console.log(result.EnglishName);
                navigate(`/city/${result.EnglishName}`, { state: result });
              }}
              className='cursor-pointer rounded-xl bg-white/5 p-2 pl-3 transition duration-300 hover:bg-white/10'
            >
              <ShowCity city={result} />
            </div>
          );
        })}
        {searchResults.length > 0 && <div className='py-1 text-center text-sm text-white/50'>Select Your city</div>}
      </div>
    </div>
  );
}

function ShowCity({ city }: any) {
  // console.log(city);

  return (
    <div className='flex items-center justify-between text-sm' onClick={() => {}}>
      <div className='line-clamp-1'>
        {city.EnglishName} , {city.AdministrativeArea.EnglishName} , {city.Country.EnglishName}
      </div>
    </div>
  );
}
