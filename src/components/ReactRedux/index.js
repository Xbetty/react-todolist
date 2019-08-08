import React, {Component} from 'react';
// 连接组件和store
import {connect} from 'react-redux'

class ReactReduxTodoList extends Component {
    render() {
        return(
            <div>
                <input
                    value={this.props.inputValue}
                    onChange={this.props.changeInputValue}
                />
                <button
                    onClick={this.props.handleBtnClick}
                >
                    新增
                </button>
                <ul>
                    {this.props.listArr.map((item, index) => (
                        <li key={item} onClick={() => {this.props.deleteTodoItem(index)}}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
// connect是将ReactReduxTodoList和store连接 
// 把store里面的数据映射为props
const mapStateToProps = (state) => {
    return { 
        inputValue: state.inputValue,
        listArr: state.listArr
    }
}


// store.dispatch映射到 props上
const mapDispatchToProps = (dispatch) => {
    return{
        changeInputValue(e){
            console.log('e', e.target.value)
            const action = {
                type: 'change_input_value',
                inputValue: e.target.value
            }
            dispatch(action)
        },
        handleBtnClick(){
            const action = {
                type: 'add_item'
            }
            dispatch(action)
        },
        deleteTodoItem(index) {
            console.log('index', index)
            const action = {
                type: 'delete_item',
                index
            }
            dispatch(action)
        }
    }
}


/**
 * 
> 1. connect是连接   
> 2. 谁和谁连接？ todolist和store作连接   
> 3. 怎么做连接？ 有一个映射关系，就在mapStateToProps里面
> 4. 怎么映射呢？mapStateToProps中的state指的是store里面的数据，
 * store里面的inputValue我把它映射到组件的props里面的inputValue的位置上，
 * 组件中再去使用该值的时候用this.props.inputValue
 */

//  前两个参数为 连接规则
export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxTodoList);
// ReactReduxTodoList是UI组件，只有显示的代码
// connect将UI组件和业务逻辑相结合， 返回结果实际上是一个容器组件