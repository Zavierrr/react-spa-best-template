import React, { useEffect, useState } from 'react'
import { getCities } from '../../api/request'
import { CityWrapper } from './style'
import { Link } from 'react-router-dom'

export default function Cities() {
    const [cities, setCities] = useState([])

    useEffect(() => {
        (async () => {
            let { data } = await getCities()
            setCities(data)
        })()
    })

    const renderCities = () => {
        return cities.map(item => {
            return (
                <Link
                    className="city_name"
                    to={{
                        pathname: '/home',
                        search: `name=${item.nm}`
                    }}
                    key={item.id}>
                    {item.nm}
                </Link>
            )
        })
    }

    return (
        <CityWrapper>
            {renderCities()}
        </CityWrapper>
    )
}
