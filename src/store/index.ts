import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import GlobalReducer from './reducers/GlobalReducer';
import { saga } from './sagas'

const reducer = combineReducers({
  GlobalReducer
})

const sagaMiddleware = createSagaMiddleware();

// 通过applyMiddleware关联saga和store
const store = createStore(reducer, {}, applyMiddleware(sagaMiddleware));
console.log('store==', store)

// 执行saga
// sagaMiddleware.run(saga)

export default store;