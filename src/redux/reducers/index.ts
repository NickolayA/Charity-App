import {combineReducers} from 'redux';
import {authReducer} from './auth';
import {cardsReducer} from './cards';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['cards']
};

const reducers = combineReducers({auth: authReducer, cards: cardsReducer});
export const persistReducers = persistReducer(persistConfig, reducers);

export type State = ReturnType<typeof reducers>;
