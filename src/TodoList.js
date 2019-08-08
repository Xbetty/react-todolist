import React, { Component, Fragment } from 'react';

// 引入antd组件
// import 'antd/dist/antd.css';
// import {Input, Button, List, Typography } from 'antd';

// 引入axios
// import axios from 'axios';

// 引入其他子组件
import TodoItem from './TodoItem';
import ReactReduxTodoList from './components/ReactRedux/'
import TodoListUI from './TodoListUI'
// import TestProps from './TestProps';
// import ReactAnim from './ReactAnim';

// 引入store
import store from './store'

// 引入actionCreator
import {getInputChangeAction, getAddItemAction, getDeleteTtemAction, getInitList} from './store/actionCreators'

// 引入样式
import './style.css'

// 引入react-redux
// Provider组件，连接store
import {Provider} from 'react-redux'
import reactReduxStore from './components/ReactRedux/store'

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
        // 将公共数据的值赋值给state
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        

        // 获取store中的公共数据
        console.log('store', store.getState())
        // 订阅store，只要store中的内容发生改变，subscribe中的函数就会自动执行
        store.subscribe(this.handleStoreChange)

    }
    // 点击提交按钮
    handleBtnClick() {
        // if(this.state.inputValue){
        //     // this.setState({
        //     //     listArr: [...this.state.listArr, this.state.inputValue],
        //     //     inputValue: ''
        //     // })
        //     this.setState((prevState) => ({
        //         listArr: [...prevState.listArr, prevState.inputValue],
        //         inputValue: ''
        //     }), () => {
        //         console.log('当前列表的长度：',this.ul.querySelectorAll('div').length)
        //     })
        // }

        // redux实现列表的新增
        // const action = {
        //     type: ADD_TODO_ITEM
        // }

        // 引入actionCreator
        const action = getAddItemAction()
        store.dispatch(action)
    }
    // 输入框
    handleInputChange(e) {
        // this.setState({
        //     inputValue: e.target.value
        // })


        // const value = e.target.value;
        // 使用ref获取input节点
        // const value = this.input.value
        // this.setState(() => ({
        //     inputValue: value
        // }))


        // 创建action，更改store中的state数据
        // const action = {
        //     // 描述做什么事情
        //     type: CHANGE_INPUT_VALUE,
        //     inputValue: e.target.value
        // }


        // 引入actionCreator
        const action = getInputChangeAction(e.target.value)
        // 调用dispatch()，把action传给store
        store.dispatch(action)
    }

    // 点击单个item
    handleItemDelete(index) {
        console.log('index', index)
        // immutable
        // state 不允许我们做任何的改变
        // const listArr = [...this.state.listArr]
        // listArr.splice(index, 1)

        // this.setState({
        //     listArr
        // })



        // this.setState((prevState) => {
        //     const listArr = [...prevState.listArr] 
        //     listArr.splice(index, 1)
        //     return { listArr }
        // })


        // redux实现删除
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     index
        // }

        // // 引入actionCreator
        const action = getDeleteTtemAction(index)
        store.dispatch(action)
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

    // store发生变化
    handleStoreChange() {
        console.log('handleStoreChange')
        // 同步store中的数据
        this.setState(store.getState())
    }

    // 在组件即将被挂载到页面的时候，自动被执行
    componentWillMount(){
        console.log('componentWillMount')
    }

    // 组件被挂在到页面之后，自动被执行
    componentDidMount(){
        console.log('componentDidMount')
        // axios.get('https://getman.cn/mock/api/todolist')
        // .then((res) => {
        //     console.log('success')
        //     const data = res.data
        //     const action = initListAction(data)
        //     store.dispatch(action)
        // })
        // .catch(() => {
        //     console.log('error')
        // })

        // 使用redux-thunk中间件进行异步处理
        // const action = getTodoList()
        // store.dispatch(action)
        // console.log('action', action)

        // 使用redux-saga中间件进行异步处理
        const action = getInitList()
        // 派发action后不仅reducer能接收到action，saga也能接收到action
        store.dispatch(action)

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
            // <Fragment>
            //     <div style={{marginBottom: '20px'}}>
            //         {/* label的作用是扩大点击区域 */}
            //         <label htmlFor="insertArea">输入内容：</label>
            //         <Input
            //             placeholder='todo info'
            //             style={{
            //                 width: '300px',
            //                 marginTop: '10px'
            //             }}
            //             id="insertArea"
            //             className="input"
            //             value={this.state.inputValue}
            //             onChange={this.handleInputChange}
            //             ref={input => this.input=input}
            //         />
            //         <Button onClick={this.handleBtnClick} style={{marginLeft:'10px'}}>提交</Button>
            //     </div>
            //     <TestProps content={this.state.inputValue}/>
            //     <List
            //         header={<div>Header</div>}
            //         footer={<div>Footer</div>}
            //         bordered
            //         dataSource={this.state.listArr}
            //         renderItem={(item, index) => (
            //             <List.Item onClick={this.handleItemDelete.bind(this, index)}>
            //             <Typography.Text mark>[{index}]</Typography.Text> {item}
            //             </List.Item>
            //         )}
            //         />
                
            //     <ul ref={ul => this.ul = ul}>
            //         {
            //             // this.state.listArr.map((item,index) => {
            //             //     return (
            //             //         <div>
            //             //             <TodoItem
            //             //                 // 父组件向子组件传递数据
            //             //                 content={item} 
            //             //                 index={index}
            //             //                 // 子组件修改父组件的数据
            //             //                 deleteItem={this.handleItemDelete}
            //             //             />
            //             //         </div>
            //             //     )
            //             // })
            //             this.getTodoItem()
            //         }
            //     </ul>
            //     <ReactAnim/>
            // </Fragment>

            // 拆分ui组件,ui组件为傻瓜组件,容器组件为聪明组件
            // ui组件负责页面的渲染,容器组件负责逻辑
            <Fragment>
                <TodoListUI 
                    inputValue={this.state.inputValue}
                    listArr = {this.state.listArr}
                    handleInputChange = {this.handleInputChange}
                    handleBtnClick = {this.handleBtnClick}
                    handleItemDelete = {this.handleItemDelete}
                />

                <hr/>



                <h2>react-redux</h2>
                <Provider store={reactReduxStore}>
                    <ReactReduxTodoList/>
                </Provider>
            </Fragment>
        )
    }
}
export default TodoList;