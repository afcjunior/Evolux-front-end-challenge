import React, { Component, Fragment } from 'react'
import ReactDOM from "react-dom";
// import Component from '../Component'
import { connect } from 'react-redux'
import { handleFetchInitialData } from '../../actions/shared'
import LoadingBar from 'react-redux-loading'
class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleFetchInitialData())
  }

  render() {
    return (
      <Fragment>
        <LoadingBar/>
        {this.props.loading === true
          ? null
          : <div className="container">
              <ul>
                {this.props.numbers.map((num) => (
                  <li key={num.number}>
                    {num.number}
                  </li>
                ))}
              </ul>
            </div>
        }
      </Fragment>

    )
  }
}

function mapStateToProps ({ meta, numbers }){
  let dirtyArray = []
  for(let key in numbers){
    dirtyArray.push(numbers[key]);
  }

  return{
    meta,
    numbers: dirtyArray,
    loading: numbers[0] === undefined
  }
}
export default connect(mapStateToProps)(App)

