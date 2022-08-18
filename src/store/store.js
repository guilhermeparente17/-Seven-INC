import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedRed = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedRed);
const persistor = persistStore(store);

export { store, persistor};