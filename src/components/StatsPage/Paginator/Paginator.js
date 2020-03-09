import React, { useState } from 'react'
import './Paginator.sass'

let Paginator = ({ onPageChange, currentPage, changeCurrentPage, totalPages, unitSize = 5, style }) => {
    let pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }
    let unitCount = Math.ceil(totalPages / unitSize)
    let [unitNumber, setUnitNumber] = useState(1);
    let firstPageNum = (unitNumber - 1) * unitSize + 1;
    let lastPageNum = unitNumber * unitSize

    let pagesButtonsArray = pages
        .filter(current => current >= firstPageNum && current <=lastPageNum)
        .map(current => {
            return <button className={`pagination-button ${currentPage === current ? 'selected' : ''}`}
                onClick={() => onPageChange(current)}
            >{current}</button>
        })

    return (
        <div className='buttons-wrapper' style={style}>
            <button className='nav-btn' disabled={unitNumber <=1 ? true : false} onClick={()=>{setUnitNumber(unitNumber - 1)}}><i className='pi pi-chevron-left'></i></button>
            {pagesButtonsArray}
            <button className='nav-btn' disabled={unitCount <= unitNumber ? true : false} onClick={()=>{setUnitNumber(unitNumber + 1)}}><i className='pi pi-chevron-right'></i></button>
        </div>
    )


}

export default Paginator