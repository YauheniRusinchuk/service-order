import {tokenConfig} from './auth'
import axios from 'axios'
import {PROFILE_LOADED} from './actionsType'

export const loadProfile = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/profile/api/v1/orders/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: PROFILE_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
        console.log("ERRROR", err.response.status)
    });
};
