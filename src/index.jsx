import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal from 'react-modal';
import './Styles/index.css';
import { BrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
Modal.setAppElement(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <Header />
      </header>
    </BrowserRouter>
    <main>
      <RouterProvider router={routes} />
    </main>
    <footer>
      <Footer />
    </footer>
  </React.StrictMode>
);

