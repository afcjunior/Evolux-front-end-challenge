import React from 'react'
import './index.css'


export default function Pagination (props) {
  const { page, perPage, totalPages } = props.pages
    return (
      <div className="pagination">
        <p>{totalPages}</p>
      </div>
    )
  }
