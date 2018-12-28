export const GET_META = 'GET_META'
export const CHANGE_PER_PAGE = 'CHANGE_PER_PAGE'

export function getMeta (meta){
  return {
    type: GET_META,
    meta
  }
}



