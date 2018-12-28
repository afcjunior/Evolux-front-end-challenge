import React from 'react'
import './index.css'

export default function PerPage ({ changePerPage, currentPerPage }) {
    const threshold = [100, 500, 1000]
    return (
      <div className="perPage">
      <ul className="perPage-list">
        <li style={{marginRight: "20px"}}>Per Page: </li>
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

//   <div className="per-page">
//   <div className="items">
//     <p> Per page: </p>
//     <div className="btns">
//       <input type="submit" onClick={perPageA} value={100} />
//       <input type="submit" onClick={perPageB} value={500} />
//       <input type="submit" onClick={perPageC} value={"ALL"} />
//     </div>
//   </div>
// </div>