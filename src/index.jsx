import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import Footer from './Components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
    <footer>
      <Footer />
    </footer>
  </React.StrictMode>
);

