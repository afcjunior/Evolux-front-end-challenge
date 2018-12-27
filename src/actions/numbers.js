export const GET_NUMBERS = 'GET_NUMBERS'
export const GET_META = 'GET_META'

export function getNumbers (numbers){
  return {
    type: GET_NUMBERS,
    numbers
  }
}

export function getMeta (meta){
  return {
    type: GET_META,
    meta
  }
}

export function handleFetchInitialData(){
  return (dispatch) => {
    return fetch('/numbers')
      .then(response => response.json())
      .then(obj => {
        const { meta, data } = obj
        dispatch(getNumbers(data))
        dispatch(getMeta(meta))
      })
  }

}