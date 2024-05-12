import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem Ipsum is simply dummy text of thr printing and typesetting industry. Lorem Ipsumhas been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and srambled it to make a type specimen book. </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            
        </div>
        <div className="footer-content-right">

        </div>
        
      </div>
    </div>
  )
}

export default Footer
