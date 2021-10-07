import {combineReducers} from 'redux';
import {authReducer} from './auth';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducers = combineReducers({auth: authReducer});
export const persistReducers = persistReducer(persistConfig, reducers);

export type State = ReturnType<typeof reducers>;
