const apiKey = process.env.REACT_APP_WEATHER_API_KEY

export const getWeatherUrl = ({ city, countryCode }) => (
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`
)

export const getForecastUrl = ({ city, countryCode }) => (
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}`
)