import { combineReducers, applyMiddleware, legacy_createStore } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import ItemsReducer from "./reducers/ItemReducer";

// const reducer=combineReducers({
//    items:ItemsReducer
// })

// let initialState={}

// const middleware=[thunk];
// const store=legacy_createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

// export default store;



import reducers from "./reducers/index";

const store = legacy_createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;