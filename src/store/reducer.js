// 笔记本的默认数据
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'
const defaultState = {
    inputValue: '',
    listArr: []
}
// reducer返回的必须是一个函数，函数里面接收两个参数，reducer负责管理整个应用中的数据
// reducer可以接收state，但是绝不能修改state
export default (state = defaultState, action) => {
    console.log('state', state)
    console.log('action', action)
    if (action.type === CHANGE_INPUT_VALUE) {
        // 对state作深拷贝
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.inputValue
        return newState
    }
    // 新增
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.listArr.push(newState.inputValue)
        newState.inputValue=''
        console.log('newState', newState)
        return newState
    }
    // 删除
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.listArr.splice(action.index, 1)
        return newState
    }
    return state
}