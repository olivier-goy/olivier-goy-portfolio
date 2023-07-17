import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import { BrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

// );

import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<React.StrictMode>
    <BrowserRouter>
      <header>
        <Header />
      </header>
    </BrowserRouter>
    <RouterProvider router={routes} />
    <footer>
      <Footer />
    </footer>
  </React.StrictMode>, rootElement);
} else {
  render(<React.StrictMode>
    <BrowserRouter>
      <header>
        <Header />
      </header>
    </BrowserRouter>
    <RouterProvider router={routes} />
    <footer>
      <Footer />
    </footer>
  </React.StrictMode>, rootElement);
}

