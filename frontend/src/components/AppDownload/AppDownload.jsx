import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/frontend_assets/assets'
const AppDownload = () => {
  return (
    <div>
      <div className="app-download" id="app-download">
        <p>For Better Experience Download<br/>EatNow App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt=""></img>
            <img src={assets.app_store} alt=""></img>
        </div>
      </div>
    </div>
  )
}


export default AppDownload
