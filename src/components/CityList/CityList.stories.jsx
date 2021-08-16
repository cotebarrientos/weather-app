import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    {city:"Dublin", country:" Ireland", countryCode:"IE"},
    {city:"Buenos Aires", country:" Argentina", countryCode:"AR"},
    {city:"Santiago de Chile", country:" Chile", countryCode:"CL"},
    {city:"Madrid", country:" Spain", countryCode:"ES"},
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action('Click on city')} />