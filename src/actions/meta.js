export const GET_META = 'GET_META'

export function getMeta (meta){
  return {
    type: GET_META,
    meta
  }
}