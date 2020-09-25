import {combineReducers, createStore} from "redux";
import homePageReducer from "./homePageReducer";

const reducers = combineReducers({
    homePage: homePageReducer,
});


const store = createStore(reducers);

// @ts-ignore
window.store = store;


export default store;