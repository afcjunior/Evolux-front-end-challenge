import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index' //our root reducer
import middleware from './middleware/index' //our root middleware

const store = createStore(reducer, middleware)
const mountNode = document.getElementById("app");

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,mountNode);