import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import classname from 'classname'
import { isPathPartlyExisted } from '../../utils'

export default function Footer(props) {
    const { pathname } = useLocation()
    // 属于公共函数
    // if (['/cities', '/homedatail'].indexOf(pathname) != -1) return
    if (isPathPartlyExisted(pathname)) return;
    return (
        <FooterWrapper>
            <Link to="/home" className={classname({ active: pathname == '/home' || pathname == '/' })}>
                <i className="iconfont icon-shouye"></i>
                <span>首页</span>
            </Link>
            <Link to="/find" className={classname({ active: pathname == '/find' })}>
                <i className="iconfont icon-faxian"></i>
                <span>发现</span>
            </Link>
            <Link to="/order" className={classname({ active: pathname == '/order' })}>
                <i className="iconfont icon-dingdan"></i>
                <span>订单</span>
            </Link>
            <Link to="/mine" className={classname({ active: pathname == '/mine' })}>
                <i className="iconfont icon-wode"></i>
                <span>我的</span>
            </Link>
        </FooterWrapper>
    )
}
