import {combineReducers} from 'redux';
import {authReducer} from './auth';
import {cardsReducer} from './cards';
import {profileReducer} from './profile';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['cards', 'profile'],
};

const reducers = combineReducers({auth: authReducer, cards: cardsReducer, profile: profileReducer});
export const persistReducers = persistReducer(persistConfig, reducers);

export type State = ReturnType<typeof reducers>;
