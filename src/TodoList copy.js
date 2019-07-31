import React, { Component, Fragment } from 'react';
import './style.css'

class TodoList extends Component{
    constructor(props){
        super(props);
        // 组件的状态
        this.state = {
            // 输入框的值
            inputValue: '',
            listArr: []
        }
    }
    // 点击提交按钮
    handleBtnClick() {
        if(this.state.inputValue){
            this.setState({
                listArr: [...this.state.listArr, this.state.inputValue],
                inputValue: ''
            })
        }
    }
    // 输入框
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    // 点击单个item
    handleItemDelete(index) {
        // immutable
        // state 不允许我们做任何的改变
        const listArr = [...this.state.listArr]
        listArr.splice(index, 1)

        this.setState({
            listArr
        })
    }
    render() {
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
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {this.state.listArr.map((item,index) => (
                        <li key={index} 
                            onClick={this.handleItemDelete.bind(this, index)}
                            dangerouslySetInnerHTML={{__html: item}}
                            >
                        </li>
                    ))}
                </ul>
            </Fragment>
        )
    }
}
export default TodoList;