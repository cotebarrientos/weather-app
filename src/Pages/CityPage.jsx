import React, { useMemo, useEffect } from 'react'
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import { Box, Button, Grid } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress'
import AppFrame from './../components/AppFrame'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'
import useCityPage from './../hooks/useCityPage'
import useCityList from './../hooks/useCityList'
import { getCityCode } from './../utils/utils'
import { getCountryNameByCountryCode } from './../utils/serviceCities'
import { useWeatherDispatchContext, useWeatherStateContext } from '../WeatherContext'

const CityPage = () => {
    const actions = useWeatherDispatchContext()
    const data = useWeatherStateContext()

    const { allWeather, allChartData, allForecastItemList } = data

    const { city, countryCode } = useCityPage(allChartData, allForecastItemList, actions)

    const cities = useMemo(() => ([{ city, countryCode }]), [city, countryCode])

    useCityList(cities, allWeather, actions)
    
    const cityCode = getCityCode(city, countryCode)

    const weather = allWeather[cityCode]
    const chartData = allChartData[cityCode]
    const forecastItemList = allForecastItemList[cityCode]

    const country = countryCode && getCountryNameByCountryCode(countryCode)
    const state = weather && weather.state
    const temperature = weather && weather.temperature
    const humidity = weather && weather.humidity
    const wind = weather && weather.wind

    useEffect(() => {
        document.title = 'Weather App | Forecast'
    }, [])

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
                    {
                        humidity && wind && 
                        <WeatherDetails 
                            humidity={humidity} 
                            wind={wind} />
                    }
                </Grid>
                <Grid item>
                    {
                        !chartData && !forecastItemList && <LinearProgress />
                    }
                </Grid>
                <Grid item>
                    {
                       chartData && <ForecastChart data={chartData} />
                    }
                </Grid>
                <Grid item>
                    { 
                        forecastItemList && <Forecast forecastItemList={forecastItemList} />
                    }
                </Grid>
                <Grid item container 
                justifyContent='center'>
                    <Box sx={{m: 3}}>
                        <Button 
                        variant="contained" 
                        color="primary" 
                        href="/main" 
                        startIcon={<BsFillArrowLeftCircleFill />}>
                            Go Back 
                        </Button>
                    </Box>
                </Grid>
            </Grid>        
        </AppFrame>
    )
}

export default CityPage
