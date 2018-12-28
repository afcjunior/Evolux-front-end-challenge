//import actions
import { GET_DATA } from '../actions/shared'

export default function numbers (state = {}, action){
  switch(action.type){

    case GET_DATA :
      return action.metadata.data.map(num => ({
        number: num.number,
        cost: num.cost
      }))

    default :
      return state
  }
}