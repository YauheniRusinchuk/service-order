import {
    GET_ORDERS,
    GET_DETAIL,
    GET_SUCCESS,
    ADD_ORDER,
    DELETE_ORDER,
    UPDATE_ORDER,
} from './actionsType'
import axios from 'axios'
import {tokenConfig} from './auth'


export const updateOrder = (id, order) => (dispatch, getState) => {
    axios
      .put(`http://127.0.0.1:8000/profile/api/v1/orders/${id}/`, order, tokenConfig(getState))
      .then(res => {
        dispatch({
          type: UPDATE_ORDER,
          payload: id
        });
      })
      .catch(err => console.log(err));
}



export const deleteOrder = id => (dispatch, getState) => {
  axios
    .delete(`http://127.0.0.1:8000/profile/api/v1/orders/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_ORDER,
        payload: id
      });
    })
    .catch(err => console.log(err));
};






// GET ORDERS

export const getOrders = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/v1/order/all/')
        .then(res => {
            dispatch({
                type: GET_ORDERS,
                payload: res.data,
            })
        }).catch(err=>{
            console.log('ERROR')
        })
}

// GET DETAIL

export const getDetail = (id) => dispatch => {
        axios
            .get(`http://127.0.0.1:8000/api/v1/order/all/${id}`)
            .then(res => {
                dispatch({
                    type: GET_DETAIL
                })
                dispatch({
                    type: GET_SUCCESS,
                    payload: res.data
                })
            }).catch(err=> {
                console.log('Error');
            })
}




// ADD ORDER
export const addOrder = order => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/api/v1/order/all/", order, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ADD_ORDER,
        payload: res.data
      });
    })
    .catch(err =>
        console.log('Error', err.response)
    );
};
