import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { pageTitle } from '../../config'

export default function Header(props) {
    // const { title = "饿了么" } = props
    // let title = ''
    // 赋初值
    const { pathname = '/' } = useLocation()
    const [title, setTitle] = useState('首页')
    useEffect(() => {
        // const location = window.location.pathname;
        let _title = pageTitle[pathname] || '';
        // if (pathname == '/order') {
        //     _title = '订单'
        // } else if (pathname == '/home' || pathname == '/') {
        //     _title = '首页'
        // }
        setTitle(_title)
    })
    return (
        <header>{title}</header>
    )
}
