import { createStore, applyMiddleware } from 'redux';
import combinedReducers from '../Reducers/index';

const store = createStore(combinedReducers);

export default store;