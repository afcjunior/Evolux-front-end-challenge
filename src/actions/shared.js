import { getNumbers } from './numbers'
import { getMeta } from './meta'
import { showLoading, hideLoading } from 'react-redux-loading'

export function fetchData({page = 1, perPage = 100}){
  return (dispatch) => {
    dispatch(showLoading())
    let url = `/numbers?page=${page}&perPage=${perPage}`
    return fetch(url)
      .then(response => response.json())
      .then(obj => {
        const { meta, data } = obj
        dispatch(getNumbers(data))
        dispatch(getMeta(meta))
        dispatch(hideLoading())
      })

  }
}