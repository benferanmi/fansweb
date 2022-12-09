import React from 'react'
import Backtotop from '../Component/Backtotop'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import '../css/privacy.css'

const Privacy = () => {
  return (
    <>
    <Header />
    <div className='privacy'>

        <div className='privacy-head'>
            <i><svg viewBox="64 64 896 896" focusable="false" data-icon="read" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 00324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3 6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39zm563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5 48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888v488zM396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm223.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5zM396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm416 0H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5z"></path></svg></i>
            <h2>Privacy Policy</h2>
        </div>

        <div className='section-one'>
            <p className='section-one-head'>Privacy Policy for islandxfans</p>
            <p>At islandxfans, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by porngames.porn and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in islandxfans. This policy is not applicable to any information collected offline or via channels other than this website. </p>
        </div>

        <div className='section-one'>
            <p className='section-one-head'>Consent</p>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms. </p>
        </div>

        <div className='section-one'>
            <p className='section-one-head'>Information we collect</p>
            <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
        </div>

        <div className='section-one'>
            <p className='section-one-head'>How we use your information</p>
            <p>We use the information we collect in various ways, including to:</p>
            <p> {'>'}  Provide, operate, and maintain our webste</p>
            <p> {'>'} Improve, personalize, and expand our webste </p>
            <p>{'>'} Understand and analyze how you use our webste </p>
            <p>{'>'} Develop new products, services, features, and functionality</p>
            <p>{'>'} Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes</p>
            <p>{'>'}  Send you emails </p>
            <p>{'>'} Find and prevent fraud</p>
        </div>
    </div>
    <Backtotop />
    <Footer/>
    </>
    
  )
}

export default Privacy