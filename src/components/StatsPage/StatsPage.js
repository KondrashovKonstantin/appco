import React from 'react'
import './StatsPage.sass'
import { Link, NavLink } from 'react-router-dom'
import Paginator from './Paginator/Paginator'

const StatsPage = (props) => {

    let getPage = (current) => {
        props.changeCurrentPage(current)
        props.getPage(current)
    }
    let tableArr = props.users.map((current, index) =>
        <Link className='user-link' to={`/charts/${current.id}`}>
            <div className={`stats-table-row${index % 2 === 0 ? '_even' : ''}`}>
                <div className='stats-table-row__item'>{current.id}</div>
                <div className='stats-table-row__item'>{current.first_name}</div>
                <div className='stats-table-row__item'>{current.last_name}</div>
                <div className='stats-table-row__item'>{current.email}</div>
                <div className='stats-table-row__item'>{current.gender}</div>
                <div className='stats-table-row__item'>{current.ip_address}</div>
                <div className='stats-table-row__item'>{current.stats.clicks}</div>
                <div className='stats-table-row__item'>{current.stats.views}</div>
            </div>
        </Link>
    )
    let paginatorProps = {
        onPageChange: getPage,
        currentPage: props.currentPage,
        changeCurrentPage: props.changeCurrentPage,
        totalPages: props.totalPages
    }
    return (
        <div className='stats-page-wrapper'>
            <div style={{ marginBottom: '80px' }}>
                <div className='breadcrumbs'>
                    <NavLink to='/'className='breadcrumbs__item'> Main Page </NavLink>  
                    <i className='pi pi-chevron-right breadcrumbs__item'></i>
                    <span className='breadcrumbs__item_active' > User statistic</span>
                </div>
                <div className='stats-title'>User statistic</div>
                <Paginator {...paginatorProps} />
                <div className='table-wrapper'>
                    <div className='stats-table'>
                        <div className='stats-table-header'>
                            <div className='stats-table-header__item'>Id</div>
                            <div className='stats-table-header__item'>First Name</div>
                            <div className='stats-table-header__item'>Last Name</div>
                            <div className='stats-table-header__item'>Email</div>
                            <div className='stats-table-header__item'>Gender</div>
                            <div className='stats-table-header__item'>IP address</div>
                            <div className='stats-table-header__item'>Total clicks</div>
                            <div className='stats-table-header__item'>Total page views</div>
                        </div>
                        {props.isFetching ?
                            <div className='preloader' ><i className="pi pi-spin pi-spinner" ></i></div> :
                            <div>{tableArr}
                            </div>
                        }
                    </div>
                </div>
                {!props.isFetching ? <Paginator {...paginatorProps} /> : null}
            </div>
        </div>
    )
}

export default StatsPage