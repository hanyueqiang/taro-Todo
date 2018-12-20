import { ADD, DELETE } from '../contants/todo'

export const del = (id) => {
    return {
        id,
        type: DELETE
    }
}

export const add = (data) => {
    return {
        data,
        type: ADD
    }
}