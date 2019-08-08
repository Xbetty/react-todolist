
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'
import axiox from 'axios'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    inputValue: value
});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});

export const getDeleteTtemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})
// 加入了react-thunk中间件之后,可以返回一个函数
export const getTodoList = () => {
    // 返回的函数自动接收dispatch方法
    console.log('getTodoList')
    return (dispatch) => {
        axiox.get('https://getman.cn/mock/api/todolist')
        .then((res) => {
            console.log('success')
            const data = res.data
            console.log('data', data)
            const action = initListAction(data)
            dispatch(action)
        })
        .catch(() => {
            console.log('error')
        })
    }
}