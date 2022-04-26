import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "@fontsource/roboto";
import App from './App';
import Inicio from './routes/Inicio';
import Productos from './routes/Productos';
import AcercaDe from './routes/AcercaDe';
import Redes from './routes/Redes';
import Contacto from './routes/Contacto';
import NoEncontrada from './routes/NoEncontrada';

// If you want to use bootstrap you can introduce the importe right here!

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Inicio/>}/>
        <Route path="productos" element={<Productos />} />
        <Route path="acerca" element={<AcercaDe />} />
        <Route path="redes" element={<Redes />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
