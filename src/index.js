import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AppBarMenu from './components/AppBarMenu/AppBarMenu';
import Footerw from './components/FooterW/FooterW';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import FormW from "./components/Form/FormW"
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Welcome from './components/Welcome/Welcome';

const darkTheme = createTheme({
  palette: {
      mode: 'light',
      primary: {
      main: '#4388a9',
      },
  },
});

const router = createBrowserRouter([
  {
    path: "*",
    element: 
      <div style={{minHeight:"100vh", display: "flex", flexDirection: "column"}}>
        <AppBarMenu></AppBarMenu>
        <div className='spaceNav'><NotFound /></div>
        <Footerw style={{marginTop: "auto"}} />
      </div>,
  },
  {
    path: "/",
    element:
      <div style={{minHeight:"100vh", display: "flex", flexDirection: "column"}}>
        <AppBarMenu></AppBarMenu>
        <div className='spaceNav'><Home></Home></div>
        <Footerw style={{marginTop: "auto"}} />
      </div>,
  },
  {
    path: "/singup",
    element:
      <div style={{minHeight:"100vh", display: "flex", flexDirection: "column"}}>
        <AppBarMenu></AppBarMenu>
        <div className='spaceNav'><FormW></FormW></div>
        <Footerw style={{marginTop: "auto"}} />
      </div>,
  },
  {
    path: "/bienvenido",
    element:
      <div style={{minHeight:"100vh", display: "flex", flexDirection: "column"}}>
        <AppBarMenu></AppBarMenu>
        <div className='spaceNav'><Welcome></Welcome></div>
        <Footerw style={{marginTop: "auto"}} />
      </div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
