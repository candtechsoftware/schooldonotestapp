import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger'; 
import rootReducer from './redux/rootReducer';
import setAuthtoken from './utils/authHeader';


const initialState = {}
const middleware = [thunk, logger];


const store = createStore(
  rootReducer,
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

export default store;