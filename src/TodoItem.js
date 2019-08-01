import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
        const { content, testPropTypes } = this.props;
        return (
            <div onClick={this.handleClick}>
                {/* 子组件接收父组件的传递数据 */}
                {testPropTypes} : {content}
            </div>
        )
    }
}
// 接受外部传递的prop类型进行属性校验
TodoItem.propTypes = {
    // 必传值
    testPropTypes: PropTypes.string.isRequired,
    // content: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}
// 父组件未传递值给子组件，可以自己在组件中定义默认值
TodoItem.defaultProps = {
    testPropTypes: '这是一个默认值'
}
export default TodoItem;