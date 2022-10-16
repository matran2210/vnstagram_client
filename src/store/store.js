import rootReducer from "./reducers/rootReducer";
import storage from "redux-persist/lib/storage";
import {persistStore , persistReducer} from 'redux-persist'
import {createStore} from "redux";

const rootPersistConfig = {
    key: 'auth',
    storage: storage,
  };
  const pReducer = persistReducer(rootPersistConfig, rootReducer);
  const store = createStore(pReducer);
  const persistor = persistStore(store);

  export default store;
  export {persistor};