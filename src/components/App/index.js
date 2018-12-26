import React from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader/root'
// import { BrowserRouter as Router, Route} from 'react-router-dom'
// import Component from '../Component'
 import { connect } from 'react-redux'

const page = 1, perPage = 3
const url = `/numbers?page=${page}&perPage=${perPage}`
class App extends React.Component {
  componentDidMount(){
    console.log('---- APP componentdidMount')
    fetch(url)
      .then(response => {

        console.log('does this work? ', response.json())
      })

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