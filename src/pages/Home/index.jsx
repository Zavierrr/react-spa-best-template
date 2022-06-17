import React, { useState, useEffect } from 'react'
import CitySelect from './citySelect'
import { useSearchParams } from 'react-router-dom'
import { getBanners } from '../../api/request'
import Banners from './Banners'


export default function Home() {
    const [search] = useSearchParams()
    const cityName = search.get('name') || ''
    const [banners, setBanners] = useState([])

    useEffect(() => {
        (async () => {
            let { data } = await getBanners()
            setBanners(data)
        })()

    })

    return (
        <div>
            <CitySelect cityName={cityName} />
            {/* banner业务（广告） */}
            <Banners banners={banners} />
        </div>
    )
}
