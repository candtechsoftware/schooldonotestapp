import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { icons } from './assets/icons'

import { Provider } from 'react-redux'
import {store, persistor} from './store'
import { PersistGate } from 'redux-persist/integration/react'

React.icons = icons

ReactDOM.render(
  <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>

      <App/>
      </PersistGate>
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
