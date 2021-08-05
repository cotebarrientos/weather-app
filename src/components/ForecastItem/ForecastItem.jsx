import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { WiCloud,
    WiDayCloudy,
    WiDayFog,
    WiDaySunny,
    WiRain } from 'react-icons/wi'
import { IconContext } from 'react-icons'

const validValues = [
    'cloud',
    'cloudy',
    'fog',
    'sunny',
    'rain'
]

const stateByName = {
    cloud: WiCloud,
    Cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain,
}

const renderState = state => {
    const Icon = stateByName[state]

    return <Icon />
}

const ForecastItem = ({ weekday, hour, state, temperature}) => {
    return (
        <Grid container
            direction='column'
            justifyContent='center'
            alignItems='center'>
                <Grid item>
                    <Typography>{ weekday }</Typography>
                </Grid>
                <Grid item>
                    <Typography>{ hour }</Typography>
                </Grid>
                <Grid item>
                    <IconContext.Provider value={{ size:'5em' }}>
                        { renderState(state) }
                    </IconContext.Provider>
                </Grid>
                <Grid item>
                <Typography>{ temperature } °</Typography>
                </Grid>
        </Grid>
    )
}

ForecastItem.propTypes = {
    weekday: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired,

}

export default ForecastItem
