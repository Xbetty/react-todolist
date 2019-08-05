import React, {Component, Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
class ReactAnim extends Component{
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            list: []
        }
        this.handleToggle = this.handleToggle.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleToggle() {
        console.log('handleToggle')
        this.setState({
            show: this.state.show ? false : true
        })
    }
    handleClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, 'item']
        }))
    }
    render() {
        return (
            <Fragment>
                {/* css动画实现 */}
                {/* <div className={this.state.show ? 'show' : 'hide'}>Hello!</div>
                <button onClick={this.handleToggle}>toggle</button> */}
                {/* react-transition-group实现 */}
                <CSSTransition
                    // 入场状态
                    in={this.state.show}
                    // 动画时间
                    timeout={1000}
                    // 前缀
                    classNames="fade"
                    // 节点不显示的时候不占用空间
                    unmountOnExit
                    // el是下面的div节点
                    onEntered={el => el.style.color='red'}
                    // 首次显示也要动画效果
                    appear={true}
                >
                    <div>Hello~</div>
                </CSSTransition>
                <button onClick={this.handleToggle}>toggle</button>
                <hr/>
                <button onClick={this.handleClick}>新增</button>
                {/* 多个元素组件的动画切换效果 */}
                <TransitionGroup>
                    {this.state.list.map((item, index) => {
                        return (
                            <CSSTransition
                            // 入场状态
                            in={this.state.show}
                            // 动画时间
                            timeout={1000}
                            // 前缀
                            classNames="fade"
                            // 节点不显示的时候不占用空间
                            unmountOnExit
                            // el是下面的div节点
                            onEntered={el => el.style.color='red'}
                            // 首次显示也要动画效果
                            appear={true}
                            key={index}
                        >
                            <div>{item}</div>
                        </CSSTransition>
                        )
                    })}
                </TransitionGroup>
            </Fragment>
        )
    }
}
export default ReactAnim;