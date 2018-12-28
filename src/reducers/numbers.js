//import actions
import { GET_NUMBERS } from '../actions/numbers'

export default function numbers (state = {}, action){
  switch(action.type){

    case GET_NUMBERS :
      return action.numbers.map(num => ({
        number: num.number,
        cost: num.cost
      }))

    default :
      return state
  }
}