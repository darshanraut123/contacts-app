import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import contactReducer from './redux/reducers/contactReducer';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

//Creating redux store
const store = createStore(contactReducer,composeWithDevTools());

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
    <App />
    </Provider>
  </React.StrictMode>
);

