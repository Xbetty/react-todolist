// redux-saga的api
import { takeEvery, put } from 'redux-saga/effects'

import { GET_INIT_LIST } from './actionTypes'
import {initListAction} from './actionCreators'
import axios from 'axios';

// generator函数
function* getInitList() {
    console.log('saga getInitList');
    try {
        // 获取异步操作的结果数据
        const res = yield axios.get('https://getman.cn/mock/api/todolist')
        // 将获取的结果数据派发给store
        const action = initListAction(res.data)
        yield put(action)
    } catch (error) {
        console.log('网络请求失败~')
    }
    
}
function* mySaga() {
    // 捕获到GET_INIT_LIST的action，就执行getInitList方法
    yield takeEvery(GET_INIT_LIST, getInitList)

}
export default mySaga;