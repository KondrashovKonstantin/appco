import React from 'react';
import './Charts.sass';
import { NavLink } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar } from 'primereact/calendar';


const ChartsPage = (props) => {
    let getRangeArr = (startDate, endDate) => {
        let range = []
        if (!endDate) {
            endDate = startDate
        }
        for (let i = Date.parse(startDate); i <= Date.parse(endDate); i = i + 24 * 60 * 60 * 1000) {
            range[((Date.parse(endDate) - i) / (24 * 60 * 60 * 1000))] = new Date(i)
        }
        return range.reverse()
    }

    let getData = () => {
        let resultDate = getRangeArr(props.dateArray[0], props.dateArray[1]).map((current) => {
            var clicks, views

            for (let i = 0; i < props.usersStatistic.length; i++) {
                let a = new Date(props.usersStatistic[i].date)
                let b = new Date(current)
                a.setHours(0,0,0,0)
                b.setHours(0,0,0,0)
                a = Date.parse(a)
                b = Date.parse(b)
                if (a === b) {
                    clicks = props.usersStatistic[i].clicks
                    views = props.usersStatistic[i].page_views
                    break
                }
                else {
                    clicks = 0;
                    views = 0
                }
            }
            return ({ date: new Date(current).toLocaleDateString(), clicks: clicks, views: views })
        })
        return resultDate;
    }
    return (
        <div className="charts-page-wrapper">
            <div className='content-holder'>
                <div className='breadcrumbs'>
                    <NavLink to='/home' className='breadcrumbs__item'>Main Page </NavLink>
                    <i className='pi pi-chevron-right breadcrumbs__item'></i>
                    <NavLink to='/stats' className='breadcrumbs__item' > User statistic </NavLink>
                    <i className='pi pi-chevron-right breadcrumbs__item'></i>
                    <span className='breadcrumbs__item_active'>{props.userName}</span>
                </div>
                <div className='user-title'>
                    <h1>{props.userName}</h1>
                </div>
                <div className='calendar'>
                    <div className='calendar__label'><span >Select time period:</span></div>
                    <Calendar
                        style={{width: '0.5em'}}
                        value={props.dateArray}
                        onChange={(e) => props.calendarChange(e.value)}
                        placeholder='Select date'
                        selectionMode="range"
                        dateFormat='dd/mm/yy'
                        readOnlyInput={true} ></Calendar>
                </div>
                <div className='charts-holder'>
                {getData().length !== 0 ? <>
                <div className='chart'>
                        <div className='chart__title'><h4>Views</h4></div>
                        <div className='chart__info'>
                            <ResponsiveContainer  width={'100%'} height={250}>
                                <LineChart  data={getData()}>
                                    <CartesianGrid stroke='#ccc' vertical={false} />
                                    <Line dot={false} type='monotone' strokeWidth='4' dataKey='views' stroke='#3A80BA' />
                                    <Tooltip />
                                    <XAxis tick={{fontSize: '12px'}} axisLine={false} tickLine={false} tickMargin={13} minTickGap={15} dataKey='date' />
                                    <YAxis tick={{fontSize: '12px'}} axisLine={false} tickLine={false} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div> 
                    </div>
                    <div className='chart'>
                        <div className='chart__title'><h4>Clicks</h4></div>
                        <div className='chart__info'>
                            <ResponsiveContainer height={250}>
                                <LineChart data={getData()}>
                                    <CartesianGrid stroke='#ccc' vertical={false} />
                                    <Line dot={false} type='monotone' strokeWidth='4' dataKey='clicks' stroke='#3A80BA' />
                                    <Tooltip />
                                    <XAxis tick={{fontSize: '12px'}} axisLine={false} tickLine={false} tickMargin={13} minTickGap={15} dataKey='date' />
                                    <YAxis tick={{fontSize: '12px'}} axisLine={false} tickLine={false} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div></>:
                    <div>Can not visualise data for period that less than 1 day. Please edit period</div>}

                </div>
            </div>
        </div>
    );
}

export default ChartsPage;
