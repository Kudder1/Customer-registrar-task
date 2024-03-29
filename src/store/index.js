import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

const enhancer = applyMiddleware(thunk)
const store = createStore(rootReducer, enhancer)

export default store