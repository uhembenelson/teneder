import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import reducer from "./reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['details']
}

const rootReducer = combineReducers({
    details: reducer,

})

export default persistReducer(persistConfig, rootReducer)

