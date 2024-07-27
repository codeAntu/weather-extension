const ACCUWEATHER_API_KEY = "C42OAAd8AANIyi8SLoqvq3mm59vADvRA"; // Old API key: FqLdDZQkQofVcwsdCHX7uKdPVgWcPGHI
const OPENWEATHER_API_KEY = "0e376e0750966cdba160fc85a4bb0427";

const API = {
  cities(cityName: string) {
    return `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${ACCUWEATHER_API_KEY}&q=${cityName}`;
  },
  location(lat: number, lon: number) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}`;
  },
  weather(lon: number, lat: number) {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${OPENWEATHER_API_KEY}`;
  },
};

export default API;
