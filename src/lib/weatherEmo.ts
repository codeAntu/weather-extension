// import { EggFried } from 'lucide-react';

const WeatherIcon: {
  [key: string]: {
    name: string;
    emoji: string;
    speed?: number;
  };
} = {
  '01d': {
    name: 'weather/sun', // 'clear sky',
    emoji: '☀️',
  },
  '01n': {
    name: 'weather/stars', // 'clear sky',
    emoji: '🌙',
  },
  '02d': {
    name: 'weather/few clouds', // 'few clouds',
    emoji: '⛅️',
  },
  '02n': {
    name: 'weather/few clouds', // 'few clouds',
    emoji: '⛅️',
  },
  '03d': {
    name: 'weather/cloud', // 'scattered clouds',
    emoji: '🌤️',
  },
  '03n': {
    name: 'weather/cloud', // 'scattered clouds',
    emoji: '🌤️',
  },
  '04d': {
    name: 'weather/broken clouds', // 'broken clouds',
    emoji: '☁️',
  },
  '04n': {
    name: 'weather/broken clouds', // 'broken clouds',
    emoji: '☁️',
  },
  '09d': {
    name: 'weather/shower rain', // 'shower rain',
    emoji: '🌧️',
  },
  '09n': {
    name: 'weather/shower rain', // 'shower rain',
    emoji: '🌧️',
  },

  '10d': {
    name: 'weather/rain', // 'rain',
    emoji: '🌦️',
  },
  '10n': {
    name: 'weather/rain', // 'rain',
    emoji: '🌦️',
  },
  '11d': {
    name: 'weather/thunderstorm', // 'thunderstorm',
    emoji: '⛈️',
  },
  '11n': {
    name: 'weather/thunderstorm', // 'thunderstorm',
    emoji: '⛈️',
  },
  '13d': {
    name: 'weather/snow', // 'snow',
    emoji: '🌨️',
  },
  '13n': {
    name: 'weather/snow', // 'snow',
    emoji: '🌨️',
  },
  '50d': {
    name: 'weather/mist', // 'mist',
    emoji: '😶‍🌫️',
  },
  '50n': {
    name: 'weather/mist', // 'mist',
    emoji: '😶‍🌫️',
  },
};

export default function getWeatherEmoji(iconName: string) {
  console.log(WeatherIcon[iconName].name);

  return WeatherIcon[iconName].emoji;
}
