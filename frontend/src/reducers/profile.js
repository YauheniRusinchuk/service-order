import {
  PROFILE_LOADED,
  DELETE_ORDER,
} from "../actions/actionsType";


const initialState = {
  profile: []
};



export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADED:
      return {
        ...state,
        profile: action.payload
      };
      case DELETE_ORDER:
        return {
          ...state,
          profile: state.profile.filter(order => order.id !== action.payload)
        };
     default:
      return state;
  }
}
