import { useState, useEffect } from 'react'
import axios from 'axios'
import { getWeatherUrl } from './../utils/urls'
import getAllWeather from './../utils/transform/getAllWeather'

const useCityList = (cities) => {
    const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const url = getWeatherUrl({ city, countryCode })
            
            try {
                const response = await axios.get(url)

                const allWeatherAux = getAllWeather(response, city, countryCode)
                
                setAllWeather(allWeather => ({ ...allWeather, ...allWeatherAux}))
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