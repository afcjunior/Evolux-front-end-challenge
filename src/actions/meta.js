export const SET_META = 'SET_META'
export const GET_META = 'GET_META'

export const CHANGE_PER_PAGE = 'CHANGE_PER_PAGE'
export const CURRENT_PAGE = 'CURRENT_PAGE'

export function setMeta (meta){
  return {
    type: SET_META,
    meta
  }
}

export function getMeta (meta){
  return{
    type: CURRENT_PAGE,
    meta
  }
}





