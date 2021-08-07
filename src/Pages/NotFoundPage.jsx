import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            Not Found
            <div>
                <Link to='/main'>Back to Main</Link>
            </div>
        </div>
    )
}

export default NotFound
