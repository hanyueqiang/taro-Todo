import { combineReducers } from 'redux'

import { ADD, DELETE } from '../contants/todo'

const INITE_STATE = {
    todos: [
        {
            id: 0,
            text: '第一条todo'
        }
    ]
}

function todos(state = INITE_STATE, action) {
    let todoNUm = state.todos.length
    switch (action.type) {
        case ADD:
            return {
                ...state,
                todos: state.todos.concat({
                    id: todoNUm,
                    text: action.data
                })
            }
        case DELETE:
            let newTodos = state.todos.filter(item => {
                return item.id != action.id
            })
            return {
                ...state,
                todos: newTodos
            }
        default: 
            return state
    }
}

export default combineReducers({
    todos
})
