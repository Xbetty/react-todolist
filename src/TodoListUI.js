import React, {Component, Fragment} from 'react';
import ReactAnim from './ReactAnim';
// 引入antd组件
import 'antd/dist/antd.css';
import {Input, Button, List, Typography } from 'antd';
import TestProps from './TestProps';

// 容器组件
// class TodoListUI extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <div style={{marginBottom: '20px'}}>
//                     {/* label的作用是扩大点击区域 */}
//                     <label htmlFor="insertArea">输入内容：</label>
//                     <Input
//                         placeholder='todo info'
//                         style={{
//                             width: '300px',
//                             marginTop: '10px'
//                         }}
//                         id="insertArea"
//                         className="input"
//                         value={this.props.inputValue}
//                         onChange={this.props.handleInputChange}
//                         ref={input => this.input = input}
//                     />
//                     <Button type='primary' onClick={this.props.handleBtnClick} style={{marginLeft:'10px'}}>提交</Button>
//                 </div>
//                 <TestProps content={this.props.inputValue}/>
//                 <List
//                     header={<div>Header</div>}
//                     footer={<div>Footer</div>}
//                     bordered
//                     dataSource={this.props.listArr}
//                     renderItem={(item, index) => (
//                         // 涉及到this作用域的指向问题
//                         <List.Item onClick={() => {this.props.handleItemDelete(index)}}>
//                             <Typography.Text mark>[{index}]</Typography.Text> {item}
//                         </List.Item>
//                     )}
//                     />
//                 <ReactAnim/>
//             </Fragment>

//         )
//     }
// }

// 无状态组件
// 当一个普通的组件只有render函数的时候,可以直接定义为一个无状态组件
// 无状态组件相对于普通组件的优势:
// 1. 无状态组件的性能比较高,因为它就是一个函数,而ES6定义的普通组件是一个类,类生成的对象中还会有一些生命周期函数,执行的时候要执行生命周期函数和render,执行的东西远比无状态组件只执行一个render要多得多
// 2. 无状态组件一般定义ui组件时使用
const TodoListUI = (props) => {
    return (
        <Fragment>
                <div style={{marginBottom: '20px'}}>
                    {/* label的作用是扩大点击区域 */}
                    <label htmlFor="insertArea">输入内容：</label>
                    <Input
                        placeholder='todo info'
                        style={{
                            width: '300px',
                            marginTop: '10px'
                        }}
                        id="insertArea"
                        className="input"
                        value={props.inputValue}
                        onChange={props.handleInputChange}
                    />
                    <Button type='primary' onClick={props.handleBtnClick} style={{marginLeft:'10px'}}>提交</Button>
                </div>
                <TestProps content={props.inputValue}/>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={props.listArr}
                    renderItem={(item, index) => (
                        // 涉及到this作用域的指向问题
                        <List.Item onClick={() => {props.handleItemDelete(index)}}>
                            <Typography.Text mark>[{index}]</Typography.Text> {item}
                        </List.Item>
                    )}
                    />
                <ReactAnim/>
            </Fragment>
    )
}



export default TodoListUI;