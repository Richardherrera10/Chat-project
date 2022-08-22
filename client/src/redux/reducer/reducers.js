import {SET_IMAGES} from '../actions/type.js'

// cada vez que envian action se cambia el objeto del store por el recibido 
const initialState = {
    images: []
}
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGES:
            return {
                ...state,
                images: action.payload
            }
        default:
            return state
    }
}