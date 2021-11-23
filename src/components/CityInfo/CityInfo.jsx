import React from 'react'
import PropTypes from 'prop-types'
import  Typography  from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const CityInfo = ({ city, country }) => {
    return (
        <div>
            <Box sx={{pl: 1}}>
                <Typography display="inline" variant="h4">{city},</Typography>
                <Typography display="inline" variant="h6"> {country}</Typography>
            </Box>
        </div>
    )
}

CityInfo.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}

export default CityInfo
