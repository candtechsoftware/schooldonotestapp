import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger'; 
import rootReducer from './redux/rootReducer';
import setAuthtoken from './utils/authHeader';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'


const initialState = {}
const middleware = [thunk, logger];

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,


}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


let currentState = store.getState();

store.subscribe(() => {
  let previousState = currentState;
  currentState = store.getState();
  if (previousState.user.token !== currentState.user.token) {
    const token = currentState.user.token;
    setAuthtoken(token);
  }

})

let persistor = persistStore(store)
export {persistor, store};