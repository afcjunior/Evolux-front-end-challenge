import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index' //our root reducer
import middleware from './middleware/index' //our root middleware
import App from './components/App'

const store = createStore(reducer, middleware)
const mountNode = document.getElementById("app");

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, mountNode);