import React from 'react'
import './index.css'





export default function Pagination ({ totalPages, page }) {

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
            >
              {num}
            </li>
          ))
        }
      </ul>
    </div>
  )
}