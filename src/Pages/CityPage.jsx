import React, { useState, useEffect } from 'react'
import axios from 'axios'
import convertUnits from 'convert-units'
import Grid from '@material-ui/core/Grid'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import AppFrame from './../components/AppFrame'
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
	{ hour: 18, state:"clear", temperature:17, weekDay:"Thursday" },
	{ hour: 6, state:"clouds", temperature:18, weekDay:"Friday" },
	{ hour: 12, state:"fog", temperature:18, weekDay:"Friday" },
	{ hour: 18, state:"clouds", temperature:19, weekDay:"Friday" },
	{ hour: 6, state:"rain", temperature:17, weekDay:"Saturday" },
	{ hour: 12, state:"rain", temperature:17, weekDay:"Saturday" },
] 

const CityPage = () => {
    const [data, setData] = useState(null)
    const [forecastItemList, setForecastItemList] = useState(null)

    const { city, countryCode } = useParams()
   
    useEffect(() => {
        const getForecats = async () => {
            const apiKey = process.env.REACT_APP_WEATHER_API_KEY
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&&appid=${apiKey}`

            try {
                const { data } = await axios.get(url)
                console.log('data', data)

                const daysAhead = [0, 1, 2, 3, 4, 5]
                const days = daysAhead.map(d => moment().add(d, 'd'))
                const dataAux = days.map(day => {

                    const tempObjArray = data.list.filter(item => {
                        const dayOfYear = moment.unix(item.dt).dayOfYear()
                        return dayOfYear === day.dayOfYear()
                    })

                    console.log('day.dayOfYear()', day.dayOfYear())
                    console.log('tempObjArray', tempObjArray)

                    const temps = tempObjArray.map(item => item.main.temp)

                    const toCelsius = (temp) => Number(convertUnits(temp).from('K').to('C').toFixed(0))
                    // dayHour, min, max.
                    return ({
                        dayHour: day.format('ddd'),
                        min: toCelsius(Math.min(...temps)),
                        max: toCelsius(Math.max(...temps))
                    })
                })

                setData(dataAux)
                setForecastItemList(forecastItemListExample)

            } catch (error) {
            console.log(error)        
            }
        }
        
        getForecats()

    }, [city, countryCode])

    const country = "Argentina"
    const state = "clouds"
    const temperature = 20
    const humidity = 80
    const wind = 5
    // const data = dataExample
    // const forecastItemList = forecastItemListExample

    return (
        <AppFrame>
            <Grid container
            justifyContent="space-around"
            direction="column"
            spacing={2}>
                <Grid item container
                    xs={12}
                    justifyContent='center'
                    alignItems='flex-end'>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid container item xs={12}
                    justifyContent='center'>
                    <Weather state={state} temperature={temperature} />
                    <WeatherDetails humidity={humidity} 
                        wind={wind} />
                </Grid>
                <Grid item>
                    {
                       data && <ForecastChart data={data} />
                    }
                </Grid>
                <Grid item>
                    { 
                        forecastItemList && <Forecast forecastItemList={forecastItemList} />
                    }
                </Grid>
            </Grid>        
        </AppFrame>
    )
}

export default CityPage
