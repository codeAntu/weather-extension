import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { createMemoryRouter } from 'react-router-dom';
import Today from './screens/Today.tsx';
import Forecast from './screens/Forecast.tsx';
import Find from './screens/FindCity.tsx';
import ShowLocation from './screens/SetCity.tsx';

const router = createMemoryRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/today',
    element: <Today />,
  },
  {
    path: '/forecast',
    element: <Forecast />,
  },
  {
    path: '/city',
    element: <Find />,
  },
  {
    path: '/city/:city',
    element: <ShowLocation />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
