import React from 'react'
import { useHistory } from 'react-router-dom'

const MainPage = () => {
    const history= useHistory()

    const onClickHandler = () => {
        // history.push permite alterar la URL por programación
        history.push('/city')
    }

    return (
        <div>
            Main
            <button onClick={onClickHandler}>Go to City Page</button>
        </div>
    )
}

export default MainPage
