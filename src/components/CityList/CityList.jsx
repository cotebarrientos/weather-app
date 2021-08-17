import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import convertUnits from 'convert-units'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

// renderCityAndCountry se va a convertir en una función que retorna otra función
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, country } = cityAndCountry

    return (
        <ListItem
            button 
            key={city} 
            onClick={eventOnClickCity}>
            <Grid container
                justifyContent='center'
                alignItems='center'
            >
                <Grid item
                    md={9}
                    xs={12}>
                        <CityInfo city={city} country={country} />
                </Grid>
                <Grid item
                    md={3}
                    xs={12}>
                    {
                        weather ? 
                        (<Weather 
                        temperature={weather.temperature} 
                        state={weather.state} />) 
                        : 
                        ("No data available")
                    }
                </Grid>
            </Grid>
        </ListItem>
    )
}

// Cities: es un array, y en cada item tiene que tener la ciudad y el pais
const CityList = ({ cities, onClickCity }) => {
    const [allWeather, setAllWeather] = useState({})

    useEffect(() => {
        const setWeather = (city, country, countryCode) => {
            const apiKey = process.env.REACT_APP_WEATHER_API_KEY
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`; 
            axios
            .get(url)
            .then(response => {
                const { data } = response
                const temperature = Number(convertUnits(data.main.temp).from('K').to('C').toFixed(0))
                const state =  data.weather[0].main.toLowerCase()
                console.log(state)
                const propName = `${city}-${country}`
                const propValue = { temperature, state }

                console.log('propName', propName)
                console.log('propValue', propValue)
                
                setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue }))
            })
        }
        
        cities.forEach(({ city, country, countryCode }) => {
            setWeather(city, country, countryCode)
        });

    }, [cities])

    return (
        <List>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, 
                    allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
            }
        </List>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired,
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
