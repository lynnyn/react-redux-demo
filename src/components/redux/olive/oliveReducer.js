import {BUY_OLIVE } from './oliveTypes'

const initialState = {
    numOfOlives : 20
}

const oliveReducer = (state = initialState, action)=>{
    switch(action.type){
        case BUY_OLIVE : return{
            ...state,
            numOfOlives : state.numOfOlives - 1
        }

        default : return state
    }

}

export default oliveReducer
