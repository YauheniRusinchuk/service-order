import {GET_ORDERS, ADD_ORDER, UPDATE_ORDER} from '../actions/actionsType'


const initialState = {
    orders: [],
}


export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload,
            }
        case ADD_ORDER:
            return {
                ...state,
                orders: [action.payload, ...state.orders]
          };
        case UPDATE_ORDER:
            return {
                ...state,
            }
        default:
            return state;
    }
}
