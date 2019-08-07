import React, {Component, Fragment} from 'react';
import ReactAnim from './ReactAnim';
// 引入antd组件
import 'antd/dist/antd.css';
import {Input, Button, List, Typography } from 'antd';
import TestProps from './TestProps';


class TodoListUI extends Component {
    render() {
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
                        value={this.props.inputValue}
                        onChange={this.props.handleInputChange}
                        ref={input => this.input = input}
                    />
                    <Button type='primary' onClick={this.props.handleBtnClick} style={{marginLeft:'10px'}}>提交</Button>
                </div>
                <TestProps content={this.props.inputValue}/>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.props.listArr}
                    renderItem={(item, index) => (
                        // 涉及到this作用域的指向问题
                        <List.Item onClick={() => {this.props.handleItemDelete(index)}}>
                            <Typography.Text mark>[{index}]</Typography.Text> {item}
                        </List.Item>
                    )}
                    />
                <ReactAnim/>
            </Fragment>

        )
    }
}
export default TodoListUI;