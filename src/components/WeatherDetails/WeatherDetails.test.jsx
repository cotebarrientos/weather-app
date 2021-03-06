import React from 'react'
import { render } from '@testing-library/react'
import WeatherDetails from './WeatherDetails'
import WeatherDetailsStories from './WeatherDetails.stories'

// findByText: Permite encontrar un componente por el texto que muestra
test("WeatherDetails render", async () => {
    const { findByText } = render(<WeatherDetails wind={10} humidity={80} />)

    // Al utilizar las barras utilizamos un REGEXP, una expresión regular
    const wind = await findByText(/10/)

    const humidity = await findByText(/80/)

    expect(wind).toHaveTextContent('Wind: 10 km/h')
    expect(humidity).toHaveTextContent('Humidity: 80%')
})