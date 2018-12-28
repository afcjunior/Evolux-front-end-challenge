import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../actions/shared'
import LoadingBar from 'react-redux-loading'
import NumbersList from '../NumbersList'
import Pagination from '../Pagination'
import PerPage from '../PerPage'

import './index.css'

// TO DO
// - REVIEW CSS STANDARDS AND THAT IT WORKS IN MOBILE
// - REVIEW ALL FILES SO THEY MAKE SENSE

class App extends Component {

  componentDidMount(){
    const meta = {
      page: 1,
      perPage: 100
    }
    this.props.dispatch(fetchData(meta))
  }

  changePerPage = (event) =>{
    this.props.dispatch(fetchData({
      page: 1,
      perPage: event.target.id
    }))
  }

  changePages = (event) => {
    console.log('event ====== ', event)
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
        <LoadingBar/>
        {this.props.loading === true
          ? null
          : <div className="container">
              <PerPage currentPerPage={perPage} changePerPage={this.changePerPage} />
              <NumbersList numbers={numbers} />
              <Pagination totalPages={totalPages} page={page} perPage={perPage} changePages={this.changePages} />
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

