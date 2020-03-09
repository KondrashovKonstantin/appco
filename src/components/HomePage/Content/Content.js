import React from 'react'
import './Content.sass'
import pen from '../../../assets/image/pen.png'
import lock from '../../../assets/image/lock.png'
import screens from '../../../assets/image/screens.png'
import basic from '../../../assets/image/basic.png'
import standart from '../../../assets/image/standart.png'
import unlimited from '../../../assets/image/unlimited.png'

const Content = () => {
    let cardsInfo = [
        { image: pen, title: 'Clean Design', text: 'Increase sales by showing true dynamics of your website.', },
        { image: lock, title: 'Secure Data', text: 'Build your online store’s trust using Social Proof & Urgency.', },
        { image: screens, title: 'Retina Ready', text: 'Realize importance of social proof in customer’s purchase decision.', }
    ]
    let cardsArray = cardsInfo.map(current =>
        <div className='card'>
            <div className='card__image-wrapper'><img src={current.image} alt='' /></div>
            <div className='card__title'>{current.title}</div>
            <div className='card__text'>{current.text}</div>
        </div>)
    let cardsPurchaseInfo = [
        { image: basic, price:29, type: 'common', title: 'Basic', text: ['Push Notifications', 'Data Transfer', 'SQL Database', 'Search & SEO Analytics', '24/7 Phone Support' ,'2 months technical support', '2+ profitable keyword'], },
        { image: standart, price: 149, type: 'selected', title: 'Standard', text: ['Push Notifications', 'Data Transfer', 'SQL Database', 'Search & SEO Analytics', '24/7 Phone Support' ,'2 months technical support', '2+ profitable keyword'] },
        { image: unlimited, price: 39, type: 'common', title: 'Unlimited', text: ['Push Notifications', 'Data Transfer', 'SQL Database', 'Search & SEO Analytics', '24/7 Phone Support' ,'2 months technical support', '2+ profitable keyword'] }
    ]
    let cardsPurchaseArray = cardsPurchaseInfo.map(current =>
        <div className={`card-purchase card-purchase_${current.type}`}>
            <div className='card__title' style={{marginTop:'32px', marginBottom: '19px'}}>{current.title}</div>
            <div className='card__image-wrapper' style={{marginTop:0, marginBottom:'16px'}}><img src={current.image} alt='' /></div>
            <div className={`card-purchase__price card-purchase__price_${current.type}`}><span>${current.price}</span></div>
            <div style={{margin:'0 65px', borderTop: "solid 1px #E5E5E5" }}></div>
            <div className='card-purchase__text'>{current.text.map (currentText => <div>{currentText}<br/></div>)}</div>
            <button className='button button_blue'>Purchase now</button>
        </div>)
    return (
        <div className='home-content'>
            <div className='home-content__text' style={{paddingLeft: '50px'}}>
                <span className='home-content__text'>Why</span>
                <span className='home-content__text_bold'> small business owners love </span>
                <span className='home-content__text'>AppCo?</span>
            </div>
            <div className='home-content__text-sec'>
                <span>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</span>
            </div>
            <div className='cards-holder'>
                {cardsArray}
            </div>
            <div className='learn-more-block'>
                <div className='text-wrapper'>
                    <div className='text-wrapper__title'><span>Start Managing your apps business, more faster</span></div>
                    <div className='text-wrapper__text'><span>Objectively deliver professional value with diverse web-readiness.
                                                                    Collaboratively transition wireless customer service without 
                                                                <span style={{whiteSpace:'nowrap'}}> goal-oriented</span> catalysts for change. Collaboratively.</span>
                    </div>
                    <button className='text-wrapper__button button button_white'>Learn More</button>
                    <div className='learn-more-block__macbook'></div>
                </div>
            </div>
            <div className='second-info-block'>
            <div className='home-content__text second'>
                <span className='home-content__text_bold'>Afforadble Pricing and Packages </span>
                <span className='home-content__text'>choose your best one</span>
            </div>
            <div className='home-content__text-sec sec-info-text'>
                <span>Monotonectally grow strategic process improvements vis-a-vis integrated resources.</span>
            </div>
            <div className='cards-holder' style={{marginTop:'20px'}}>
                    {cardsPurchaseArray}
            </div>
            <div className='home-content__text-sec sec-info-text'>If you need custom services or Need more? <a style={{fontWeight: 'bold', color:'#3A80BA'}}>Contact us</a></div>
            </div>
            <div className='footer'>    
                <div className='contact-input'>
                    <input className='contact-input__input' placeholder='Enter your email'/>
                    <button className='contact-input__button button button_blue'>Subscribe</button>    
                </div>
                <div className='copyright'>
                    <span className='copyright__logo'>AppCo</span>
                    <span>All rights reserved by ThemeTags</span>
                    <span>Copyrights © 2019.</span>
            </div>
            </div>
        </div>
    )
}

export default Content