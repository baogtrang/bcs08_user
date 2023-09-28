import { SET_INFO } from "../constant/user";

//rxreducer
const initialState = {
    info: null,
}

let userReducer=(state=initialState,{ type, payload }) => {
    switch (type) {
        case SET_INFO:
            state.info=payload;
            return { ...state };
        default:
            return state
    }
}

export default userReducer;