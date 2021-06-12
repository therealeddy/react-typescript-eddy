import { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers: Reducer): Reducer => {
  const nameReducer = process.env.REACT_APP_PERSIST_REDUCER || 'root';

  const persistedReducer = persistReducer(
    {
      key: nameReducer,
      storage,
      whitelist: [],
    },
    reducers,
  );
  return persistedReducer;
};
