import { useState, useEffect } from 'react'
import axios from 'axios'
import convertUnits from 'convert-units'
// import { validValues } from './../components/IconState'
import { getCityCode } from './../utils/utils'

const useCityList = (cities) => {
    const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const apiKey = process.env.REACT_APP_WEATHER_API_KEY
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`;
            
            try {
                const response = await axios.get(url)

                const { data } = response
                const temperature = Number(convertUnits(data.main.temp).from('K').to('C').toFixed(0))
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