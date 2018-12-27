import React from "react";
import ReactDOM from "react-dom";
//import { hot } from 'react-hot-loader/root'
// import Component from '../Component'
import { connect } from 'react-redux'
import { handleFetchInitialData } from '../../actions/numbers'

const page = 1, perPage = 100
const url = `/numbers?page=${page}&perPage=${perPage}`

class App extends React.Component {

  componentDidMount(){
    console.log('---- APP -- componentdidMount')
    this.props.dispatch(handleFetchInitialData())
  }


  render() {
    return (
      <div>
        hey there.
      </div>
    )
  }
}

function mapStateToProps (){
  return{
   smt: null
  }
}
export default connect(mapStateToProps)(App)
//export default connect(mapStateToProps)(hot(App))