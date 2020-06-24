import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
} from './userTypes'
import axios from 'axios'

export const fetchUsersRequest = () => {
    return {
      type: FETCH_USERS_REQUEST
    }
  }
  
  export const fetchUsersSuccess = users => {
    return {
      type: FETCH_USERS_SUCCESS,
      payload: users
    }
  }
  
  export const fetchUsersFailure = error => {
    return {
      type: FETCH_USERS_FAILURE,
      payload: error
    }
  }

//a special action creator does not return an action
//it returns another function by using dispatch method as an argument
//it does not to be pure and is allowed to have side effects such as asyn api calls
export const fetchUsers =() =>{
    return (dispatch) =>{
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            const users = response.data
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error =>{
            dispatch(fetchUsersFailure(error.message))
        })
    }
}
