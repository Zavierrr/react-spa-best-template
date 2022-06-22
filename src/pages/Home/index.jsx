import React, { useState, useEffect } from 'react'
import CitySelect from './citySelect'
import { useSearchParams } from 'react-router-dom'
import { getBanners } from '@/api/request'
import Banners from './Banners'
import Setmeal from './Setmeal'
import StoreList from './StoreList'
import StoreInfo from './StoreInfo'
import { getRestaurants } from '@/api/request'


export default function Home() {
    const [restaurants, setRestaurants] = useState([])
    const [search] = useSearchParams()
    const cityName = search.get('name') || ''
    const [banners, setBanners] = useState([])

    useEffect(() => {
        (async () => {
            let { data: BannerData } = await getBanners()
            let { data: resData } = await getRestaurants()
            setBanners(BannerData)
            setRestaurants(resData)
        })()
    })

    return (
        <div>
            <CitySelect cityName={cityName} />
            {/* banner业务（广告） */}
            <Banners banners={banners} />
            {/* 单纯切页面展示页面，不展示功能 */}
            <Setmeal />
            <StoreList />
            <StoreInfo restaurants={restaurants} />
        </div>
    )
}
