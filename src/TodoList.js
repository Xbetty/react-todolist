import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import TestProps from './TestProps';
import './style.css'

class TodoList extends Component{
    constructor(props){
        super(props);
        // 组件的状态
        // 当组件的state或者props发生改变的时候，render函数就会重新执行
        this.state = {
            // 输入框的值
            inputValue: '',
            listArr: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);

    }
    // 点击提交按钮
    handleBtnClick() {
        if(this.state.inputValue){
            // this.setState({
            //     listArr: [...this.state.listArr, this.state.inputValue],
            //     inputValue: ''
            // })
            this.setState((prevState) => ({
                listArr: [...prevState.listArr, prevState.inputValue],
                inputValue: ''
            }))
        }
    }
    // 输入框
    handleInputChange(e) {
        // this.setState({
        //     inputValue: e.target.value
        // })
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
    }
    // 点击单个item
    handleItemDelete(index) {
        // immutable
        // state 不允许我们做任何的改变
        // const listArr = [...this.state.listArr]
        // listArr.splice(index, 1)

        // this.setState({
        //     listArr
        // })
        this.setState((prevState) => {
            const listArr = [...prevState.listArr] 
            listArr.splice(index, 1)
            return { listArr }
        })
    }
    // 获取TodoItem
    getTodoItem() {
        return this.state.listArr.map((item,index) => {
            return (
                <TodoItem
                    key={index}
                    // 父组件向子组件传递数据
                    content={item} 
                    index={index}
                    // 子组件修改父组件的数据
                    deleteItem={this.handleItemDelete}
                />
            )
        })
    }
    render() {
        console.log('Render')
        console.log('list', this.state.listArr)
        return(
            <Fragment>
                <div>
                    {/* label的作用是扩大点击区域 */}
                    <label htmlFor="insertArea">输入内容：</label>
                    <input
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>

                <TestProps content={this.state.inputValue}/>
                
                <ul>
                    {
                        // this.state.listArr.map((item,index) => {
                        //     return (
                        //         <div>
                        //             <TodoItem
                        //                 // 父组件向子组件传递数据
                        //                 content={item} 
                        //                 index={index}
                        //                 // 子组件修改父组件的数据
                        //                 deleteItem={this.handleItemDelete}
                        //             />
                        //         </div>
                        //     )
                        // })
                        this.getTodoItem()
                    }
                </ul>
            </Fragment>
        )
    }
}
export default TodoList;