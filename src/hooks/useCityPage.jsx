import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getForecastUrl } from './../utils/urls'
import getChartData from './../utils/transform/getChartData'
import getForecastItemList from './../utils/transform/getForecastItemList'

const useCityPage = () => {
    const [chartData, setChartData] = useState(null)
    const [forecastItemList, setForecastItemList] = useState(null)

    const { city, countryCode } = useParams()
   
    useEffect(() => {
        const getForecats = async () => {
            const url = getForecastUrl({ city, countryCode })

            try {
                const { data } = await axios.get(url)

                const dataAux = getChartData(data)
                
                setChartData(dataAux)

                const forecastItemListAux = getForecastItemList(data)

                setForecastItemList(forecastItemListAux)

            } catch (error) {
            console.log(error)        
            }
        }
        
        getForecats()

    }, [city, countryCode])
    
    return { city, countryCode, chartData, forecastItemList }
}

export default useCityPage