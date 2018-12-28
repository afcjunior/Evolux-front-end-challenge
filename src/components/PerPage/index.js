import React from 'react'
import './index.css'

export default function PerPage ({ perPageA, perPageB, perPageC }) {

    return (
      <div className="per-page">
        <div className="items">
          <p> Per page: </p>
          <div className="btns">
            <input type="submit" onClick={perPageA} value={100} />
            <input type="submit" onClick={perPageB} value={500} />
            <input type="submit" onClick={perPageC} value={"ALL"} />
          </div>
        </div>
      </div>
    )
  }
