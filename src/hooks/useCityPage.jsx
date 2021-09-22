import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getForecastUrl } from './../utils/urls'
import getChartData from './../utils/transform/getChartData'
import getForecastItemList from './../utils/transform/getForecastItemList'
import { getCityCode } from './../utils/utils'

const useCityPage = (onSetChartData, onSetForecastItemList) => {
    // const [chartData, setChartData] = useState(null)
    // const [forecastItemList, setForecastItemList] = useState(null)

    const { city, countryCode } = useParams()
   
    useEffect(() => {
        const getForecats = async () => {
            const url = getForecastUrl({ city, countryCode })
            const cityCode = getCityCode(city, countryCode)
            try {
                const { data } = await axios.get(url)

                const dataAux = getChartData(data)
                
                onSetChartData({ [cityCode]: dataAux })

                const forecastItemListAux = getForecastItemList(data)

                onSetForecastItemList({ [cityCode]: forecastItemListAux })

            } catch (error) {
            console.log(error)        
            }
        }
        
        getForecats()

    }, [city, countryCode, onSetChartData, onSetForecastItemList])
    
    return { city, countryCode }
}

export default useCityPage