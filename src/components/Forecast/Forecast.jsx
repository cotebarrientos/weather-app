import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ForecastItem from './../ForecastItem'
import { validValues } from './../IconState'

const renderForecastItem = forecast => {
    const { weekDay, hour, state, temperature } = forecast
    // Hay que poner un identificador unico
    return (
        <Grid item key={`${weekDay}${hour}`}>
            <ForecastItem 
                hour={hour}
                weekDay={weekDay}
                state={state}
                temperature={temperature}>
            </ForecastItem>
        </Grid>
    )
}

const Forecast = ({ForecastItemList}) => {
    return (
        <Grid container
        justifyContent='center'
        alignItems='center'>
            {
               ForecastItemList.map(forecast => renderForecastItem(forecast)) 
            }
        </Grid>
    )
}

// forecastItemList es un array de ELEMENTOS    
// los elementos deben tener una 'forma' en particular
// las siguientes propiedades:
/*
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired,
*/
Forecast.propTypes = {
    ForecastItemList: PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validValues).isRequired,
        temperature: PropTypes.number.isRequired,
    }).isRequired
}

export default Forecast
