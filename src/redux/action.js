import { SET_VALUE, GET_PLUS } from "./type";

export const setValue = (dispatch, value) => {
    const action = { type: SET_VALUE, payload: value }
    dispatch(action);
}
export const addTask = (dispatch, value) => {
    const action = { type: GET_PLUS, payload: value }
    dispatch(action)
}