//import actions
import { GET_NUMBERS } from '../actions/numbers'

export default function numbers (state = {}, action){
  switch(action.type){

    case GET_NUMBERS :
      return {
        ...state,
        ...action.numbers
      }

    default :
      return state
  }
}