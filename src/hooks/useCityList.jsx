import { useState, useEffect } from 'react'
import axios from 'axios'
// import { validValues } from './../components/IconState'
import { getCityCode, toCelsius } from './../utils/utils'
import { getWeatherUrl } from './../utils/urls'

const useCityList = (cities) => {
    const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const url = getWeatherUrl({ city, countryCode })
            
            try {
                const response = await axios.get(url)

                const { data } = response
                const temperature = toCelsius(data.main.temp)
                const state =  data.weather[0].main.toLowerCase()
               
                const propName = getCityCode(city, countryCode)
                const propValue = { temperature, state }
                
                setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue }))
            } catch (error) {
                if (error.response) {
                    setError('Sorry, a server error has occurred, please try again later.')
                } else if (error.request) {
                    setError('Sorry, server not reachable, please check your internet connection.')
                } else {
                    setError('Sorry, error loading data, please try again later.')
                }  
            }
        }
        
        cities.forEach(({ city, countryCode }) => {
            setWeather(city, countryCode)
        });

    }, [cities])   
    
    return { allWeather, error, setError }
}

export default useCityList