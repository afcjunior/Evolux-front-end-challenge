import React, { Component, Fragment } from 'react'
import ReactDOM from "react-dom";
// import Component from '../Component'
import { connect } from 'react-redux'
import { fetchData } from '../../actions/shared'
import { changePerPage } from '../../actions/meta'
import LoadingBar from 'react-redux-loading'
import NumbersList from '../NumbersList'
import Pagination from '../Pagination'
import PerPage from '../PerPage'

import './index.css'

// TO DO
// - MAKE PAGINATION WORK
// - DISABLE ALL BUTTONS WHEN THEY'RE ACTIVE, SO YOU CANT SPAM CLICK.
// - TRY TO FIND A BETTER WAY TO USE REDUX, especially pagination... theres gotta be a smarter way
// - REVIEW ALL FILES SO THEY MAKE SENSE
// - SEND AND PRAY
class App extends Component {

  componentDidMount(){
    const meta = {
      page: 1,
      perPage: 100
    }
    this.props.dispatch(fetchData(meta))
  }

  //pretty sure there are better ways but its where I am atm
  perPageA = () => {
    this.props.dispatch(fetchData({ perPage: 100}))
  }
  perPageB = () => {
    this.props.dispatch(fetchData({ perPage: 500}))
  }
  perPageC = () => {
    this.props.dispatch(fetchData({ perPage: 1000}))
  }

  render() {
    const { page, perPage, totalPages } = this.props.meta
    const { numbers } = this.props

    const indexOfLastNumber = page * perPage
    const indexOfFirstNumber = indexOfLastNumber - perPage
    const currentNumbers = numbers.slice(indexOfFirstNumber, indexOfLastNumber)

    return (
      <Fragment>
        <LoadingBar/>
        {this.props.loading === true
          ? null
          : <div className="container">
              <PerPage currentPerPage={perPage} perPageA={this.perPageA} perPageB={this.perPageB} perPageC={this.perPageC}/>
              <NumbersList numbers={currentNumbers} />
              <Pagination totalPages={totalPages} page={page} />
              {console.log(page)}
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

