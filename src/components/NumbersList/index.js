import React from 'react'
import './index.css'

function formatPhoneNumber(phoneNumberString) {
  let cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  let match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/)
  if (match) {
    return match[1] + ' ' + match[2] + ' ' + match[3]
  }
  return null
}

export default function NumbersList ({ numbers }) {

    return (
      <div className="number-list">
        <div className="header">
          <div className="header-cell"> Number </div>
          <div className="header-cell"> Price </div>
        </div>
        <ul className="table-list">
            {
              numbers.map(({ number, cost }) => (
                <li key={number} className="table-list-item">
                  <div className="cell"> {formatPhoneNumber(number)} </div>
                  <div className="cell"> ${cost} </div>
                </li>
              ))
            }
        </ul>
      </div>
    )
  }
