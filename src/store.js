import { createStore, combineReducers } from "redux";
import userReducer from "./reducer/userReducer";
import searchProdcutreducer from "./reducer/searchReducer";

// combineReducer is used to combined all existing reducer

const rootReducer = combineReducers({
  user: userReducer,
  searchProduct: searchProdcutreducer,
});

const store = createStore(rootReducer);

export default store;
