import React from 'react'
import CityList from './CityList'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    {city:"Dublin", country:"Ireland"},
    {city:"Buenos Aires", country:"Argentina"},
    {city:"Santiago de Chile", country:"Chile"},
    {city:"Madrid", country:"España"},
]

export const CityListExample = () => <CityList cities={cities} />