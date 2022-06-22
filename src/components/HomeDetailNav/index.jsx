import React, { useEffect } from 'react'
import propTypes from 'prop-types'
import { NavLink, Navigate } from "react-router-dom";
import Swiper from "swiper";
import { Wrapper } from './style'
export default function HomeDetailNav({ id }) {
    // 页面二级路由的导航配置
    let homeNavs = [
        { id: 1, desc: '点餐', path: '/order' },
        { id: 2, desc: '评价', path: '/comment' },
        { id: 3, desc: '商家', path: '/bussiness' }
    ]
    let swiper = null

    useEffect(() => {
        if (swiper) return
        swiper = new Swiper('.navbar')
    }, [])

    return (
        <Wrapper>
            <div className="navbar swiper-container">
                <div className="nav-box swiper-wrapper">
                    {
                        homeNavs.map((item, index) => {
                            return (
                                <NavLink
                                    index={index}
                                    to={`/homedetail/${id}${item.path}`}
                                    key={item.id}
                                    className="nav-item swiper-slide">
                                    {item.desc}
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
        </Wrapper>
    )
}

HomeDetailNav.propTypes = {
    id: propTypes.string.isRequired
}