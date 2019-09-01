import {GET_DETAIL, GET_SUCCESS} from '../actions/actionsType'


const initialState = {
    detail_order: null,
    loading: false,
}


export default function(state = initialState, action) {
    switch (action.type) {
        case GET_DETAIL:
            return {
                ...state,
                loading: true
            }
        case GET_SUCCESS:
            return {
                ...state,
                detail_order: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
