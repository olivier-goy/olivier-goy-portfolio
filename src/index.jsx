import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import { BrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <Header />
      </header>
    </BrowserRouter>
    <RouterProvider router={routes} />
    <footer>
      <Footer />
    </footer>
  </React.StrictMode>
);

