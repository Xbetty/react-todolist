
import { createStore, applyMiddleware, compose } from 'redux';

// 使用redux-thunk
// import thunk from 'redux-thunk';


// 使用redux-saga
import reducer from './reducer';
// 帮助创建中间件
import createSagaMiddleware from 'redux-saga';
// 引入saga文件
import todoSagas from './saga';
// 创建saga中间件
const sagaMiddleware = createSagaMiddleware();

// 创建图书管理员store的同时要创建一个笔记本reducer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  // applyMiddleware(thunk)
  applyMiddleware(sagaMiddleware)

);
const store = createStore(
    reducer,
    enhancer
    // redux调试
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 运行saga中间件
sagaMiddleware.run(todoSagas)

export default store;