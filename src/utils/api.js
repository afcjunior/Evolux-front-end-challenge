export default function requestData(page = 1, perPage = 100){
  let url = `/numbers?page=${page}&perPage=${perPage}`
  return fetch(url)
    .then(response => response.json())
    .then(obj => obj)
}