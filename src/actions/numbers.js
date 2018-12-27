export const GET_NUMBERS = 'GET_NUMBERS'

export function getNumbers (numbers){
  return {
    type: GET_NUMBERS,
    numbers
  }
}
