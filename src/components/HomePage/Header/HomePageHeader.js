import React from 'react'
import './HomePageHeader.sass'
import { NavLink } from 'react-router-dom'

const HomePageHeader = () => {
    return (
            <div className='home-page-header' >
                <div className='home-page-header__title'>AppCo</div>
                <div className='home-page-info'>
                    <div className='home-page-info__text'>
                        <span className='home-page-info__text_bold'>Brainstorming</span>
                        <span className='home-page-info__text_thin'> for <br/>desired perfect usability</span>
                        <div className='home-page-info__text_small'>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</div>
                        <NavLink to='/stats'><button className='home-page-info__button button_white button' >View Stats</button></NavLink>
                    </div>
                    
                    <div className='home-page-info__iphonex'>
                    </div>
                </div>
            </div>
    )
}

export default HomePageHeader