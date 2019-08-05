import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import TestProps from './TestProps';
import axiox from 'axios';
import './style.css'
import ReactAnim from './ReactAnim';

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
            }), () => {
                console.log('当前列表的长度：',this.ul.querySelectorAll('div').length)
            })
        }
    }
    // 输入框
    handleInputChange(e) {
        // this.setState({
        //     inputValue: e.target.value
        // })
        // const value = e.target.value;
        // 使用ref获取input节点
        const value = this.input.value
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
    // 在组件即将被挂载到页面的时候，自动被执行
    componentWillMount(){
        console.log('componentWillMount')
    }
    // 组件被挂在到页面之后，自动被执行
    componentDidMount(){
        console.log('componentDidMount')
        axiox.get('/api/todolist')
        .then(() => console.log('success'))
        .catch(() => console.log('error'))
    }
    // componentWillReceiveProps() {
    //     console.log('componentWillReceiveProps')
    // }
    // 组件被更新之前，自动被执行
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }
    // 组件被更新之前，它会自动执行，但是它在shouldComponentUpdate()之后执行
    // 如果shouldComponentUpdate()返回true，componentWillUpdate函数才执行，否则该函数不执行
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    // 组件更新完成之后,被自动执行
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    render() {
        console.log('Parent Render')
        // console.log('list', this.state.listArr)
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
                        ref={input => this.input=input}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>

                <TestProps content={this.state.inputValue}/>
                
                <ul ref={ul => this.ul = ul}>
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
                <hr/>
                <ReactAnim/>
            </Fragment>
        )
    }
}
export default TodoList;