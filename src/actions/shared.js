import { getNumbers } from './numbers'
import { getMeta } from './meta'
import { showLoading, hideLoading } from 'react-redux-loading'


export function handleFetchInitialData(){
  return (dispatch) => {
    dispatch(showLoading())
    return fetch('/numbers')
      .then(response => response.json())
      .then(obj => {
        const { meta, data } = obj
        dispatch(getNumbers(data))
        dispatch(getMeta(meta))
        dispatch(hideLoading())
      })

  }
}