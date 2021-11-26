import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import AsyncStorage from '@react-native-async-storage/async-storage';

const logger = createLogger({
  logger: console,
  logErrors: true,
  diff: false,
});

const middlewares = [thunk];
if (__DEV__) {
  middlewares.push(logger);
}  

const myPersistCofig = {
  key: 'Cache',
  storage: AsyncStorage,
};

const myPersistReducer = persistReducer(myPersistCofig, reducer);

const store: any = createStore(
  myPersistReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export const persistor = persistStore(store);
export default store;
