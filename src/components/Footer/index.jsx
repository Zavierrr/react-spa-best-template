import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'

export default function Footer(props) {
    const { pathname } = useLocation()
    return (
        <FooterWrapper>
            <Link to="/home">
                <i className="fa fa-home"></i>
                <span>首页</span>
            </Link>
            <Link to="/find">
                <i className="fa fa-postcast"></i>
                <span>发现</span>
            </Link>
            <Link to="/order">
                <i className="fa fa-book"></i>
                <span>订单</span>
            </Link>
            <Link to="/find">
                <i className="fa fa-user"></i>
                <span>我的</span>
            </Link>
        </FooterWrapper>
    )
}
