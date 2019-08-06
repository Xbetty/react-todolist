
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

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
