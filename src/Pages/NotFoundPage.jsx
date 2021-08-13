import React from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { Link as RouterLink } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { WiRain } from 'react-icons/wi'

const NotFound = () => {
    return (
        <Grid container
            direction='column'
            justifyContent='center'
            className='full'>
            <div className="highlight">
                <Grid item container xs={12}
                    justifyContent='center'
                    alignItems='center'>
                    <Grid item
                        container
                        direction='column'
                        justifyContent='center'
                        alignItems='center'>
                        <Typography variant='h2' color='inherit'>
                            404
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconContext.Provider value={{ size:'6em' }}>
                            <WiRain />
                        </IconContext.Provider>
                    </Grid>
                    <Grid item
                        container
                        direction='column'
                        justifyContent='center'
                        alignItems='center'>
                        <Typography variant='h4' color='inherit'>
                            Page not found!
                        </Typography>
                        <Link color='inherit'
                            aria-label='menu'
                            component={RouterLink}
                            to='/main'>
                            Go to Main
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}

export default NotFound
