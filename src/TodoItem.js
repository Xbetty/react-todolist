import React, {Component} from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    // 一个组件要从父组件接收参数
    // 只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
    // 如果这个组件第一次存在于父组件中，不会执行
    // 如果这个组件之前已经存在于父组件中,才会执行
    componentWillReceiveProps() {
        console.log('child componentWillReceiveProps')
    }
    // 当此组件即将被从页面中剔除
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    handleClick() {
        const { deleteItem, index } = this.props;
        // 子组件通过调用父组件的方法更改父组件的数据
        deleteItem(index);
    }
    shouldComponentUpdate(nextProps, nextState) {
        // 当input框内输入的值发生改变,组件才重新渲染
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
    }
    render() {
        console.log('Child Render')
        const { content, testPropTypes } = this.props;
        // JSX -> JS对象 -> 真实的DOM
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