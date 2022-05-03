import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import appStore from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore.persistor}>
      <PersistGate loading={null} persistor={appStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
