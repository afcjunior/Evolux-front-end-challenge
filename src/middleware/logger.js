//action and state console logger

//currying
const logger = (store) => (next) => (action) => {
  console.group(action.type)
    console.log('The Action: ', action)
    const returnValue = next(action) //next is like dispatch() here
    console.log ('The new State: ', store.getState())
  console.groupEnd

  return returnValue
}

export default logger