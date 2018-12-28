export const GET_DATA = 'GET_DATA'

export function getData(metadata){
  return{
    type: GET_DATA,
    metadata
  }
}

export function fetchData({page = 1, perPage = 100}){
  return (dispatch) => {
    let url = `/numbers?page=${page}&perPage=${perPage}`
    return fetch(url)
      .then(response => response.json())
      .then(obj => {
        dispatch(getData(obj))
      })
  }
}