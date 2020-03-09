import React from 'react'
import './HomePage.sass'
import HomePageHeader from './Header/HomePageHeader'
import Content from './Content/Content'

const HomePage = () => {
    return (
        <div className='home-page-wrapper'>
            <HomePageHeader/>
            <Content/>
        </div>
    )
}

export default HomePage