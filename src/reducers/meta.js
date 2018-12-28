//import actions
import { GET_DATA } from '../actions/shared'

export default function meta (state = {}, action){
  switch(action.type){

    case GET_DATA :
      return {
        ...state,
        page: action.metadata.meta.page,
        perPage: action.metadata.meta.perPage,
        totalPages: action.metadata.meta.totalPages
      }

    default :
      return state
  }
}