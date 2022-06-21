import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import './assets/font/iconfont.css'
import './assets/styles/reset.css'
import './index.css'
import './modules/rem' // 自适应
import 'swiper/dist/css/swiper.min.css'
// 最新版本无需引入css
// import 'antd-mobile/dist/antd-mobile.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
