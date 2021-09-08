
import initialState from "./initialState";
import { SET_VALUE, GET_PLUS } from "./type";

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_VALUE:
            return {
                ...state,
                value: [action.payload]
            };

        case GET_PLUS:
            return {
                ...state,
                value: "",
                tasks: [...state.tasks, { title: action.payload }]
            };
    }
}

export default reducer;