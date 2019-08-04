import React from 'react';

class TestProps extends React.Component {
    // 当父组件的render函数被运行时，它的子组件的render都将被重新运行一次
    render() {
        // console.log('testProps');
        return <div>{this.props.content}</div>
    }
}
export default TestProps;