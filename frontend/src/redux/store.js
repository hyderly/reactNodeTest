import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import logger from "redux-logger";
import thunk from "redux-thunk";


import {sumReducer} from './reducer'

const middlewares = [thunk, logger];

const rootReducer = combineReducers({
    sumData: sumReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))
  
export default store;