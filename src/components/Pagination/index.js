import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

export default function Pagination ({ totalPages, page, changePages, perPage }) {

  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="pagination">
      <ul className="pagination-list">
        {
          pageNumbers.map(num => (
            <li
              className={num == page
                ? "pagination-list-item current"
                : "pagination-list-item" }
              key={num}
              id={num}
              value={perPage}
              onClick={num == page
                ? null
                : changePages}
            >
              {num}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  changePages: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  perPage: PropTypes.string.isRequired,
}