import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './userTypes'

export const fetchUsersRequest = () =>{
    return{
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users =>{
    return{
        type: FETCH_USERS_SUCCESS,
        payloads : users
    }
}

export const fetchUsersFailure = error =>{
    return{
        type : FETCH_USERS_FAILURE, 
        payloads : error
    }
}
