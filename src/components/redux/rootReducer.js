import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import oliveReducer from './olive/oliveReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream : iceCreamReducer,
    olive : oliveReducer
})

export default rootReducer