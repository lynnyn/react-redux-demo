import {
    SAVE_USER_TO_SERVER,
    SAVE_USER_TO_SERVER_SUCCESS,
    SAVE_USER_TO_SERVER_FALIURE
} from './postTypes'
import axios from 'axios'
import { isCompositeComponent } from 'react-dom/test-utils'

export const saveUserRequest = (user) =>{
      console.log(user)
    return{
      type: SAVE_USER_TO_SERVER,
      payload: {user}
    }
  }

  export const saveUsersSuccess = user => {
    return {
      type: SAVE_USER_TO_SERVER_SUCCESS,
      payload: user
    }
  }
  
  export const saveUsersFailure = error => {
    return {
      type: SAVE_USER_TO_SERVER_FALIURE,
      payload: error
    }
  }

  export const postUser = (dispatch,user) => 
    {
        dispatch(saveUserRequest(user))
        axios.post('https://jsonplaceholder.typicode.com/users', user)
        .then(response =>{
            dispatch(saveUsersSuccess(response))
        })
        .catch(error =>{
            dispatch(saveUsersFailure(error.message))
        })
    }
  
