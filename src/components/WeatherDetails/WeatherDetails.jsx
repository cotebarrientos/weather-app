import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const WeatherDetails = ({ humidity, wind }) => {
    return (
        <>
            <Box sx={{ mt: 3, mb: 1 }}>
                <Typography sx={{ pr: 1 }}><strong>Humidity:</strong> {humidity}%</Typography>
                <Typography> <strong>Wind:</strong> {wind} km/h</Typography>
            </Box>
        </>
    )
}

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
}

export default WeatherDetails
