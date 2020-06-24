import {
    SAVE_USER_TO_SERVER,
    SAVE_USER_TO_SERVER_SUCCESS,
    SAVE_USER_TO_SERVER_FALIURE   
} from './postTypes'

const initialState = {
    user: [],
    error: ''
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_USER_TO_SERVER:
        return {
          ...state,
          user: action.payload
        }
      case SAVE_USER_TO_SERVER_SUCCESS:
        return {
          user: action.payload,
          error: ''
        }
      case SAVE_USER_TO_SERVER_FALIURE:
        return {
          error: action.payload
        }
      default: return state
    }
  }

export default postReducer