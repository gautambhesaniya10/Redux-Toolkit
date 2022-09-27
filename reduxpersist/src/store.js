import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import rootreducer from "./redux/reducer/RootReducer";

const persistConfig = {
    key: 'persist-store',
    storage
}
const persistedReducer = persistReducer(persistConfig, rootreducer);

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store

export const persistor = persistStore(store)