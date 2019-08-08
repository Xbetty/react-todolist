const defaultState = {
    inputValue: 'react-redudx-reducer',
    listArr: [1,3,5]
}

export default (state = defaultState, action) => {
    if (action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.inputValue
        return newState
    }
    if (action.type === 'add_item') {
        console.log('action', action)
        const newState = JSON.parse(JSON.stringify(state))
        newState.listArr.push(newState.inputValue)
        newState.inputValue=''
        console.log('newState', newState)
        return newState
    }
    if (action.type === 'delete_item') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.listArr.splice(action.index, 1)
        return newState
    }
    return state
}