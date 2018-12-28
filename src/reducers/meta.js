//import actions
import { GET_META, SET_META } from '../actions/meta'

export default function meta (state = {}, action){
  switch(action.type){

    case GET_META :
      return {
        ...state,
          page: action.meta.page,
          perPage: action.meta.perPage,
          totalPages: action.meta.totalPages

      }

    default :
      return state
  }
}