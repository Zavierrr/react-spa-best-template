// 独立路由配置
import React from 'react'
import { lazy } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
// 推迟加载、运行，按需加载
// 路由切换到homedetail 后，再加载
const Order = lazy(() => import('../pages/Order'))
const Find = lazy(() => import('../pages/Find'))
const Mine = lazy(() => import('../pages/Mine'))
const HomeDetail = lazy(() => import('../pages/HomeDetail'))
const Cities = lazy(() => import('../pages/Cities'))

// 不能和Routes（react-router-dom）同名
export default function RoutesConfig() {
    return (
        <Routes>
            <Route path="/" element={<Home />}> </Route>
            <Route path="/home" element={<Home />}> </Route>
            <Route path="/find" element={<Find />}> </Route>
            <Route path="/order" element={<Order />}> </Route>
            <Route path="/mine" element={<Mine />}> </Route>
            <Route path="/cities" element={<Cities />}> </Route>
            <Route path="/homedetail" element={<HomeDetail />}> </Route>
        </Routes>
    )
}
