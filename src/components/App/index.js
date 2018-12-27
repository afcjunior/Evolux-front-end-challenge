import React, { Component, Fragment } from 'react'
import ReactDOM from "react-dom";
// import Component from '../Component'
import { connect } from 'react-redux'
import { handleFetchInitialData } from '../../actions/shared'
import LoadingBar from 'react-redux-loading'
import NumbersList from '../NumbersList'
import Pagination from '../Pagination'
import PerPage from '../PerPage'

import './index.css'

class App extends Component {

  componentWillMount(){
    this.props.dispatch(handleFetchInitialData())
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let pagey = {
      page: 1,
      perPage:20
    }
    this.props.dispatch(handleUpdateData(pagey))
  }

  render() {
    // let {page, perPage, totalPages } = this.props.meta

    return (
      <Fragment>
        <LoadingBar/>
        {this.props.loading === true
          ? null
          : <div className="container">
              <PerPage/>
              <NumbersList numbers={this.props.numbers} />
              <Pagination/>
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

