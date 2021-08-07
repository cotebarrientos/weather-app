import React from 'react'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
    return (
        <div>
            Welcome to Weather App
            <div>
                <Link to='/main'>Go to Main</Link>
            </div>
        </div>
    )
}

export default WelcomePage
