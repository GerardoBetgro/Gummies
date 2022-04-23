import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import App from './App';
import Hero from './componentes/Hero';
import Cards from './componentes/Cards';
import About from './componentes/About';
import Footer from './componentes/Footer';

// If you want to use bootstrap you can introduce the importe right here!

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Hero/>}/>
        <Route path="cards" element={<Cards />} />
        <Route path="about" element={<About />} />
        <Route path="footer" element={<Footer />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
