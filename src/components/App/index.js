import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../actions/shared'
import PropTypes from 'prop-types'

import NumbersList from '../NumbersList'
import Pagination from '../Pagination'
import PerPage from '../PerPage'

import './index.css'
class App extends Component {

  static propTypes = {
    meta: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    //numbers is initiall an object till its populated.
    numbers: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]).isRequired,

  }

  componentDidMount(){
    this.props.dispatch(fetchData({
      page: 1,
      perPage: 100
    }))
  }

  changePerPage = (event) =>{
    this.props.dispatch(fetchData({
      page: 1,
      perPage: event.target.id
    }))
  }

  changePages = (event) => {
    this.props.dispatch(fetchData({
      page: event.target.id,
      perPage: event.target.value
    }))
  }

  render() {
    const { page, perPage, totalPages } = this.props.meta
    const { numbers } = this.props

    return (
      <Fragment>
        {this.props.loading === true
          ? <p>Loading data...</p>
          : (<div className="container">
              <PerPage currentPerPage={perPage} changePerPage={this.changePerPage} />
              <NumbersList numbers={numbers} />
              <Pagination totalPages={totalPages} page={page} perPage={perPage} changePages={this.changePages} />
            </div>)
        }{console.log(this.props)}
      </Fragment>
    )
  }
}

function mapStateToProps ({ meta, numbers }){
  return{
    meta,
    numbers: numbers,
    loading: numbers[0] === undefined
  }
}
export default connect(mapStateToProps)(App)

