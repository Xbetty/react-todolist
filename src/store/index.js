import { createStore } from 'redux';
import reducer from './reducer';
// 创建图书管理员store的同时要创建一个笔记本reducer
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;