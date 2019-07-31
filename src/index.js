// 编译jsx语法
import React from 'react';
// 将组件生成的内容挂载到页面的某个节点下
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

ReactDOM.render(<TodoList />, document.getElementById('root'));