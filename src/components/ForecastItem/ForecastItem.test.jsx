import React from 'react'
import { render } from '@testing-library/react'
import ForecastItem from './ForecastItem'
import ForecastItemStories from './ForecastItem.stories'


test('ForecastItem render', async  () => {
    const { findByText } = render(<ForecastItem hour={10} state='sunny' temperature={23} weekDay='Lunes' />)

    const hour = await findByText(/10/)

    const weekDay = await findByText(/Lunes/)
    
    const temperature = await findByText(/23/)

    expect(hour).toHaveTextContent('10')
    expect(temperature).toHaveTextContent('23 °')
    expect(weekDay).toHaveTextContent('Lunes')
})