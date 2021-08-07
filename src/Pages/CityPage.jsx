import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'

const dataExample = [
    {
        "dayHour": "Thu 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Fri 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Fri 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Fri 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sat 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sat 12",
        "min": 12,
        "max": 19,
    }
]

const forecastItemListExample = [
	{ hour: 18, state:"sunny", temperature:17, weekDay:"Thursday" },
	{ hour: 6, state:"cloud", temperature:18, weekDay:"Friday" },
	{ hour: 12, state:"fog", temperature:18, weekDay:"Friday" },
	{ hour: 18, state:"cloudy", temperature:19, weekDay:"Friday" },
	{ hour: 6, state:"rain", temperature:17, weekDay:"Saturday" },
	{ hour: 12, state:"rain", temperature:17, weekDay:"Saturday" },
] 

const CityPage = () => {
    const city = "Buenos Aires"
    const country = "Argentina"
    const state = "cloudy"
    const temperature = 20
    const humidity = 80
    const wind = 5
    const data = dataExample
    const forecastItemList = forecastItemListExample

    return (
        <Grid container
            justify="center"
            direction="column">
        <Grid item xs={12}>
            <CityInfo city={city} country={country} />
        </Grid>
        <Grid container item xs={12}>
            <Grid item xs={8}>
                <Weather state={state} temperature={temperature} />
            </Grid>
            <Grid item xs={4}>
                <WeatherDetails humidity={humidity} 
                    wind={wind} />
            </Grid>
        </Grid>
        <Grid item>
            <ForecastChart data={data} />
        </Grid>
        <Grid item>
            <Forecast forecastItemList={forecastItemList} />
        </Grid>
    </Grid>        
    )
}

export default CityPage
