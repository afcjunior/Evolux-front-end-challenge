import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

export default function PerPage ({ changePerPage, currentPerPage }) {
    const threshold = [100, 500, 1000]
    return (
      <div className="perPage">
      <ul className="perPage-list">
        <li className="perPage-list-header">Per Page: </li>
        {
          threshold.map(thresholds => (
            <li
              className={thresholds == currentPerPage
                ? "perPage-list-item current"
                : "perPage-list-item" }
              key={thresholds}
              id={thresholds}
              value={currentPerPage}
              onClick={thresholds == currentPerPage
                ? null
                : changePerPage}
            >
              {thresholds == 1000
               ? "ALL"
               : thresholds}
            </li>
          ))
        }
      </ul>
    </div>
    )
  }

  PerPage.propTypes = {
    changePerPage: PropTypes.func.isRequired,
    currentPerPage: PropTypes.string.isRequired,
  }