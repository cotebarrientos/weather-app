import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

// renderCityAndCountry se va a convertir en una función que retorna otra función
const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
    const { city, country } = cityAndCountry

    return (
        <li key={city} onClick={eventOnClickCity}>
            <Grid container
                justifyContent='center'
                alignItems='center'
            >
                <Grid item
                    md={8}
                    xs={12}>
                        <CityInfo city={city} country={country} />
                </Grid>
                <Grid item
                    md={4}
                    xs={12}>
                        <Weather temperature={10} state='sunny' />
                </Grid>
            </Grid>
        </li>
    )
}

// Cities: es un array, y en cada item tiene que tener la ciudad y el pais
const CityList = ({ cities, onClickCity }) => {
    return (
        <ul>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
            }
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
