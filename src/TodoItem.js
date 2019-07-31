import React, {Component} from 'react';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const { deleteItem, index } = this.props;
        // 子组件通过调用父组件的方法更改父组件的数据
        deleteItem(index);
    }
    render() {
        const { content } = this.props;
        return (
            <div onClick={this.handleClick}>
                {/* 子组件接收父组件的传递数据 */}
                {content}
            </div>
        )
    }
}
export default TodoItem;