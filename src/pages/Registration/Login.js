import React, { useState } from 'react'
import banner from "../../image/model/twe.jpg";
import './css/signup.css'
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const FanContent = () => {
        return (
            <div className='fan-benefits'>
            <h1>Fan Login</h1>
            <ul>
                <li>Subscribe for exclusive access to luscious content</li>
                <li>Have a blast on Livestreams</li>
                <li>Get up close and personal on Private Shows</li>
                <li>Once subscribed, access videos unlimited times</li>
                <li>Privately text your Favorite Stars</li>
                <li>Check out Model's Adult Toy Store</li>
            </ul>

            <button type="button" onClick={handleFanSubmit}>Fan Login up</button>
          </div>
        )
    }

    const ModelContent = () => {
        return (
            <div className='fan-benefits'>
            <h1>Model Login</h1>
            <ul>
            <li>Expand your fan base</li>
            <li>Get paid in subscriptions, video purchases, and product sales</li>
            <li>Jump into Livestreams with your loyal fans</li>
            <li>Schedule videos for a future release</li>
            <li>Chat with your subcribers privately</li>
            <li>Get 80% commission on everything</li>
            </ul>

            <button type="button" onClick={handleModelSubmit}>Model Login</button>
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
        // console.log("clicked")
        navigate("/fan-login")
    }

    const handleModelSubmit = () => {
        localStorage.setItem("status", "model")
        navigate("/model-login")

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
            <span onClick={handleFan} className={beneColor}>Fan Login</span>
            <span onClick={handleModel} className={beneColor2}>Model Login</span>
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

export default Login