import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'

const cities = [
    {city:"Dublin", country:" Ireland"},
    {city:"Buenos Aires", country:" Argentina"},
    {city:"Santiago de Chile", country:" Chile"},
    {city:"Madrid", country:" España"},
]

const MainPage = () => {
    const history= useHistory()

    const onClickHandler = () => {
        // history.push permite alterar la URL por programación
        history.push('/city')
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
