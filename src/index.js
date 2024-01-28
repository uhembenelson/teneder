import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './Redux/store';
import { BrowserRouter } from 'react-router-dom'
import { SWRConfig, mutate } from "swr";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetcher = async (...args) => {
  const res = await axios(...args);
  return res.data;
};



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <SWRConfig value={{ fetcher }}>
          <ToastContainer />
          <App />
        </SWRConfig>
      </PersistGate>
    </BrowserRouter>
  </Provider>
)

