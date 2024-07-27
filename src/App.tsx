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
  //   lat: 23.237,
  //   lon: 87.059,
  //   timezone: 'Asia/Kolkata',
  //   timezone_offset: 19800,
  //   current: {
  //     dt: 1694283434,
  //     sunrise: 1694217382,
  //     sunset: 1694262161,
  //     temp: 299.71,
  //     feels_like: 299.71,
  //     pressure: 1004,
  //     humidity: 90,
  //     dew_point: 297.93,
  //     uvi: 0,
  //     clouds: 70,
  //     visibility: 10000,
  //     wind_speed: 2.89,
  //     wind_deg: 161,
  //     wind_gust: 7.04,
  //     weather: [
  //       {
  //         id: 803,
  //         main: 'Clouds',
  //         description: 'broken clouds',
  //         icon: '13d',
  //       },
  //     ],
  //   },
  //   hourly: [
  //     {
  //       dt: 1694282400,
  //       temp: 299.71,
  //       feels_like: 299.71,
  //       pressure: 1004,
  //       humidity: 90,
  //       dew_point: 297.93,
  //       uvi: 1110,
  //       clouds: 70,
  //       visibility: 10000,
  //       wind_speed: 2.89,
  //       wind_deg: 161,
  //       wind_gust: 7.04,
  //       weather: [
  //         {
  //           id: 803,
  //           main: 'Clouds',
  //           description: 'broken clouds',
  //           icon: '04n',
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1694286000,
  //       temp: 299.67,
  //       feels_like: 299.67,
  //       pressure: 1004,
  //       humidity: 91,
  //       dew_point: 298.08,
  //       uvi: 0,
  //       clouds: 74,
  //       visibility: 10000,
  //       wind_speed: 2.92,
  //       wind_deg: 156,
  //       wind_gust: 6.96,
  //       weather: [
  //         {
  //           id: 803,
  //           main: 'Clouds',
  //           description: 'broken clouds',
  //           icon: '04n',
  //         },
  //       ],
  //       pop: 0.09,
  //     },
  //     {
  //       dt: 1694289600,
  //       temp: 299.51,
  //       feels_like: 299.51,
  //       pressure: 1004,
  //       humidity: 92,
  //       dew_point: 298.1,
  //       uvi: 0,
  //       clouds: 79,
  //       visibility: 10000,
  //       wind_speed: 2.83,
  //       wind_deg: 156,
  //       wind_gust: 6.53,
  //       weather: [
  //         {
  //           id: 803,
  //           main: 'Clouds',
  //           description: 'broken clouds',
  //           icon: '04n',
  //         },
  //       ],
  //       pop: 0.11,
  //     },
  //     {
  //       dt: 1694293200,
  //       temp: 299.3,
  //       feels_like: 299.3,
  //       pressure: 1003,
  //       humidity: 93,
  //       dew_point: 298.08,
  //       uvi: 0,
  //       clouds: 84,
  //       visibility: 10000,
  //       wind_speed: 2.49,
  //       wind_deg: 155,
  //       wind_gust: 6.09,
  //       weather: [
  //         {
  //           id: 803,
  //           main: 'Clouds',
  //           description: 'broken clouds',
  //           icon: '04n',
  //         },
  //       ],
  //       pop: 0.23,
  //     },
  //     {
  //       dt: 1694296800,
  //       temp: 299.08,
  //       feels_like: 300.18,
  //       pressure: 1003,
  //       humidity: 94,
  //       dew_point: 298.04,
  //       uvi: 0,
  //       clouds: 90,
  //       visibility: 10000,
  //       wind_speed: 2.62,
  //       wind_deg: 157,
  //       wind_gust: 6.26,
  //       weather: [
  //         {
  //           id: 500,
  //           main: 'Rain',
  //           description: 'light rain',
  //           icon: '10n',
  //         },
  //       ],
  //       pop: 0.48,
  //       rain: {
  //         '1h': 0.34,
  //       },
  //     },
  //     {
  //       dt: 1694300400,
  //       temp: 298.85,
  //       feels_like: 299.96,
  //       pressure: 1003,
  //       humidity: 95,
  //       dew_point: 297.92,
  //       uvi: 0,
  //       clouds: 96,
  //       visibility: 10000,
  //       wind_speed: 2.61,
  //       wind_deg: 154,
  //       wind_gust: 5.61,
  //       weather: [
  //         {
  //           id: 500,
  //           main: 'Rain',
  //           description: 'light rain',
  //           icon: '10n',
  //         },
  //       ],
  //       pop: 0.52,
  //       rain: {
  //         '1h': 0.14,
  //       },
  //     },
  //     {
  //       dt: 1694304000,
  //       temp: 298.7,
  //       feels_like: 299.77,
  //       pressure: 1004,
  //       humidity: 94,
  //       dew_point: 297.74,
  //       uvi: 0,
  //       clouds: 96,
  //       visibility: 10000,
  //       wind_speed: 2.51,
  //       wind_deg: 159,
  //       wind_gust: 5.34,
  //       weather: [
  //         {
  //           id: 804,
  //           main: 'Clouds',
  //           description: 'overcast clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0.55,
  //     },
  //     {
  //       dt: 1694307600,
  //       temp: 299.53,
  //       feels_like: 299.53,
  //       pressure: 1004,
  //       humidity: 90,
  //       dew_point: 297.77,
  //       uvi: 0.4,
  //       clouds: 95,
  //       visibility: 10000,
  //       wind_speed: 2.74,
  //       wind_deg: 167,
  //       wind_gust: 4.59,
  //       weather: [
  //         {
  //           id: 804,
  //           main: 'Clouds',
  //           description: 'overcast clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0.17,
  //     },
  //     {
  //       dt: 1694311200,
  //       temp: 300.99,
  //       feels_like: 305.15,
  //       pressure: 1005,
  //       humidity: 82,
  //       dew_point: 297.77,
  //       uvi: 1.7,
  //       clouds: 90,
  //       visibility: 10000,
  //       wind_speed: 3.23,
  //       wind_deg: 165,
  //       wind_gust: 4.12,
  //       weather: [
  //         {
  //           id: 804,
  //           main: 'Clouds',
  //           description: 'overcast clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0.17,
  //     },
  //     {
  //       dt: 1694314800,
  //       temp: 302.36,
  //       feels_like: 307.59,
  //       pressure: 1005,
  //       humidity: 76,
  //       dew_point: 297.77,
  //       uvi: 4.11,
  //       clouds: 82,
  //       visibility: 10000,
  //       wind_speed: 3.47,
  //       wind_deg: 161,
  //       wind_gust: 4.03,
  //       weather: [
  //         {
  //           id: 803,
  //           main: 'Clouds',
  //           description: 'broken clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0.25,
  //     },
  //     {
  //       dt: 1694318400,
  //       temp: 303.71,
  //       feels_like: 309.59,
  //       pressure: 1004,
  //       humidity: 70,
  //       dew_point: 297.69,
  //       uvi: 7.3,
  //       clouds: 67,
  //       visibility: 10000,
  //       wind_speed: 3.91,
  //       wind_deg: 156,
  //       wind_gust: 4.36,
  //       weather: [
  //         {
  //           id: 803,
  //           main: 'Clouds',
  //           description: 'broken clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0.28,
  //     },
  //     {
  //       dt: 1694322000,
  //       temp: 304.74,
  //       feels_like: 311.07,
  //       pressure: 1004,
  //       humidity: 66,
  //       dew_point: 297.59,
  //       uvi: 9.96,
  //       clouds: 59,
  //       visibility: 10000,
  //       wind_speed: 4.03,
  //       wind_deg: 153,
  //       wind_gust: 4.32,
  //       weather: [
  //         {
  //           id: 803,
  //           main: 'Clouds',
  //           description: 'broken clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0.35,
  //     },
  //     {
  //       dt: 1694325600,
  //       temp: 305.54,
  //       feels_like: 311.48,
  //       pressure: 1003,
  //       humidity: 61,
  //       dew_point: 297.29,
  //       uvi: 11.25,
  //       clouds: 57,
  //       visibility: 10000,
  //       wind_speed: 4.19,
  //       wind_deg: 151,
  //       wind_gust: 4.53,
  //       weather: [
  //         {
  //           id: 803,
  //           main: 'Clouds',
  //           description: 'broken clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0.35,
  //     },
  //     {
  //       dt: 1694329200,
  //       temp: 306.29,
  //       feels_like: 312.31,
  //       pressure: 1002,
  //       humidity: 58,
  //       dew_point: 297,
  //       uvi: 10.71,
  //       clouds: 71,
  //       visibility: 10000,
  //       wind_speed: 4.31,
  //       wind_deg: 155,
  //       wind_gust: 4.7,
  //       weather: [
  //         {
  //           id: 803,
  //           main: 'Clouds',
  //           description: 'broken clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0.35,
  //     },
  //     {
  //       dt: 1694332800,
  //       temp: 306.66,
  //       feels_like: 312.5,
  //       pressure: 1001,
  //       humidity: 56,
  //       dew_point: 296.82,
  //       uvi: 8.51,
  //       clouds: 85,
  //       visibility: 10000,
  //       wind_speed: 4.16,
  //       wind_deg: 159,
  //       wind_gust: 4.52,
  //       weather: [
  //         {
  //           id: 804,
  //           main: 'Clouds',
  //           description: 'overcast clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0.31,
  //     },
  //     {
  //       dt: 1694336400,
  //       temp: 306.56,
  //       feels_like: 312.26,
  //       pressure: 1000,
  //       humidity: 56,
  //       dew_point: 296.87,
  //       uvi: 5.45,
  //       clouds: 86,
  //       visibility: 10000,
  //       wind_speed: 4.07,
  //       wind_deg: 162,
  //       wind_gust: 4.29,
  //       weather: [
  //         {
  //           id: 804,
  //           main: 'Clouds',
  //           description: 'overcast clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0.31,
  //     },
  //     {
  //       dt: 1694340000,
  //       temp: 305.74,
  //       feels_like: 311.98,
  //       pressure: 1000,
  //       humidity: 61,
  //       dew_point: 297.36,
  //       uvi: 2.62,
  //       clouds: 88,
  //       visibility: 10000,
  //       wind_speed: 3.55,
  //       wind_deg: 164,
  //       wind_gust: 3.99,
  //       weather: [
  //         {
  //           id: 804,
  //           main: 'Clouds',
  //           description: 'overcast clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0.31,
  //     },
  //     {
  //       dt: 1694343600,
  //       temp: 305.19,
  //       feels_like: 311.92,
  //       pressure: 1000,
  //       humidity: 65,
  //       dew_point: 297.69,
  //       uvi: 0.81,
  //       clouds: 89,
  //       visibility: 10000,
  //       wind_speed: 2.66,
  //       wind_deg: 160,
  //       wind_gust: 4.13,
  //       weather: [
  //         {
  //           id: 804,
  //           main: 'Clouds',
  //           description: 'overcast clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0.27,
  //     },
  //     {
  //       dt: 1694347200,
  //       temp: 304.02,
  //       feels_like: 310.11,
  //       pressure: 1000,
  //       humidity: 69,
  //       dew_point: 297.74,
  //       uvi: 0,
  //       clouds: 91,
  //       visibility: 10000,
  //       wind_speed: 2.32,
  //       wind_deg: 154,
  //       wind_gust: 2.87,
  //       weather: [
  //         {
  //           id: 804,
  //           main: 'Clouds',
  //           description: 'overcast clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0.23,
  //     },
  //     {
  //       dt: 1694350800,
  //       temp: 303.3,
  //       feels_like: 308.56,
  //       pressure: 1001,
  //       humidity: 70,
  //       dew_point: 297.11,
  //       uvi: 0,
  //       clouds: 97,
  //       visibility: 10000,
  //       wind_speed: 2.78,
  //       wind_deg: 153,
  //       wind_gust: 3.76,
  //       weather: [
  //         {
  //           id: 804,
  //           main: 'Clouds',
  //           description: 'overcast clouds',
  //           icon: '04n',
  //         },
  //       ],
  //       pop: 0.07,
  //     },
  //     {
  //       dt: 1694354400,
  //       temp: 302.3,
  //       feels_like: 307.22,
  //       pressure: 1002,
  //       humidity: 75,
  //       dew_point: 297.33,
  //       uvi: 0,
  //       clouds: 95,
  //       visibility: 10000,
  //       wind_speed: 4.54,
  //       wind_deg: 157,
  //       wind_gust: 8.57,
  //       weather: [
  //         {
  //           id: 804,
  //           main: 'Clouds',
  //           description: 'overcast clouds',
  //           icon: '04n',
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1694358000,
  //       temp: 301.27,
  //       feels_like: 305.88,
  //       pressure: 1003,
  //       humidity: 82,
  //       dew_point: 297.89,
  //       uvi: 0,
  //       clouds: 93,
  //       visibility: 10000,
  //       wind_speed: 5.06,
  //       wind_deg: 173,
  //       wind_gust: 9.75,
  //       weather: [
  //         {
  //           id: 804,
  //           main: 'Clouds',
  //           description: 'overcast clouds',
  //           icon: '04n',
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1694361600,
  //       temp: 300.77,
  //       feels_like: 305,
  //       pressure: 1003,
  //       humidity: 85,
  //       dew_point: 297.92,
  //       uvi: 0,
  //       clouds: 91,
  //       visibility: 10000,
  //       wind_speed: 4.35,
  //       wind_deg: 177,
  //       wind_gust: 8.88,
  //       weather: [
  //         {
  //           id: 804,
  //           main: 'Clouds',
  //           description: 'overcast clouds',
  //           icon: '04n',
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1694365200,
  //       temp: 300.47,
  //       feels_like: 304.2,
  //       pressure: 1003,
  //       humidity: 85,
  //       dew_point: 297.67,
  //       uvi: 0,
  //       clouds: 87,
  //       visibility: 10000,
  //       wind_speed: 4.26,
  //       wind_deg: 173,
  //       wind_gust: 9.12,
  //       weather: [
  //         {
  //           id: 804,
  //           main: 'Clouds',
  //           description: 'overcast clouds',
  //           icon: '04n',
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1694368800,
  //       temp: 300.15,
  //       feels_like: 303.37,
  //       pressure: 1003,
  //       humidity: 85,
  //       dew_point: 297.44,
  //       uvi: 0,
  //       clouds: 88,
  //       visibility: 10000,
  //       wind_speed: 3.99,
  //       wind_deg: 168,
  //       wind_gust: 9.13,
  //       weather: [
  //         {
  //           id: 804,
  //           main: 'Clouds',
  //           description: 'overcast clouds',
  //           icon: '04n',
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1694372400,
  //       temp: 299.82,
  //       feels_like: 302.72,
  //       pressure: 1002,
  //       humidity: 87,
  //       dew_point: 297.52,
  //       uvi: 0,
  //       clouds: 90,
  //       visibility: 10000,
  //       wind_speed: 3.6,
  //       wind_deg: 167,
  //       wind_gust: 8.9,
  //       weather: [
  //         {
  //           id: 804,
  //           main: 'Clouds',
  //           description: 'overcast clouds',
  //           icon: '04n',
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1694376000,
  //       temp: 299.62,
  //       feels_like: 299.62,
  //       pressure: 1002,
  //       humidity: 89,
  //       dew_point: 297.68,
  //       uvi: 0,
  //       clouds: 93,
  //       visibility: 10000,
  //       wind_speed: 3.07,
  //       wind_deg: 168,
  //       wind_gust: 8,
  //       weather: [
  //         {
  //           id: 804,
  //           main: 'Clouds',
  //           description: 'overcast clouds',
  //           icon: '04n',
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1694379600,
  //       temp: 299.43,
  //       feels_like: 299.43,
  //       pressure: 1001,
  //       humidity: 91,
  //       dew_point: 297.86,
  //       uvi: 0,
  //       clouds: 93,
  //       visibility: 10000,
  //       wind_speed: 2.55,
  //       wind_deg: 174,
  //       wind_gust: 7.07,
  //       weather: [
  //         {
  //           id: 804,
  //           main: 'Clouds',
  //           description: 'overcast clouds',
  //           icon: '04n',
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1694383200,
  //       temp: 299.22,
  //       feels_like: 299.22,
  //       pressure: 1001,
  //       humidity: 92,
  //       dew_point: 297.78,
  //       uvi: 0,
  //       clouds: 88,
  //       visibility: 10000,
  //       wind_speed: 2.25,
  //       wind_deg: 172,
  //       wind_gust: 5.98,
  //       weather: [
  //         {
  //           id: 804,
  //           main: 'Clouds',
  //           description: 'overcast clouds',
  //           icon: '04n',
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1694386800,
  //       temp: 299.11,
  //       feels_like: 299.11,
  //       pressure: 1001,
  //       humidity: 92,
  //       dew_point: 297.77,
  //       uvi: 0,
  //       clouds: 87,
  //       visibility: 10000,
  //       wind_speed: 2.16,
  //       wind_deg: 170,
  //       wind_gust: 4.85,
  //       weather: [
  //         {
  //           id: 804,
  //           main: 'Clouds',
  //           description: 'overcast clouds',
  //           icon: '04n',
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1694390400,
  //       temp: 299.02,
  //       feels_like: 300.09,
  //       pressure: 1002,
  //       humidity: 93,
  //       dew_point: 297.74,
  //       uvi: 0,
  //       clouds: 83,
  //       visibility: 10000,
  //       wind_speed: 2.04,
  //       wind_deg: 163,
  //       wind_gust: 3.97,
  //       weather: [
  //         {
  //           id: 803,
  //           main: 'Clouds',
  //           description: 'broken clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1694394000,
  //       temp: 299.84,
  //       feels_like: 302.93,
  //       pressure: 1003,
  //       humidity: 89,
  //       dew_point: 297.86,
  //       uvi: 0.4,
  //       clouds: 47,
  //       visibility: 10000,
  //       wind_speed: 2.35,
  //       wind_deg: 165,
  //       wind_gust: 3.96,
  //       weather: [
  //         {
  //           id: 802,
  //           main: 'Clouds',
  //           description: 'scattered clouds',
  //           icon: '03d',
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1694397600,
  //       temp: 301.32,
  //       feels_like: 305.84,
  //       pressure: 1003,
  //       humidity: 81,
  //       dew_point: 297.81,
  //       uvi: 1.7,
  //       clouds: 54,
  //       visibility: 10000,
  //       wind_speed: 2.87,
  //       wind_deg: 164,
  //       wind_gust: 3.63,
  //       weather: [
  //         {
  //           id: 803,
  //           main: 'Clouds',
  //           description: 'broken clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0.08,
  //     },
  //     {
  //       dt: 1694401200,
  //       temp: 302.71,
  //       feels_like: 308.27,
  //       pressure: 1004,
  //       humidity: 75,
  //       dew_point: 297.75,
  //       uvi: 4.16,
  //       clouds: 66,
  //       visibility: 10000,
  //       wind_speed: 3.51,
  //       wind_deg: 156,
  //       wind_gust: 4.21,
  //       weather: [
  //         {
  //           id: 803,
  //           main: 'Clouds',
  //           description: 'broken clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0.18,
  //     },
  //     {
  //       dt: 1694404800,
  //       temp: 304.19,
  //       feels_like: 310.26,
  //       pressure: 1004,
  //       humidity: 68,
  //       dew_point: 297.61,
  //       uvi: 7.23,
  //       clouds: 61,
  //       visibility: 10000,
  //       wind_speed: 4.23,
  //       wind_deg: 162,
  //       wind_gust: 4.74,
  //       weather: [
  //         {
  //           id: 803,
  //           main: 'Clouds',
  //           description: 'broken clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0.18,
  //     },
  //     {
  //       dt: 1694408400,
  //       temp: 305.26,
  //       feels_like: 311.11,
  //       pressure: 1003,
  //       humidity: 62,
  //       dew_point: 297.31,
  //       uvi: 9.86,
  //       clouds: 57,
  //       visibility: 10000,
  //       wind_speed: 4.37,
  //       wind_deg: 164,
  //       wind_gust: 4.62,
  //       weather: [
  //         {
  //           id: 803,
  //           main: 'Clouds',
  //           description: 'broken clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0.29,
  //     },
  //     {
  //       dt: 1694412000,
  //       temp: 306.02,
  //       feels_like: 311.99,
  //       pressure: 1002,
  //       humidity: 59,
  //       dew_point: 296.99,
  //       uvi: 11.15,
  //       clouds: 50,
  //       visibility: 10000,
  //       wind_speed: 4.32,
  //       wind_deg: 164,
  //       wind_gust: 4.49,
  //       weather: [
  //         {
  //           id: 802,
  //           main: 'Clouds',
  //           description: 'scattered clouds',
  //           icon: '03d',
  //         },
  //       ],
  //       pop: 0.35,
  //     },
  //     {
  //       dt: 1694415600,
  //       temp: 306.57,
  //       feels_like: 312.28,
  //       pressure: 1001,
  //       humidity: 56,
  //       dew_point: 296.74,
  //       uvi: 10.56,
  //       clouds: 26,
  //       visibility: 10000,
  //       wind_speed: 4.32,
  //       wind_deg: 164,
  //       wind_gust: 4.46,
  //       weather: [
  //         {
  //           id: 802,
  //           main: 'Clouds',
  //           description: 'scattered clouds',
  //           icon: '03d',
  //         },
  //       ],
  //       pop: 0.16,
  //     },
  //     {
  //       dt: 1694419200,
  //       temp: 306.99,
  //       feels_like: 312.57,
  //       pressure: 1000,
  //       humidity: 54,
  //       dew_point: 296.51,
  //       uvi: 8.37,
  //       clouds: 49,
  //       visibility: 10000,
  //       wind_speed: 4.14,
  //       wind_deg: 165,
  //       wind_gust: 4.25,
  //       weather: [
  //         {
  //           id: 802,
  //           main: 'Clouds',
  //           description: 'scattered clouds',
  //           icon: '03d',
  //         },
  //       ],
  //       pop: 0.1,
  //     },
  //     {
  //       dt: 1694422800,
  //       temp: 307.09,
  //       feels_like: 312.45,
  //       pressure: 999,
  //       humidity: 53,
  //       dew_point: 296.31,
  //       uvi: 5.36,
  //       clouds: 56,
  //       visibility: 10000,
  //       wind_speed: 4.06,
  //       wind_deg: 166,
  //       wind_gust: 4.19,
  //       weather: [
  //         {
  //           id: 803,
  //           main: 'Clouds',
  //           description: 'broken clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0.1,
  //     },
  //     {
  //       dt: 1694426400,
  //       temp: 306.88,
  //       feels_like: 311.96,
  //       pressure: 999,
  //       humidity: 53,
  //       dew_point: 296.22,
  //       uvi: 2.55,
  //       clouds: 67,
  //       visibility: 10000,
  //       wind_speed: 3.9,
  //       wind_deg: 167,
  //       wind_gust: 4.22,
  //       weather: [
  //         {
  //           id: 803,
  //           main: 'Clouds',
  //           description: 'broken clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0.1,
  //     },
  //     {
  //       dt: 1694430000,
  //       temp: 306.14,
  //       feels_like: 312.64,
  //       pressure: 999,
  //       humidity: 60,
  //       dew_point: 297.44,
  //       uvi: 0.78,
  //       clouds: 73,
  //       visibility: 10000,
  //       wind_speed: 3.3,
  //       wind_deg: 167,
  //       wind_gust: 4.26,
  //       weather: [
  //         {
  //           id: 803,
  //           main: 'Clouds',
  //           description: 'broken clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0.1,
  //     },
  //     {
  //       dt: 1694433600,
  //       temp: 303.91,
  //       feels_like: 310.4,
  //       pressure: 1000,
  //       humidity: 71,
  //       dew_point: 297.99,
  //       uvi: 0,
  //       clouds: 77,
  //       visibility: 10000,
  //       wind_speed: 3.34,
  //       wind_deg: 159,
  //       wind_gust: 5.2,
  //       weather: [
  //         {
  //           id: 803,
  //           main: 'Clouds',
  //           description: 'broken clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       pop: 0.06,
  //     },
  //     {
  //       dt: 1694437200,
  //       temp: 302.47,
  //       feels_like: 307.87,
  //       pressure: 1000,
  //       humidity: 76,
  //       dew_point: 297.78,
  //       uvi: 0,
  //       clouds: 41,
  //       visibility: 10000,
  //       wind_speed: 3.96,
  //       wind_deg: 158,
  //       wind_gust: 7.68,
  //       weather: [
  //         {
  //           id: 802,
  //           main: 'Clouds',
  //           description: 'scattered clouds',
  //           icon: '03n',
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1694440800,
  //       temp: 302.11,
  //       feels_like: 307.15,
  //       pressure: 1001,
  //       humidity: 77,
  //       dew_point: 297.61,
  //       uvi: 0,
  //       clouds: 33,
  //       visibility: 10000,
  //       wind_speed: 4.29,
  //       wind_deg: 169,
  //       wind_gust: 8.87,
  //       weather: [
  //         {
  //           id: 802,
  //           main: 'Clouds',
  //           description: 'scattered clouds',
  //           icon: '03n',
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1694444400,
  //       temp: 301.53,
  //       feels_like: 306.4,
  //       pressure: 1002,
  //       humidity: 81,
  //       dew_point: 297.91,
  //       uvi: 0,
  //       clouds: 30,
  //       visibility: 10000,
  //       wind_speed: 4.97,
  //       wind_deg: 172,
  //       wind_gust: 9.69,
  //       weather: [
  //         {
  //           id: 802,
  //           main: 'Clouds',
  //           description: 'scattered clouds',
  //           icon: '03n',
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1694448000,
  //       temp: 300.96,
  //       feels_like: 305.36,
  //       pressure: 1003,
  //       humidity: 84,
  //       dew_point: 297.91,
  //       uvi: 0,
  //       clouds: 41,
  //       visibility: 10000,
  //       wind_speed: 4.59,
  //       wind_deg: 174,
  //       wind_gust: 9.09,
  //       weather: [
  //         {
  //           id: 802,
  //           main: 'Clouds',
  //           description: 'scattered clouds',
  //           icon: '03n',
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1694451600,
  //       temp: 300.48,
  //       feels_like: 304.34,
  //       pressure: 1003,
  //       humidity: 86,
  //       dew_point: 297.88,
  //       uvi: 0,
  //       clouds: 45,
  //       visibility: 10000,
  //       wind_speed: 4.24,
  //       wind_deg: 169,
  //       wind_gust: 8.77,
  //       weather: [
  //         {
  //           id: 802,
  //           main: 'Clouds',
  //           description: 'scattered clouds',
  //           icon: '03n',
  //         },
  //       ],
  //       pop: 0,
  //     },
  //   ],
  //   daily: [
  //     {
  //       dt: 1694237400,
  //       sunrise: 1694217382,
  //       sunset: 1694262161,
  //       moonrise: 1694198400,
  //       moonset: 1694249640,
  //       moon_phase: 0.82,
  //       temp: {
  //         day: 304.48,
  //         min: 298.28,
  //         max: 305.92,
  //         night: 299.78,
  //         eve: 304.3,
  //         morn: 298.31,
  //       },
  //       feels_like: {
  //         day: 310.71,
  //         night: 299.78,
  //         eve: 311.15,
  //         morn: 299.41,
  //       },
  //       pressure: 1005,
  //       humidity: 67,
  //       dew_point: 297.63,
  //       wind_speed: 3.99,
  //       wind_deg: 159,
  //       wind_gust: 8.47,
  //       weather: [
  //         {
  //           id: 501,
  //           main: 'Rain',
  //           description: 'moderate rain',
  //           icon: '10d',
  //         },
  //       ],
  //       clouds: 100,
  //       pop: 1,
  //       rain: 9.35,
  //       uvi: 10.83,
  //     },
  //     {
  //       dt: 1694323800,
  //       sunrise: 1694303800,
  //       sunset: 1694348500,
  //       moonrise: 1694288100,
  //       moonset: 1694338860,
  //       moon_phase: 0.85,
  //       temp: {
  //         day: 304.74,
  //         min: 298.7,
  //         max: 306.66,
  //         night: 300.47,
  //         eve: 305.19,
  //         morn: 298.85,
  //       },
  //       feels_like: {
  //         day: 311.07,
  //         night: 304.2,
  //         eve: 311.92,
  //         morn: 299.96,
  //       },
  //       pressure: 1004,
  //       humidity: 66,
  //       dew_point: 297.59,
  //       wind_speed: 5.06,
  //       wind_deg: 173,
  //       wind_gust: 9.75,
  //       weather: [
  //         {
  //           id: 500,
  //           main: 'Rain',
  //           description: 'light rain',
  //           icon: '10d',
  //         },
  //       ],
  //       clouds: 59,
  //       pop: 0.55,
  //       rain: 0.48,
  //       uvi: 11.25,
  //     },
  //     {
  //       dt: 1694410200,
  //       sunrise: 1694390218,
  //       sunset: 1694434839,
  //       moonrise: 1694377800,
  //       moonset: 1694427780,
  //       moon_phase: 0.88,
  //       temp: {
  //         day: 305.26,
  //         min: 299.02,
  //         max: 307.09,
  //         night: 300.48,
  //         eve: 306.14,
  //         morn: 299.11,
  //       },
  //       feels_like: {
  //         day: 311.11,
  //         night: 304.34,
  //         eve: 312.64,
  //         morn: 299.11,
  //       },
  //       pressure: 1003,
  //       humidity: 62,
  //       dew_point: 297.31,
  //       wind_speed: 4.97,
  //       wind_deg: 172,
  //       wind_gust: 9.69,
  //       weather: [
  //         {
  //           id: 803,
  //           main: 'Clouds',
  //           description: 'broken clouds',
  //           icon: '04d',
  //         },
  //       ],
  //       clouds: 57,
  //       pop: 0.35,
  //       uvi: 11.15,
  //     },
  //     {
  //       dt: 1694496600,
  //       sunrise: 1694476636,
  //       sunset: 1694521178,
  //       moonrise: 1694467440,
  //       moonset: 1694516400,
  //       moon_phase: 0.91,
  //       temp: {
  //         day: 305.52,
  //         min: 298.87,
  //         max: 307.89,
  //         night: 300.45,
  //         eve: 306.95,
  //         morn: 299.01,
  //       },
  //       feels_like: {
  //         day: 311.76,
  //         night: 304.26,
  //         eve: 312.84,
  //         morn: 300.16,
  //       },
  //       pressure: 1003,
  //       humidity: 62,
  //       dew_point: 297.48,
  //       wind_speed: 4.34,
  //       wind_deg: 165,
  //       wind_gust: 8.58,
  //       weather: [
  //         {
  //           id: 802,
  //           main: 'Clouds',
  //           description: 'scattered clouds',
  //           icon: '03d',
  //         },
  //       ],
  //       clouds: 47,
  //       pop: 0.09,
  //       uvi: 11.07,
  //     },
  //     {
  //       dt: 1694583000,
  //       sunrise: 1694563054,
  //       sunset: 1694607516,
  //       moonrise: 1694557020,
  //       moonset: 1694604840,
  //       moon_phase: 0.94,
  //       temp: {
  //         day: 306.41,
  //         min: 299.91,
  //         max: 306.41,
  //         night: 300.36,
  //         eve: 304.29,
  //         morn: 299.91,
  //       },
  //       feels_like: {
  //         day: 313.34,
  //         night: 303.91,
  //         eve: 310.22,
  //         morn: 302.95,
  //       },
  //       pressure: 1001,
  //       humidity: 60,
  //       dew_point: 297.68,
  //       wind_speed: 3.71,
  //       wind_deg: 114,
  //       wind_gust: 6.58,
  //       weather: [
  //         {
  //           id: 500,
  //           main: 'Rain',
  //           description: 'light rain',
  //           icon: '10d',
  //         },
  //       ],
  //       clouds: 60,
  //       pop: 0.68,
  //       rain: 1.61,
  //       uvi: 10.99,
  //     },
  //     {
  //       dt: 1694669400,
  //       sunrise: 1694649472,
  //       sunset: 1694693855,
  //       moonrise: 1694646540,
  //       moonset: 1694693100,
  //       moon_phase: 0.98,
  //       temp: {
  //         day: 304.45,
  //         min: 298.97,
  //         max: 304.45,
  //         night: 298.97,
  //         eve: 301.15,
  //         morn: 298.99,
  //       },
  //       feels_like: {
  //         day: 310.94,
  //         night: 300.09,
  //         eve: 305.88,
  //         morn: 300.03,
  //       },
  //       pressure: 1002,
  //       humidity: 68,
  //       dew_point: 297.82,
  //       wind_speed: 6.65,
  //       wind_deg: 87,
  //       wind_gust: 10.77,
  //       weather: [
  //         {
  //           id: 500,
  //           main: 'Rain',
  //           description: 'light rain',
  //           icon: '10d',
  //         },
  //       ],
  //       clouds: 95,
  //       pop: 1,
  //       rain: 6.3,
  //       uvi: 9.8,
  //     },
  //     {
  //       dt: 1694755800,
  //       sunrise: 1694735889,
  //       sunset: 1694780193,
  //       moonrise: 1694735940,
  //       moonset: 1694781240,
  //       moon_phase: 0,
  //       temp: {
  //         day: 303.88,
  //         min: 298.54,
  //         max: 303.88,
  //         night: 298.65,
  //         eve: 300.53,
  //         morn: 298.54,
  //       },
  //       feels_like: {
  //         day: 310.32,
  //         night: 299.74,
  //         eve: 304.48,
  //         morn: 299.62,
  //       },
  //       pressure: 1002,
  //       humidity: 71,
  //       dew_point: 298.08,
  //       wind_speed: 8.47,
  //       wind_deg: 125,
  //       wind_gust: 10.99,
  //       weather: [
  //         {
  //           id: 500,
  //           main: 'Rain',
  //           description: 'light rain',
  //           icon: '10d',
  //         },
  //       ],
  //       clouds: 97,
  //       pop: 1,
  //       rain: 3.96,
  //       uvi: 10,
  //     },
  //     {
  //       dt: 1694842200,
  //       sunrise: 1694822307,
  //       sunset: 1694866531,
  //       moonrise: 1694825340,
  //       moonset: 1694869380,
  //       moon_phase: 0.04,
  //       temp: {
  //         day: 303.91,
  //         min: 297.87,
  //         max: 303.91,
  //         night: 297.87,
  //         eve: 299.93,
  //         morn: 298.33,
  //       },
  //       feels_like: {
  //         day: 309.83,
  //         night: 298.9,
  //         eve: 302.91,
  //         morn: 299.38,
  //       },
  //       pressure: 1004,
  //       humidity: 69,
  //       dew_point: 297.57,
  //       wind_speed: 7.27,
  //       wind_deg: 131,
  //       wind_gust: 9.98,
  //       weather: [
  //         {
  //           id: 500,
  //           main: 'Rain',
  //           description: 'light rain',
  //           icon: '10d',
  //         },
  //       ],
  //       clouds: 68,
  //       pop: 0.96,
  //       rain: 4.45,
  //       uvi: 10,
  //     },
  //   ],
  // };
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
        className={`flex min-h-80 w-[280px] flex-col items-center justify-center bg-black p-4 pt-10 text-white`}
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
          className={`bg-${color} text-${color} w-[280px] p-4`}
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
          className={`bg-${color} text-${color} w-[280px] p-4`}
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
            <div className=''>00.0&deg;</div>
          </div>
          <div className={`mt-4 grid grid-cols-2 gap-2`}>
            <ShowCurr title='Humidity' value={'100' + '%'} icon={<Droplets size={24} />} color={color} />
            <ShowCurr title='' value={'cloudy'} color={color} />
            <ShowCurr title='Feels like' value={'00.0' + '°'} icon={<ThermometerSun size={24} />} color={color} />
            <ShowCurr title='pressure' value={'100' + 'hPa'} icon={<BarChart size={24} />} color={color} />
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
