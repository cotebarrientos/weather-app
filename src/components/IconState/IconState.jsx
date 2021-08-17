import React from 'react'
import PropTypes from 'prop-types'
import { WiDayCloudy,
    WiDaySunny,
    WiRain,
    WiSnow,
    WiRaindrop,
    WiThunderstorm,
    WiDayHaze,
    WiDayFog,
    WiFog,
    WiSmoke,
    WiDust } from 'react-icons/wi'

export const validValues = [
        "clouds",
        "clear",
        "rain",
        "snow",
        "drizzle",
        "thunderstorm",
        "haze",
        "fog",
        "mist",
        "smoke",
        "dust"
    ]

const stateByName = {
    clouds: WiDayCloudy,
    clear: WiDaySunny,
    rain: WiRain,
    snow: WiSnow,
    drizzle: WiRaindrop,
    thunderstorm: WiThunderstorm,
    haze: WiDayHaze,
    fog:WiDayFog,
    mist: WiFog,
    smoke: WiSmoke,
    dust: WiDust,
}

const IconState = ({ state }) => {
    const StateByName = stateByName[state]
    return (
        <StateByName />
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState