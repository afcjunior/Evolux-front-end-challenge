import { getNumbers } from './numbers'
import { getMeta } from './meta'
import { showLoading, hideLoading } from 'react-redux-loading'
import { requestData } from '../utils/api'

// export function handleUpdateData({ page, perPage }){
//   return (dispatch) => {
//     dispatch(showLoading())
//     let url = `/numbers?page=${page}&perPage=${perPage}`
//     return fetch(url)
//       .then(response => response.json())
//       .then(obj => {
//         const { meta, data } = obj
//         dispatch(getNumbers(data))
//         dispatch(getMeta(meta))
//         dispatch(hideLoading())
//       })

//   }
// }

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