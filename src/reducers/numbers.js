//import actions
import { GET_NUMBERS, GET_META } from '../actions/numbers'

export default function numbers (state = {}, action){
  switch(action.type){
    case GET_NUMBERS :
      return {
        ...state,
        ...action.numbers
      }

    case GET_META :
    return {
      ...state,
      ...action.meta
    }

    default :
      return state
  }
}