import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'

const cities = [
    {city:"Dublin", country:" Ireland", countryCode:"IE"},
    {city:"Buenos Aires", country:" Argentina", countryCode:"AR"},
    {city:"Santiago de Chile", country:" Chile", countryCode:"CL"},
    {city:"Madrid", country:" Spain", countryCode:"ES"},
]

const MainPage = () => {
    const history= useHistory()

    const onClickHandler = (city,  countryCode) => {
        console.log("city", city)
        console.log("countryCode", countryCode)
        // history.push permite alterar la URL por programación
        history.push(`/city/${countryCode}/${city}`)
    }

    return (
        <AppFrame>
            <Paper elevation={3}>
            <CityList 
                cities={cities}
                onClickCity={onClickHandler}/>
            </Paper>
        </AppFrame>
    )
}

export default MainPage
