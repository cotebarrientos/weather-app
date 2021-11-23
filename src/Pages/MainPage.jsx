import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'
import { getCities } from './../utils/serviceCities'
import Box from '@material-ui/core/Box'

const MainPage = () => {
    const history= useHistory()

    const onClickHandler = React.useCallback((city,  countryCode) => {
        history.push(`/city/${countryCode}/${city}`)
    }, [history])
    
    useEffect(() => {
        document.title = 'Weather App | Main'
    }, [])


    return (
        <AppFrame>
            <Box sx={{ mb: 5 }}>
                <Paper elevation={3}>
                <CityList
                    cities={getCities()}
                    onClickCity={onClickHandler}/>
                </Paper>
            </Box>
        </AppFrame>
    )
}

export default MainPage
