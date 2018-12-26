import React from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader/root'
// import { BrowserRouter as Router, Route} from 'react-router-dom'
 import { connect } from 'react-redux'
// import Component from '../Component'

class App extends React.Component {
  componentDidMount(){

  }

  render() {
    return <div>Hello lol</div>;
  }
}

function mapStateToProps (){
  return{
   smt: null
  }
}
export default connect(mapStateToProps)(hot(App))