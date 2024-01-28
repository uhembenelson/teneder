import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import organizationReducer from "./Organization/Reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['organization', 'bidder']
}

const rootReducer = combineReducers({
    organization: organizationReducer,

})

export default persistReducer(persistConfig, rootReducer)

