//import actions
import { GET_META } from '../actions/meta'

export default function meta (state = {}, action){
  switch(action.type){

    case GET_META :
      return {
        ...state,
        ...action.meta
      }

    default :
      return state
  }
}