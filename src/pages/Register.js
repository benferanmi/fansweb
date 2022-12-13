import React, { useState } from 'react'
import banner from "../image/model/twe.jpg";
import '../css/signup.css'
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const FanContent = () => {
        return (
            <div className='fan-benefits'>
            <h1>Fans Benefits</h1>
            <ul>
                <li>Subscribe for exclusive access to luscious content</li>
                <li>Have a blast on Livestreams</li>
                <li>Get up close and personal on Private Shows</li>
                <li>Once subscribed, access videos unlimited times</li>
                <li>Privately text your Favorite Stars</li>
                <li>Check out Model's Adult Toy Store</li>
            </ul>

            <button type="button" onClick={handleFanSubmit}>Fan sign up</button>
          </div>
        )
    }

    const ModelContent = () => {
        return (
            <div className='fan-benefits'>
            <h1>Model Benefits</h1>
            <ul>
            <li>Expand your fan base</li>
            <li>Get paid in subscriptions, video purchases, and product sales</li>
            <li>Jump into Livestreams with your loyal fans</li>
            <li>Receive Tips from everyone</li>
            <li>Accept/Reject Private Show requests</li>
            <li>Schedule videos for a future release</li>
            <li>Chat with your subcribers privately</li>
            <li>Get 80% commission on everything</li>
            <li>Request payouts every week</li>
            </ul>

            <button type="button" onClick={handleModelSubmit}>Model sign up</button>
          </div>
        )
    }

    const [content, setContent] = useState(<FanContent />)
    const [beneColor, setBeneColor] = useState("span-active")
    const [beneColor2, setBeneColor2] = useState()
    const navigate = useNavigate();

    
    const handleFan = () => {
        setBeneColor("span-active")
        setBeneColor2('')
        setContent(<FanContent />)
    }
    const handleModel =()=> {
        setBeneColor2("span-active")
        setBeneColor('')
        setContent(<ModelContent />)
    }

    const handleFanSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("status", "user")
        console.log("clicked")
        navigate("/fan-signup")
    }

    const handleModelSubmit = () => {
        localStorage.setItem("status", "model")
        navigate("/model-signup")

    }
  return (
    <>
    <Header />
    <div className="signup">
        <div className="signup-left">
          <img src={banner} alt="" />
        </div>

        <div className="signup-right">
            <div className='head22h'>
            <span onClick={handleFan} className={beneColor}>Fan sign up</span>
            <span onClick={handleModel} className={beneColor2}>Model sign up</span>
            </div>

                <div className='benefits'>
                    {content}
                </div>
          </div>
    </div>
    
    <Footer />
    </>
  )
}

export default Register