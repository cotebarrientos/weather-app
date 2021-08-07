import React from 'react'
import { useHistory } from 'react-router-dom'
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
        <div>
            <h2>Cities List</h2>
            <CityList 
                cities={cities}
                onClickCity={onClickHandler}/>
        </div>
    )
}

export default MainPage
